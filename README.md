# 202368350-maryamalbasri-assignment2
# Maryam Albasri - Personal Portfolio (Assignment 2)

An interactive, responsive personal portfolio website built with HTML, CSS, and JavaScript for **SWE363 - Web Engineering, Assignment 2** at King Fahd University of Petroleum and Minerals (KFUPM).

This project builds on my Assignment 1 portfolio by adding dynamic content, data handling, animations, and user feedback.

## Live Demo
🔗 [View the website](PASTE-YOUR-GITHUB-PAGES-LINK-HERE)

## What's New Since Assignment 1
| Feature | Description |
|---|---|
| **Project filter** | Buttons to show All, Web, or Hardware projects |
| **Live search** | Projects are filtered as you type |
| **Empty state** | A clear "No projects found" message when nothing matches |
| **Dark / light theme** | A toggle in the navbar, saved with `localStorage` so the choice is remembered |
| **Form validation** | Custom error messages for empty fields, invalid emails, and short messages |
| **Animations** | Card hover lift, button colour transitions, theme fade, and an animated confirmation message |

## Features Carried Over From Assignment 1
- About Me section with a greeting based on the time of day
- Projects section with an image popup (lightbox)
- Contact form (no backend)
- Active navigation link highlighting
- Smooth scrolling and a responsive layout for desktop, tablet, and mobile

## Technologies
- HTML5 (semantic elements, data attributes)
- CSS3 (Flexbox, Grid, CSS variables, media queries, transitions, keyframe animation)
- JavaScript (ES6, DOM manipulation, IntersectionObserver, localStorage, regular expressions)

## Project Structure
```
202368350-maryamalbasri-assignment2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Setup Instructions (Run Locally)
No installation or dependencies are needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/MaryamAlbasri/202368350-maryamalbasri-assignment2.git
   ```
2. Open the project folder:
   ```bash
   cd 202368350-maryamalbasri-assignment2
   ```
3. Open `index.html` in any web browser (double-click the file, or right-click → Open With → your browser).

**Optional:** In VS Code, use the *Live Server* extension to auto-refresh the page while editing.

## How to Use
- Use the navigation bar to jump to **About**, **Projects**, or **Contact**.
- Click **All**, **Web**, or **Hardware** to filter the projects, or type in the search box to find one by name.
- Click the **🌙 / ☀️** button to switch between light and dark mode. Your choice is saved for next time.
- Click a project image to open it larger, and close it with ✕, a background click, or the Esc key.
- Fill in the contact form and press **Send**. Invalid fields show an error message; a valid form shows a confirmation.

## AI Use Summary
I used **Claude** to help generate and explain the new interactive features, debug problems in my code, and draft documentation. I chose which features to build, edited the code, fixed the structure when pasting broke it, and tested everything in the browser. Full details are in [docs/ai-usage-report.md](docs/ai-usage-report.md).

## Documentation
- [Technical Documentation](docs/technical-documentation.md)
- [AI Usage Report](docs/ai-usage-report.md)

## Author
**Maryam Albasri** - Computer Science student, KFUPM