---
title: Manual Generator

internship: GAPVAX

dates: June 2024 to November 2024

skills: Visual Basic, UI/UX design, Requirement gathering, Rapid prototyping, Backend design, Creative problem solving, Microsoft Excel scripting

summary: The Section 4 Template Generator—or "Manual Generator" as everyone else calls it—is a tool I built to streamline the creation of owner's manuals for GapVax trucks. I used OLE automation to control an instance of Adobe Acrobat within Microsoft Excel, using Excel workbooks to handle user input and Acrobat to edit and save PDFs.
---

GapVax designs and builds highly customized vacuum trucks, and each one ships with a detailed owner's manual. In them, section 4 "Operation" covers how to use every piece of equipment on the truck, but because no two trucks are exactly alike, each truck requires a unique section 4 that needs to be created by hand.

While that level of customization showcases GapVax's quality, it makes manual creation slow and labor-intensive. By the time I joined, production had scaled dramatically, and the old approach to Section 4 had become a serious bottleneck.

When using the tool I developed, the user is presented with a list of optional equipment features for a specific truck model. They can then select the desired features from the customer's order, and the program generates a customized section 4 template of documentation based on those selections. While some adjustments may still be necessary before the final document is ready to be included with the final manual for the truck, the tool significantly reduces the manual effort by automatically assembling the relevant content starting points for the chosen options—essentially handling the tedious "gluing together" of documentation for optional equipment features. This is where the bloated name "Section 4 Template Generator" comes from.

Using Excel as an app platform may sound strange; I thought so too. But leadership had good reasons: they needed something requiring minimal maintenance after I left, easy to distribute without an installer, and familiar to non-technical staff. Excel checked all three.

I split the app into multiple front ends and a single back end. Each front end is a standalone workbook containing only UI — buttons and configuration for a given truck model. Users copy the UI workbooks wherever they like and can move, duplicate, or share it freely without breaking anything, because all the logic lives in a separate backend workbook that runs invisibly in the background. Each front end makes a single call to the backend's API, which works with any correctly formatted frontend.

Adding new truck models requires no coding. Just duplicate an existing front end, configure it for the new model, and it works. Content options can be added directly in the workbook by inserting rows or using the wizard I built.

The biggest challenge was the scripting language itself. Visual Basic for Applications technically supports classes but lacks inheritance, polymorphism, and proper exception handling (yes, I had to use OnError GoTo). Despite that, I implemented the MVP pattern and a clean front/back end split. This was my first industry project — freshman summer — so following sound engineering principles took lots of research. I came away with a genuine appreciation for why OOP exists, plus practical experience in requirements gathering, designing for non-technical users, backend architecture, and, in general, I learned how to read documentation and forums to find solutions to my problems.