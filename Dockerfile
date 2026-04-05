# syntax=docker/dockerfile:1

# dockerfiles are the blueprints for building images.

ARG NODE_VERSION=25.7.0
ARG PNPM_VERSION=10.32.1

# ====================================================
# Stage 1: Install dependencies
# ====================================================

FROM node:${NODE_VERSION}-alpine as deps

WORKDIR /app

# Install pnpm
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.local/share/pnpm/store to speed up subsequent builds.
# Leverage bind mounts to package.json and pnpm-lock.yaml to avoid having to copy them
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \ 
    pnpm install --frozen-lockfile

# ====================================================
# Stage 2: Build Next.js app
# ====================================================

FROM node:${NODE_VERSION}-alpine as builder

WORKDIR /app

# Install pnpm
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

# copy dependencies from prev step
COPY --from=deps /app/node_modules ./node_modules

# copy project src into container (except excluded by .dockerignore)
COPY . .

# something to do with next.js optimization
ENV NODE_ENV=production

RUN pnpm run build

# ====================================================
# Stage 3: Run the server (standalone)
# ====================================================

FROM node:${NODE_VERSION}-alpine AS runner

WORKDIR /app

# prod env vars
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy the public assets
COPY --from=builder --chown=node:node /app/public ./public

# Create .next directory with correct ownership for prerender cache
RUN mkdir .next && chown node:node .next

# Copy the standalone server and its traced dependencies
COPY --from=builder --chown=node:node /app/.next/standalone ./

# Copy the static assets (CSS, JS bundles)
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Run as non-root
USER node

EXPOSE 3000

# start standalone server
CMD ["node", "server.js"]