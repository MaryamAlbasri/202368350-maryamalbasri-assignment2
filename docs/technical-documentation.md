# Technical Documentation - Assignment 2

## 1. Overview
A static, single-page personal portfolio website with no frameworks, libraries, or backend. It extends the Assignment 1 site with interactive features: project filtering and search, a saved theme preference, form validation, and animations. Everything runs in the browser by opening `index.html`.

## 2. Technologies
| Technology | Used for |
|---|---|
| **HTML5** | Structure using semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`) and `data-` attributes |
| **CSS3** | CSS variables, Flexbox, Grid, media queries, transitions, `@keyframes` animation |
| **JavaScript (ES6)** | DOM manipulation, event listeners, `IntersectionObserver`, `localStorage`, regular expressions |
| **Git & GitHub** | Version control and hosting (GitHub Pages) |

## 3. File Structure
| File / Folder | Purpose |
|---|---|
| `index.html` | Page content and structure |
| `css/styles.css` | Styling, theming, layout, animations |
| `js/script.js` | All interactive features |
| `assets/images/` | Project images |
| `docs/` | Technical documentation and AI usage report |
| `.gitignore` | Excludes system and editor files from the repository |

## 4. Dynamic Content: Filter and Search

**How it works**
- Each project card carries a `data-category` attribute (`web` or `hardware`), and each filter button carries `data-filter`.
- `updateProjects()` loops through the cards and keeps a card visible only if it passes **both** tests: its category matches the active filter (or the filter is `all`), and its text contains what is typed in the search box.
- Non-matching cards get a `hidden` class (`display: none`).
- A counter tracks how many cards remain visible.

**Events used**
- `click` on the filter buttons, which also moves the `active` class so the selected filter is highlighted.
- `input` on the search box, which fires on every keystroke so filtering happens live.

## 5. Data Handling: `localStorage`

The theme toggle saves the user's choice so it survives a page refresh or a later visit.

- Clicking the button toggles a `dark` class on `<body>`. That class redefines the CSS colour variables, so the whole site changes colour at once.
- The choice is written with `localStorage.setItem("theme", "dark" / "light")`.
- When the page loads, `localStorage.getItem("theme")` is read, and dark mode is re-applied if it was saved.

Unlike a normal JavaScript variable, `localStorage` keeps data in the browser after the page closes.

## 6. Error Handling and User Feedback

| Situation | Feedback shown |
|---|---|
| No project matches the filter or search | "No projects found. Try a different filter or search term." |
| Empty name field | "Please enter your name." |
| Empty or invalid email | "Please enter your email." / "Please enter a valid email address." |
| Message shorter than 10 characters | "Your message should be at least 10 characters." |
| Valid form submitted | "Thanks, [name]! Your message has been received." |

The form uses `novalidate` so the browser's default pop-ups are replaced by custom messages shown under each field. Invalid fields also get an `invalid` class that turns their border red. The email is checked with a regular expression (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), which requires text, an `@`, more text, a dot, and an ending.

## 7. Animation and Transitions
- **Card hover:** `transform: translateY(-4px)` plus a shadow, eased by a `transition`.
- **Filter buttons:** background and text colour fade over 0.2s on hover and when selected.
- **Theme switch:** the page background and text colour fade over 0.3s.
- **Theme button:** scales up slightly on hover.
- **Confirmation message:** a `@keyframes fade-in` animation fades and slides it in.

## 8. Responsive Design
| Screen width | Layout |
|---|---|
| Above 768px | Projects in 2 columns |
| 768px and below | Projects in 1 column, smaller heading |
| 480px and below | Smaller nav text, less section padding |

The filter bar uses `flex-wrap: wrap`, so the buttons and search box stack neatly on narrow screens.

## 9. Browser Compatibility
Tested on: ✏️ *(list the browsers you tested, e.g. Safari, Google Chrome)*

All features use standard, widely supported web APIs.

## 10. Accessibility
- The theme button has an `aria-label` describing its purpose.
- Every image has descriptive `alt` text.
- Form inputs are linked to their labels with `for` / `id`.
- Error messages appear directly under the field they refer to.

## 11. Known Limitations and Future Improvements
- The contact form has no backend, so messages are not actually sent.
- Filtering is based on hard-coded cards in the HTML; a future version could build the cards from a JavaScript array or a JSON file.
- Possible additions: more projects and categories, data fetched from a public API, and a skills section.