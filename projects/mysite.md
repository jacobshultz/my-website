---
title: This Website

dates: April 2026 to Present

skills: Front-End Web Dev, Next.js, React, TypeScript, HTML, CSS, Nginx, Docker, GitHub Actions, DevOps, Linux

summary: I build this website using Next.js, containerized it, and set up an auto-deploy pipeline with GitHub actions.

order: 2

repo: https://github.com/jacobshultz/my-website
---

### Web Dev
I decoupled everything, so all the articles on the homepage and the projects on this page are all read from markdown files, parsed, and dynamically displayed here. To add onto this all I have to do is drop in a new markdown file!

As far as the web dev part of this project goes, it was fun to use React. I think react makes a little more logical sense than template engines, the reusability/componenets of React feels similar to using regular functions. Next.js had a lot of conveniences that I liked. Not sure it would be my first pick for building a web app for industry, though.

### DevOps
By far the more interesting part of the project, I full containerized the project and set up a GitHub actions workflow to auto-deploy the my VPS on push/merge to main.

Using docker, I was able to get the project size down **from 2.34 GB to just 288 MB**!

The auto-deploy workflow operates as follows:
- Build the dev image for linting/testing
- Build the prod image and push to docker hub
- SSH into my server and restart a systemd service, which will pull the latest image.

---

I always wanted a website with my name on it. Before this I had a little GitHub pages site that I spent a lot of time on. Honestly, I'll probably revisit that one day. Since this site is nearly just static pages I could *probably* implement something similar with GitHub pages and not have to pay hosting fees.

But, this was still a great exercise in React, the web servers, Docker, and GitHub actions.