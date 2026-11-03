# Chumi.രസീത്

Chumi.രസീത് (രസീത് is Malayalam for "receipt") is a free, single-file invoice maker that runs entirely in your browser. No account, no server, nothing uploaded.

- **19 invoice templates**, any accent colour, your own logo
- **Auto invoice**: enter a GST-inclusive total and a number of products, pick a category (IT and web, E-commerce, Services, Random) and it builds whole-number lines so that Subtotal + GST equals your total exactly, with no rounding line
- **A4 PDF export** (multi-page, never cuts a row in half), print, or copy as text
- Light and dark themes, a loading screen where the name prints on a receipt with a real progress bar (animated with [anime.js](https://animejs.com) v4 from the jsDelivr CDN, plain fade if it cannot load), scroll reveals, page transitions and button animations (all disabled under `prefers-reduced-motion`)

## Use it

Open `index.html` in a browser, or visit the GitHub Pages site for this repo.

## Edit it

`index.html` is generated from the files in `src/`:

```
python3 build.py
```

| File | What it holds |
| --- | --- |
| `src/part1.html` | head, design tokens, all CSS and motion |
| `src/part2.html` | page markup |
| `src/part3.html` | app logic (invoice maths, editor, auto tool, PDF, router, animations) |
| `src/paper.css` | the A4 paper styles for each template |
| `src/templates.js` | the 19 templates and their SVG decorations |
| `src/gen.js` | the exact-total generator |

Fonts load from Google Fonts, anime.js loads from jsDelivr on page load, and the PDF library (html2canvas) loads from a CDN on first export.
