---
title: Hello World
date: 2026-03-31
summary: Every pompous portfolio website has to have its genesis.
---

As of writing I'm currently still building this site. I want to set up an article system, but to do that I need an article!

Let's discuss some things about the site:

### shultz.foo

_'shultz'_ like my name. _'foo'_ as in _foo, bar, baz_. I know, I'm clever.

### site
This website will serve as a repository for all my personal work. Whether that be FOSS projects or research. I'm also planning to get my money's worth out of this puny VPS, so this host may also contain random other projects.

### goals
- get a job
- make FOSS
- do experiments

Now I'll use this awesome claude slop to get some sort of styling scheme going.

# The Grand Markdown Showcase
### *A tour of everything Markdown can do*

---

## Table of Contents

- [Headings](#headings)
- [Text Formatting](#text-formatting)
- [Blockquotes](#blockquotes)
- [Lists](#lists)
- [Code](#code)
- [Tables](#tables)
- [Links & Images](#links--images)
- [Horizontal Rules](#horizontal-rules)
- [Task Lists](#task-lists)
- [Footnotes](#footnotes)
- [Definition Lists](#definition-lists)
- [Emoji](#emoji)
- [Escaping Characters](#escaping-characters)

---

## Headings

# H1 — The Big Kahuna
## H2 — The Deputy
### H3 — Middle Management
#### H4 — Getting Smaller
##### H5 — Almost a Footnote
###### H6 — The Fine Print

---

## Text Formatting

Regular paragraph text looks like this. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraphs are separated by a blank line.

This is a second paragraph. Pretty straightforward stuff.

**Bold text** stands out loud and proud.

*Italic text* leans in for emphasis.

***Bold and italic*** because why choose?

~~Strikethrough~~ for things that didn't make the cut.

`Inline code` for that monospaced look.

Superscript: E = mc^2^ *(rendered in some parsers)*

Subscript: H~2~O *(rendered in some parsers)*

==Highlighted text== *(rendered in some parsers)*

A manual line break ends here  
and continues on the next line (two trailing spaces).

---

## Blockquotes

> "The best time to plant a tree was 20 years ago. The second best time is now."
> — Chinese Proverb

> Blockquotes can span multiple lines.
> They can go on for quite a while if you need them to.

> **Nested blockquotes** are a thing too:
>
> > This is a nested blockquote inside the outer one.
> >
> > > And you can go even deeper, if you dare.

---

## Lists

### Unordered Lists

- Apples
- Bananas
- Cherries
  - Bing cherries
  - Rainier cherries
    - Wild Rainier cherries (getting specific)

### Ordered Lists

1. Wake up
2. Make coffee
3. Open laptop
   1. Check emails
   2. Close emails in despair
4. Start working

### Mixed Nesting

1. Plan the trip
   - Book flights
   - Reserve hotel
     - Check cancellation policy
2. Pack bags
   - Clothes
   - Toiletries
3. Depart

---

## Code

### Inline Code

Use `console.log("hello")` to print to the console.

Don't forget to run `npm install` before starting the project.

### Fenced Code Blocks

```javascript
// A classic JavaScript function
function greet(name) {
  const message = `Hello, ${name}! Welcome to Markdown.`;
  console.log(message);
  return message;
}

greet("World");
```

```python
# Python is pretty too
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(10)))
```

```bash
# Shell commands
echo "Setting up project..."
git clone https://github.com/example/repo.git
cd repo
npm install && npm run build
echo "Done!"
```

```json
{
  "name": "markdown-showcase",
  "version": "1.0.0",
  "description": "All the markdown things",
  "features": ["headings", "lists", "tables", "code"],
  "awesome": true
}
```

```
Plain preformatted block — no syntax highlighting,
just monospace text
    with preserved    spacing.
```

---

## Tables

### Basic Table

| Name       | Role         | Favorite Language |
|------------|--------------|-------------------|
| Alice      | Backend Dev  | Python            |
| Bob        | Frontend Dev | TypeScript        |
| Carol      | DevOps       | Bash              |
| Dave       | Data Sci     | R                 |

### Aligned Columns

| Item          | Price   | In Stock |
|:--------------|--------:|:--------:|
| Coffee Beans  |  $12.99 |    ✅    |
| Fancy Teapot  |  $49.95 |    ✅    |
| Unicorn Tears | $999.00 |    ❌    |
| Tap Water     |   $0.00 |    ✅    |

*Left-aligned `:---`, right-aligned `---:`, centered `:---:`*

---

## Links & Images

### Links

[Visit OpenAI](overpromiseunderdeliver.lmao)

[Visit Anthropic](ihaveafriendnamedjoe.true)

Bare URL: <https://example.com>

Email: <hello@example.com>

[Jump back to the top](#the-grand-markdown-showcase)

Reference-style link: [Markdown Guide][mdguide]

[mdguide]: https://www.markdownguide.org "The Markdown Guide"

### Images

![A placeholder image](https://via.placeholder.com/600x200?text=Markdown+Showcase "A lovely placeholder")

Reference-style image:

![Alt text][logo]

[logo]: https://via.placeholder.com/100x100?text=Logo "A small logo"

---

## Horizontal Rules

Three ways to draw a line:

---

***

___

---

## Task Lists

### Project Checklist

- [x] Set up the repository
- [x] Write the README
- [x] Add a license
- [ ] Write the actual code
- [ ] Add tests
- [ ] Deploy to production
- [ ] Sleep

### Weekend Goals

- [x] Sleep in
- [x] Make pancakes
- [ ] Go to the gym
- [ ] Call Mom
- [x] Watch a movie instead of going to the gym

---

## Footnotes

Markdown is a lightweight markup language[^1] created by John Gruber in 2004[^2].

It was designed to be readable as plain text[^3] and convertible to HTML.

[^1]: A markup language uses tags or symbols to format text.
[^2]: John Gruber developed it with help from Aaron Swartz.
[^3]: This is one of Markdown's core design philosophies — it should look good even without rendering.

---

## Definition Lists

*(Supported in extended Markdown parsers)*

Markdown
: A lightweight markup language for creating formatted text.

HTML
: HyperText Markup Language — the standard language for web pages.

Parser
: A tool that reads Markdown and converts it to another format, usually HTML.

---

## Emoji

*(Supported in GitHub Flavored Markdown and many other parsers)*

:rocket: Let's launch this thing!

:white_check_mark: Task complete.

:warning: Proceed with caution.

:heart: Made with love.

:coffee: Powered by caffeine.

---

## Escaping Characters

Sometimes you need to show literal Markdown symbols without triggering formatting:

\*This is not italic\*

\*\*This is not bold\*\*

\# This is not a heading

\- This is not a list item

\`This is not inline code\`

\[This is not a link\](https://example.com)

The backslash `\` is your escape character.

---

## HTML Inside Markdown

Markdown allows raw HTML for things it can't do natively:

<details>
  <summary>Click to expand a hidden section</summary>

  Surprise! You can hide content using HTML `<details>` tags inside Markdown.

  - This list is inside the collapsed section
  - Pretty neat, right?

</details>

<br>

<p align="center"><strong>Centered text via HTML</strong></p>

<mark>Highlighted with an HTML mark tag</mark>

---

## A Poem to Close

*In spaces and hashes, in dashes and stars,*
*We write without styling — yet meaning goes far.*
*A pound sign's a heading, a dash is a rule,*
*And anyone typing can look like a pro.*

---

> **The End.** You've seen it all — go forth and format. 🎉