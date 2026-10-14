---
title: DeVilbiss Healthcare Internship

position: Software Enginnering Intern I, II

dates: May 2025 to August 2025, May 2026 to August 2026

skills: .NET, MS SQL Server, .NET MAUI, Full-Stack dev, QA, Git/GitHub, Jira, MS Access, Winforms, Software Testing, Documentation

summary: Collaborated with a team of software engineers to support the needs of the production of medical devices.

order: -999
---

### Log Backup Service
---
Developed the Log Backup Service: a .NET Windows Background Service which runs on each production-line PC and uploads logs to a central location. The tool compresses logs by day into an archive as well as parses them and stores key lines in SQL server where they can be searched on.

Logs are very important at DeVilbiss as they serve as a history of the production line. They record more than just software function; they record instrument readings, operators, and key times. When something goes wrong on the production line, the first step is to check the logs. 

The issue was, to check the logs, the software engineers had to physically access the production line machine and leaf through folders over hundreds of thousands of lines to find what they were looking for.

Additionally, there was no redundancy in place. A machine going down meant that the logs contained within were lost.

The Log Backup Service solves this by parsing and backing up logs at a scheduled time daily. The service parses each log line and checks for warning, errors, instrument readings, and even the beggining/ends of subprocesses within the software. The "important" lines are then stored in SQL server where they can be keyword searched.

The actual log files themselves are compressed into an archive by day and uploaded to a shared file storage location.

Essentially, with this system, the SwEs are able to perform a keyword search for information they care about, and then they can access the compressed archive containing the rest of the log file to get the rest of the information. When I left at the end of the summer of '26 there was talk about creating a web app to facilitate this process.

### Unified Sound Tester
---
Developed the Unified Sound Tester, an application used daily on the production line to verify whether each unit meets acceptable volume standards during operation. Prior to this project, the sound-testing process relied on three separate applications. The goal was to consolidate them into a single, streamlined tool to increase production efficiency, reduce redundancy, extend long-term maintainability, improve scalability, and enhance operator experience.

### Oxygen Analyzer Saturation Testing
---
I conducted R&D testing that proved waiting three minutes for our oxygen analyzers to become saturated was unnecessary. Was able to reduce the three minute delay down to a minute and a half, essentially saving the company a minute and a half per unit produced.