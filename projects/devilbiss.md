---
title: Unified Sound Tester

internship: Drive DeVilbiss Healthcare

dates: May 2025 to August 2025

skills: .NET, MS SQL Server, Git/GitHub, Atlassian, MS Access, Winforms, Software Testing, Documentation

summary: The Unified Sound Tester is an application used daily on the production line to verify whether each unit meets acceptable volume standards during operation. Prior to this project, the sound-testing process relied on three separate applications. The goal was to consolidate them into a single, streamlined tool to increase production efficiency, extend long-term maintainability, and improve scalability.

order: 0
---

At DeVilbiss, sound testing is a regular part of the production line assembly process. Each unit is checked to make sure its noise levels stay within set limits. The first program, built in VB6, handled just three oxygen concentrator models. As production expanded and new models came out, it didn't make sense to continue supporting the original sound tester application written in ancient VB6, so fancy new .NET apps were made to accommodate each of the new models.

This solution, while working temporarily, was not without its issues. To begin, assemblers on the factory floor were confused with multiple apps. To them, a sound test is just a sound test. Why do they need to open a new program depending on the unit? Additionally, the SwEs at DeVilbiss knew that as production expanded this multi-app approach would become unmaintainable. The software team had built several programs that all do almost exactly the same thing. If ten new concentrator models are added to production, will ten new apps be created? The assemblers definitely won't like that! Not to mention, if something should change with how sound testing was performed, how long will it take to get ten (identical) changes implemented across all the apps? For these reasons, the SwE team at DeVilbiss recognized the need for a new application that could support sound testing for every model of oxygen concentrator on the line, that could "Unify" the three existing sound testers.

When using the tool I built, testing is simple and streamlined: scan the unit's serial number, enter its decibel reading, and the app automatically routes the results to the right database all in one seamless flow. As of writing, it supports every existing oxygen concentrator model. It's easily expanded via an inheritance structure I designed, so that as new models are added to production they can be quickly supported by the sound tester. 

The main development challenge was the backend. I needed a system flexible enough to scale while integrating with DeVilbiss's existing codebase and databases, code and tables I hadn't written. Each model required unique CRUD logic, and I made numerous contributions to existing modules along the way. The software team guided me through the whole process, from paper sketches to backend architecture to documentation and testing protocols.

The experience gave me a strong foundation in database work and collaborative development, and introduced me to what a high-functioning engineering team actually looks like.