# Dev Pandey — Portfolio

Personal portfolio of **Dev Pandey (DevSir)**, built with plain HTML, CSS and JavaScript (no build step).

Live: https://edevpandey.github.io/dev/

## Edit content
All content (roles, skills, services, projects, links, contact) lives in the `data` object at the top of [`js/main.js`](js/main.js).

- Add a Play Store / GitHub / website link to a project by filling `playStore`, `github` or `website`.
- Your email is stored scrambled (`emailParts`) to hide it from scraper bots; the comment above it shows how to change it.
- Put new screenshots in `assets/img/` and reference them in `image` / `icon`.
- About text and the hero code card are in [`index.html`](index.html).
- Colours are CSS variables at the top of [`css/style.css`](css/style.css).

## Run locally
Open `index.html` in a browser, or serve the folder:

```sh
python -m http.server 8000
```

## Deploy
Push to `main`. GitHub Pages serves the repo root (Settings → Pages → Branch: `main` / root).
