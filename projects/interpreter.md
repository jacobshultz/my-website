---
title: Interpreter

organization: Pitt-Johnstown (CS1720 Programming Languages)

dates: October 2025 to December 2025

skills: Rust, Programming language design, GitHub

summary: Seth Baker and I designed and implemented a custom interpreted programming language, constructing the entire interpretation pipeline from the ground up.

order: 5

repo: https://github.com/jacobshultz/interpreter
---

The project involved building four core components that work together to transform source code into executable output:

Lexer — Tokenizes raw source code into meaningful symbols
Parser — Performs syntactic analysis and constructs an abstract syntax tree from the token stream
Analyzer — Performs semantic analysis and validates program structure
Evaluator — Executes the analyzed code and produces results

Seth wrote the Lexer, I wrote the parser, and Dr. Ohl gave us the bones of the Analyzer and Evaluator which we both worked on together to make a little language.

This end-to-end implementation gave us deep insight into how programming languages work under the hood, from the first character read to the final output displayed.

I like Rust quite a bit. I know a LOT of people who don't, including Seth (lol). But, if I had to choose a language to write performant code, it would be Rust.

When I took Programming Languages in college I felt like a sucker. I thought to myself, "I'll never use this! Why am I wasting my time?" but this project genuinely is one of the most important things I ever did in college. Understanding how a programming language works is something I have used every single day since this class. It has helped me with not only debugging but picking up new languages quickly. Believe it or not, a lot of documentation asssumes you know these concepts!