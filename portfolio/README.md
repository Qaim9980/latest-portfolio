# AI ENGINEER // PORTFOLIO

A brutalist single-page portfolio for an AI engineer. Built with React + Vite.

## Quick start

```bash
cd "C:\Users\qaim9\Desktop\portfolio"
npm install      # only the first time
npm run dev      # opens http://localhost:5173
```

To produce a static build you can deploy anywhere:

```bash
npm run build    # outputs to ./dist
npm run preview  # serves the built dist/ locally
```

## Customising your content

**Everything you need to edit lives in `src/data.js`.** Open that file and change
the values inside the exported objects — name, role, projects, experience,
skills, social links, etc. Every section reads from it, so you do not need to
touch the component files for content changes.

| Section       | Edit in `data.js`    | Component file                  |
|---------------|----------------------|---------------------------------|
| Brand / nav   | `profile`            | `src/components/Nav.jsx`        |
| Hero          | `profile`            | `src/components/Hero.jsx`       |
| About         | `about`              | `src/components/About.jsx`      |
| Stats         | `stats`              | `src/components/Stats.jsx`      |
| Skills        | `skills`             | `src/components/Skills.jsx`     |
| Projects      | `projects`           | `src/components/Projects.jsx`   |
| Experience    | `experience`         | `src/components/Experience.jsx` |
| Contact       | `contact`, `profile` | `src/components/Contact.jsx`    |

## Style tweaks

The design system is in `src/styles/index.css` (CSS variables at the top):

- `--ink` — main foreground (default near-black)
- `--paper` — main background (off-white)
- `--accent` — single highlight colour (electric yellow)
- `--accent-2` — secondary highlight (red-orange, optional)
- `--line`, `--line-thick` — border thickness
- `--shadow`, `--shadow-sm`, `--shadow-lg` — hard drop shadows

Fonts are loaded from Google Fonts in the same file (Archivo Black + JetBrains Mono).

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js                 ← edit me
    ├── styles/
    │   └── index.css           ← design system
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Stats.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
