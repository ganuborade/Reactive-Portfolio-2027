# Ganesh Borade — AURA 999+

A React portfolio built with Vite. It is a static, database-free site that can be hosted on GitHub Pages.

## Run locally

Install Node.js, then run:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. Preview it locally with `npm run preview`.

## GitHub Pages deployment

The included GitHub Actions workflow installs dependencies, builds the Vite site into `dist`, and deploys that build when changes are pushed to `main` (or when started manually). In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

Vite is configured for this repository's project-page URL, `https://ganuborade.github.io/Reactive-Portfolio-2027/`. If the repository name changes, update the `base` value in `vite.config.js` to match.

## Site contents

- React components and interactions: `src/App.jsx`
- Responsive styles and motion: `src/styles/style.css`
- Static assets: `public/images/` and `Resume2026.pdf`
- Contact form: Google Forms

There is no backend or database. The contact button opens the linked Google Form.