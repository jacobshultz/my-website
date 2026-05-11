---
title: Helpdesk Shift at Blackington

organization: Pitt-Johnstown (CS1762 Web Programming)

dates: March 2026 to April 2026

skills: Front-End and Back-End Web Dev, Node.js, TypeScript, REST APIs, MongoDB, HTML, CSS, JavaScript, Nginx

summary: My friends and I built a browser-based Five Nights at Freddy's fan game along with a deployable Node.js backend to serve it.

order: 0

repo: https://github.com/jacobshultz/five-nights-at-blackington
---

The server is written in TypeScript and connects to MongoDB, providing user accounts, JWT-based authentication and authorization, and a REST HTTP API. 

The Node.js application serves the game directly to the browser, giving players a charming FNAF experience backed by a full account and persistence layer. 

At one point the project was deployed behind an Nginx reverse proxy with TLS encryption.

The really interesting part of the project is that we used no front-end libraries. Poor Danny sculpted a rendering engine just to make the game work.