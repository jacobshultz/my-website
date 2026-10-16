---
title: AI
date: 2026-10-16
summary: It's the worst time, ever, to be graduating with a degree in CS. But, it may be the best time in history to be getting into tech.
---

When I tell people I work with computers, the first thing they ask is always the same: *"What do you think about this 'AI' stuff?"* Usually insinuating *"How do you feel about your job prospects?"*

I'm tired of answering this question. So I'm putting my thoughts here.

### 2022
---
Since the release of GPT 3.5 the talk of "LLMs will replace SwEs/all white collar jobs in 6mo!" has been shouted from the rooftops... every 6mo...

Hiring for software engineers plummeted in 2022 after companies began correcting for overhiring during covid. During this period these oogo-corps had an issue: how do you lay off 10% of your workforce without your investors thinking it's the judgement day? The solution was to say the layoffs were *'cause AI.*

This has led to much of the hype/fear around this tech.

### The question of value
---
We've come a long way since GPT 3.5. While just a year or two ago one could still argue that LLMs aren't useful in professional contexts, I think anyone who has used Opus for 15 minutes will admit that **these models do bring value to our profession**.

The question that remains is **how much value do these models bring**?

Like any other tool we have at our disposal it depends on the situation. A professional must ask themself: *What happens if this product breaks?* 

If your product is an app that stops people from scrolling on their phone for more than an hour, then the consequences for your app failing are, the user scrolls too long, goes *"This app doesn't work..."* and uninstalls.

On the other hand, say you're building software for the launch of a rocket with human passengers. Consequences of failure? Typically death.

In *mission-critical* situations code must **!!always** undergo thorough examination and testing.

You have three options when it comes to verifying the function of LLM-generated code:
1. Don't
1. Read it
1. Set up complex and exhaustive testing workflows to cover every inch of the code surface.

For our scrolling app we can opt for option 1, not reading the code. When you see people on twitter boasting that there's *"No value reading code anymore,"* and *"LLMs are just another abstraction layer"* this is the type of software they are building... if they are actually building anything at all.

The only thing worse than writing your own crappy code is reading someone else's crappy code. Reading LLM generated code takes an enormous effort, so the workflow of prompt everything -> read -> push doesn't really work. What does work is having your LLM produce things in increments and verifying each part one at a time. Still not as fast as vibecoding, but this method is my preferred one for using LLMs.

Then, the last option, doing lots of testing. The issue there is that knowing what to test in a codebase you didn't write is difficult to deduce. Hilariously I see people online boast they've solved this problem with 'QA agents' In that case I suppose my [left hand](https://media1.tenor.com/m/fvr0UlDNOzMAAAAd/bla-bla-bla-talk-to-the-hand.gif) is my QA agent. Not that LLM code review is a bad idea, but it isn't the final solution. Similar to the last paragraph the solution here is to work incrementally with an LLM to produce testing infrastructure.

### Divergence
---
Every company on earth has software needs, whether they know it or not. Companies will *never* be able to satisfy their software needs.

I see two types of developers moving forward:
- Business-oriented ones who leverage AI to ship software faster than ever. These people will be deeply involved with interfacing with customers or other departments within the business and understanding requirements. Their goal: to slam out decent software as fast as possible to solve immediate problems. If the software breaks in a week, or a month, that's okay, cause these people can just generate more.
- The professionals who abide by traditional software development practices. These are the people who will be writing mission-critical infra, developing new technologies and scientific advancements. They'll still use AI, but everything they generate they will thoroughly review. This group is writing software to last the next decade.

The existing SwE market, the traditional engineers, aren't going anywhere. This is evident by the fact that job openings for seniors and mid-levels have rebounded. Juniors, not so much, since the role they used to hold can now be done by LLMs.

For the 'applied' engineers? Tire shops, hair salons, grocery stores. They'll all one day need a technology generalist who can use AI to handle all their needs.

I'm serious. In 5 years or so it's going to be better than the 80s. Understanding technology deeply and being able to apply it quickly will be the most lucrative skills of the 21st century.