---
id: index
title: Overview
sidebar_position: 1
---

# Warforge Theme — Overview

The **Warforge** theme is a premium, production-ready Shopify theme built for **Scenery en Zo**, a Dutch wargaming miniatures and hobby supplies store. It uses a cinematic dark-mode aesthetic with orange accents (#F97316) and was built from scratch — it is not a modified free theme.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px'}}>
  <div style={{padding: '20px', backgroundColor: '#1A2033', borderRadius: '8px'}}>
    <h3 style={{fontFamily: 'Cinzel, serif', fontSize: '18px', color: '#F8FAFC', marginBottom: '8px'}}>🎨 Design System</h3>
    <p style={{color: '#94A3B8', fontSize: '14px', lineHeight: '1.6'}}>Dark navy backgrounds (#0F172A) with warm orange accents, Cinzel serif headings, and Inter sans-serif body text.</p>
  </div>
  <div style={{padding: '20px', backgroundColor: '#1A2033', borderRadius: '8px'}}>
    <h3 style={{fontFamily: 'Cinzel, serif', fontSize: '18px', color: '#F8FAFC', marginBottom: '8px'}}>🧩 Modular Sections</h3>
    <p style={{color: '#94A3B8', fontSize: '14px', lineHeight: '1.6'}}>40+ reusable sections including hero, featured collections, product grids, newsletter signup, and more—all customizable via theme editor.</p>
  </div>
  <div style={{padding: '20px', backgroundColor: '#1A2033', borderRadius: '8px'}}>
    <h3 style={{fontFamily: 'Cinzel, serif', fontSize: '18px', color: '#F8FAFC', marginBottom: '8px'}}>📦 Product Templates</h3>
    <p style={{color: '#94A3B8', fontSize: '14px', lineHeight: '1.6'}}>Built-in JSON templates for Miniatures, Terrain, Paints, Tools, and Bases—each with category-specific layouts and badges.</p>
  </div>
  <div style={{padding: '20px', backgroundColor: '#1A2033', borderRadius: '8px'}}>
    <h3 style={{fontFamily: 'Cinzel, serif', fontSize: '18px', color: '#F8FAFC', marginBottom: '8px'}}>♿ Accessibility First</h3>
    <p style={{color: '#94A3B8', fontSize: '14px', lineHeight: '1.6'}}>WCAG AAA compliant privacy banner customization, ARIA labels, focus management, and screen reader support out of the box.</p>
  </div>
</div>

---

## What this documentation covers

| Section | What you will learn |
|---|---|
| [Architecture](./architecture) | Directory structure, how files relate to each other |
| [Design System](./design-system) | Colors, typography, spacing, CSS variables |
| [Sections](./sections) | Every section file — what it does and how to configure it |
| [Snippets](./snippets) | Every reusable snippet — parameters and CSS classes |
| [Templates](./templates) | Which sections appear on which page type |
| [Navigation & Menus](./navigation) | How the header menus work |
| [Product Cards](../snippets/snippets-product-cards) | How products are rendered in grids and sliders |
| [Accessibility](./accessibility) | WCAG compliance work and decisions |
| [How to Customize](./customization) | Step-by-step guide to common changes |

---

## Tech stack

| Layer | Technology |
|---|---|
| Template language | [Liquid](https://shopify.dev/docs/api/liquid) |
| CSS | Plain CSS via stylesheet tags, with CSS custom properties (variables) |
| JavaScript | Vanilla JS, no frameworks. Three.js for WebGL effects |
| Theme editor integration | Shopify schema JSON inside section/block files |
| Font — headings | [Cinzel](https://fonts.google.com/specimen/Cinzel) (loaded from Google Fonts) |
| Font — body | Inter (system stack) |
| 3D effects | [Three.js](https://threejs.org/) — loaded lazily from assets/three.module.min.js |

---

## Repository layout at a glance

```bash
warforge/
├── assets/              Static files: CSS, JS, fonts, SVGs, images
├── blocks/              Two nestable theme-editor blocks (group, text)
├── config/              Global theme settings (settings_schema.json)
├── design_system/       Component documentation and guidelines
├── layout/              Root HTML wrapper (theme.liquid, password.liquid)
├── locales/             Translation strings (EN, NL, DE, FR, ES, IT)
├── refference_design/   UI component reference docs
├── sections/            40+ section files — one per page component
├── snippets/            26 reusable Liquid fragments
└── templates/           JSON files that wire sections to page types
```

See [Architecture](./architecture) for a full breakdown.

---

## How Shopify themes work — quick primer

If you are new to Shopify theme development, these are the core concepts you need to understand:

### Liquid

Shopify's template language. Looks like `{{ variable }}` for output and `{% tag %}` for logic. Every `.liquid` file in the theme is processed by Shopify's server before being sent to the browser.

- [Liquid reference →](https://shopify.dev/docs/api/liquid)

### Sections

Self-contained page components. Each section file contains HTML/Liquid markup, a stylesheet block for its CSS, a javascript block for its JS, and a schema JSON block that defines the settings merchants can change in the theme editor.

- [Sections reference →](https://shopify.dev/docs/storefronts/themes/architecture/sections)

### Snippets

Reusable fragments included with `{% render 'snippet-name', param: value %}`. Unlike sections, snippets have no schema and cannot be added via the theme editor — they are purely for code reuse.

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

---

## Getting Started

### Prerequisites

- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) — For theme development and preview
- VS Code + [Shopify Liquid Extension](https://marketplace.visualstudio.com/items?itemName=Shopify.shopify-liquid) — Syntax highlighting, linting, auto-completion

### Clone & Preview

```bash
git clone git@github.com:SceneryEnZo/warforge-theme.git
shopify theme dev
```

---

## Color System

```css
/* Background Scale */
--bg-900: #0F172A    /* Page background */
--bg-800: #162033    /* Section blocks */
--bg-700: #1E293B    /* Cards */
--bg-600: #243247    /* Elevated panels */
--bg-500: #2C3B52    /* Hover surfaces */

/* Accent (Brand Orange) */
--accent-500: #F97316  /* Primary CTA */
--accent-600: #EA580C  /* Hover */
--accent-700: #C2410C  /* Active */

/* Text Hierarchy */
--text-primary: #F8FAFC
--text-secondary: #CBD5E1
--text-muted: #94A3B8
```

---

## Typography

### Headings (Serif Display)

```css
font-family: "Cinzel, serif";
letter-spacing: 0.04em;
font-weight: 600;

H1: 40px
H2: 32px
H3: 24px
H4: 20px
```

### Body (Sans-Serif)

```css
font-family: Inter, system-sans-serif;
font-size: 16px;
line-height: 1.6;
```

---

## Spacing System (8px Grid)

```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 40px
--space-8: 48px
```

---

## Radius System

```css
--radius-sm: 6px
--radius-md: 10px
--radius-lg: 14px
--radius-xl: 20px
```

---

## Button System

### Primary (CTA)

```liquid
<button class="button button--primary">
  Add to Cart
</button>
```

- Background: `accent-500` (#F97316)
- Hover: `accent-600` (#EA580C)
- Padding: 14px 22px
- Font-weight: 600

### Secondary (Outline)

```liquid
<button class="button button--secondary">
  Learn More
</button>
```

- Border: 1px solid `bg-500`
- Background: transparent
- Hover: background becomes `bg-600`

---

## Product Type Templates

Out-of-the-box templates for your core product categories:

- **Miniatures** — Skill levels, paint recommendations, resin badges
- **Terrain & Scenery** — Scale indicators, compatibility notes
- **Paints** — Coverage guides, brand filters (GSW, Reaper, AK Interactive)
- **Tools** — Professional grade badges, case inclusion flags
- **Bases** — Diameter options, material types (resin, wood, metal)

---

## Features

### 🧩 Section Library

| Section | Description |
|---------|-------------|
| `hero` | Full-width hero with image, text, CTA |
| `featured-collections` | Grid of promoted collections |
| `featured-products` | Curated product grid |
| `new-arrivals` | Recently added products |
| `popular-tags` | Tag cloud for filtering |
| `newsletter` | Email signup form |
| `features` | Icon + text feature blocks |
| `blog-preview` | Article cards (compact, masonry, large) |
| `footer-group` | Footer columns with links |

---

## Next Steps

- [Explore Sections](/sections) — Learn how to use each section type
- [Read the Design System](/design-system) — Complete component reference
- [Customize Your Store](/customization) — Theme editor walkthrough

---

<div style={{padding: '16px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3B82F6', borderRadius: '8px', marginTop: '24px'}}>
  <p style={{margin: '0', color: '#94A3B8', fontSize: '14px'}}>
    <strong>💡 Pro Tip:</strong> Use the Shopify theme preview (<code>shopify theme dev</code>) to test changes in real-time before committing.
  </p>
</div>
