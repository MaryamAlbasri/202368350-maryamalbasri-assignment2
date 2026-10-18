# AI Usage Report - Assignment 2

## 1. Tools Used & Use Cases

**Claude (Anthropic)** was the AI tool I used. As in Assignment 1, I used it step by step rather than asking it to build everything at once.

| Stage | How I used Claude |
|---|---|
| Planning | Went through the assignment requirements and decided which feature to build for each one (dynamic content, data handling, animation, error handling) |
| Repository setup | Terminal commands to clone the new repository and copy my Assignment 1 files into it as a starting point |
| Filter & search | Generated the filter buttons, `data-category` attributes, and the JavaScript that shows or hides cards |
| Dark mode | Generated the theme toggle and the `localStorage` code that remembers the choice |
| Form validation | Generated the validation logic, the error messages, and the regular expression for checking emails |
| Animations | Suggested the hover lift, colour transitions, and the fade-in keyframe animation |
| Debugging | Helped me find why the filter buttons were not appearing (my CSS had been pasted inside a media query), why a second theme button showed at the bottom of the page (a duplicate `id`), and why my contact section lost its heading and alignment (a missing `<section>` tag) |
| Code explanation | Explained each new piece line by line, including `data` attributes, `localStorage`, and how the regular expression works |
| Documentation | Helped draft this report, the README, and the technical documentation, which I reviewed and completed |

## 2. Benefits & Challenges

**Benefits**
- **Speed:** I could add four new features in one session instead of searching for tutorials for each one.
- **Explanations:** I understood *why* the code works, for example that `localStorage` survives a refresh while a variable does not.
- **Debugging from screenshots:** When I shared pictures of my page, Claude identified problems I could not see, such as CSS rules trapped inside a media query.

**Challenges**
- **Copy-and-paste errors:** The hardest part was not the code but placing it correctly. I broke my HTML structure twice by pasting a block in the wrong place, which deleted my projects section and nested one section inside another.
- **Generic suggestions:** The first suggestions were generic. I had to decide which features actually suited my portfolio.
- **Checking the output:** Some code had small issues in my context, such as the search box staying white in dark mode because it had no background colour set.

## 3. Learning Outcomes

- **`data-` attributes:** how to store my own information on an HTML element and read it in JavaScript with `dataset`.
- **`localStorage`:** how browsers save small pieces of data between visits, and the difference between that and a normal variable.
- **Form validation:** how `novalidate` lets me replace the browser's default messages with my own, and how a regular expression checks an email's shape.
- **CSS animation:** the difference between a `transition` (reacts to a change) and `@keyframes` (a defined sequence).
- **Debugging structure:** how a single misplaced brace or a missing closing tag can break an entire section, and how to read the page to work out where.
- **Git workflow:** committing each feature separately to keep a meaningful history.

## 4. Responsible Use & Modifications

I did not submit the AI output unchanged. What I decided or changed myself:

- **Chose the features:** I selected filter and search for dynamic content, and dark mode with `localStorage` for data handling, because they suit a portfolio. I also decided to bring back the theme toggle I had removed in Assignment 1.
- **Chose the categories:** I labelled my own projects as Web and Hardware.
- **Fixed the AI's code:** I added a background and text colour to the search box so it works in dark mode, and merged duplicated CSS rules.
- **Fixed my own mistakes:** I repaired the HTML structure after pasting errors, and removed a duplicate theme button and a duplicate `form-status` element.
- **Wrote my own comments:** after having each part explained, I wrote the code comments in my own words.
- **Completed the documentation:** I checked the drafted README and technical documentation against my actual code and filled in my own testing details.

**How I checked correctness**
- Tested every feature by hand: each filter button, searching for a word that exists and one that does not, toggling the theme and refreshing to confirm it was remembered, and submitting the form empty, with a bad email, and correctly filled.
- Checked the layout at desktop, tablet and phone sizes using browser DevTools.
- Used the browser console to check for errors.
- Read through each piece of code so I could explain it in my technical documentation.

**Academic integrity:** All AI assistance is documented in this report. The decisions, content, and final code choices are my own, and I understand every part of what I submitted.