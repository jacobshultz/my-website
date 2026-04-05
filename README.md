# My Portfolio Website
### Powered by React and Next.js, fully containerized, automated builds by GitHub Actions.

# Commands
**Start dev container with hot reload/build:** `docker compose watch nextjs-dev`

**Run unit tests:** `docker compose --profile tools run --build --rm nextjs-test`

**Run linter:** `docker compose --profile tools run --build --rm nextjs-lint`

**Build and run prod image:** `docker compose up nextjs-prod-standalone`