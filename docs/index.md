---
id: index
title: Overview
sidebar_position: 1
---

# Warforge Theme — Overview

The **Warforge** theme is a fully custom Shopify theme built for **Scenery en Zo**, a Dutch wargaming miniatures and hobby supplies store. It uses a dark, fantasy-inspired aesthetic with orange accents and was built from scratch — it is not a modified free theme.

## What this documentation covers

| Section | What you'll learn |
|---|---|
| [Architecture](./architecture) | Directory structure, how files relate to each other |
| [Design System](./design-system) | Colors, typography, spacing, CSS variables |
| [Sections](./sections) | Every section file — what it does and how to configure it |
| [Snippets](./snippets) | Every reusable snippet — parameters and CSS classes |
| [Templates](./templates) | Which sections appear on which page type |
| [Navigation & Menus](./navigation) | How the header menus work |
| [Product Cards](./product-cards) | How products are rendered in grids and sliders |
| [Accessibility](./accessibility) | WCAG compliance work and decisions |
| [How to Customize](./customization) | Step-by-step guide to common changes |

---

## Tech stack

| Layer | Technology |
|---|---|
| Template language | [Liquid](https://shopify.dev/docs/api/liquid) |
| CSS | Plain CSS via `{% stylesheet %}` tags, with CSS custom properties (variables) |
| JavaScript | Vanilla JS, no frameworks. Three.js for WebGL effects |
| Theme editor integration | Shopify `{% schema %}` JSON inside section/block files |
| Font — headings | [Cinzel](https://fonts.google.com/specimen/Cinzel) (loaded from Google Fonts) |
| Font — body | Inter (system stack) |
| Font — logo tagline | Handwriting Draft (custom TTF in `assets/`) |
| 3D effects | [Three.js](https://threejs.org/) — loaded lazily from `assets/three.module.min.js` |

---

## Repository layout at a glance

```
warforge/
├── assets/          Static files: CSS, JS, fonts, SVGs
├── blocks/          Two nestable theme-editor blocks (group, text)
├── config/          Global theme settings (settings_schema.json)
├── layout/          Root HTML wrapper (theme.liquid, password.liquid)
├── locales/         Translation strings (6 languages)
├── sections/        53 section files — one per page component
├── snippets/        26 reusable Liquid fragments
└── templates/       JSON files that wire sections to page types
```

See [Architecture](./architecture) for a full breakdown.

---

## How Shopify themes work — quick primer

If you're new to Shopify theme development, these are the core concepts you need to understand:

### Liquid
Shopify's template language. Looks like `{{ variable }}` for output and `{% tag %}` for logic. Every `.liquid` file in the theme is processed by Shopify's server before being sent to the browser.

- [Liquid reference →](https://shopify.dev/docs/api/liquid)

### Sections
Self-contained page components. Each section file contains HTML/Liquid markup, a `{% stylesheet %}` block for its CSS, a `{% javascript %}` block for its JS, and a `{% schema %}` JSON block that defines the settings merchants can change in the theme editor.

- [Sections reference →](https://shopify.dev/docs/storefronts/themes/architecture/sections)

### Snippets
Reusable fragments included with `{% render 'snippet-name', param: value %}`. Unlike sections, snippets have no schema and can't be added via the theme editor — they're purely for code reuse.

- [Snippets reference →](https://shopify.dev/docs/storefronts/themes/architecture/snippets)

### Templates
JSON files (e.g. `templates/collection.json`) that list which sections appear on a given page type and in what order. Merchants can also add/remove/reorder sections via the theme editor.

- [Templates reference →](https://shopify.dev/docs/storefronts/themes/architecture/templates)

### Blocks
Small, nestable components (`blocks/` directory). Used inside sections that have `"blocks": [{ "type": "@theme" }]` in their schema.

- [Blocks reference →](https://shopify.dev/docs/storefronts/themes/architecture/blocks)

### The Theme Editor
The visual editor at **Online Store → Themes → Customize**. Merchants use it to add/remove sections, change section settings, reorder blocks, and adjust global theme settings.

- [Theme editor overview →](https://shopify.dev/docs/storefronts/themes/tools/online-editor)
