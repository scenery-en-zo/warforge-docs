---
id: design-system
title: Design System
sidebar_position: 3
---

# Design System

All design tokens — colors, typography, spacing, shadows, and transitions — are defined as CSS custom properties in **`snippets/css-variables.liquid`**. This file is rendered inside a `{% style %}` tag in `layout/theme.liquid`, injecting a `<style>` block directly into `<head>` on every page.

To change any design token, edit `snippets/css-variables.liquid`.

---

## Color palette

The theme uses a dark-mode-only palette built around dark navy-blues and a vibrant orange accent.

### Background scale

| Variable | Value | Use |
|---|---|---|
| `--bg-950` | `#0a0e16` | Deepest background (page body on some pages, dropdowns, overlays) |
| `--bg-900` | `#131720` | Page background (`body` background) |
| `--bg-800` | `#1a1f2b` | Cards, panels, sidebars, form containers |
| `--bg-700` | `#3e4a5d` | Borders, dividers, subtle separators |
| `--bg-600` | `#4a5a73` | Slightly lighter borders, card borders |
| `--bg-500` | `#5b6f8c` | Lightest dark — rarely used |

The scale goes **darker** as the number gets **higher**. `--bg-950` is the darkest.

:::tip Why this structure
Cards (`--bg-800`) sit on top of the page background (`--bg-900`). This gives subtle visual layering — cards look slightly elevated because they're lighter than the surface behind them. Borders (`--bg-700`) are lighter still so they're visible against the card background.
:::

### Accent — orange

| Variable | Value | Use |
|---|---|---|
| `--accent-500` | `#ff8b00` | **Primary accent** — links, active states, titles in cards, buttons |
| `--accent-600` | `#e67a00` | Hover/darker accent |
| `--accent-700` | `#cc6a00` | Even darker accent |
| `--accent-glow` | `rgba(255,139,0,0.3)` | Box shadows and glow effects |

`--accent-500` (`#ff8b00`) achieves **7.02:1 contrast** against `--bg-800` (`#1a1f2b`), meeting WCAG AAA.

### Button text

| Variable | Value | Use |
|---|---|---|
| `--btn-primary-text` | `#0a0e16` | Dark text on orange buttons — 8.23:1 contrast ratio |

Orange buttons always use dark text (not white) for contrast compliance.

### Text

| Variable | Value | Use |
|---|---|---|
| `--text-primary` | `#ffffff` | Main content text, headings |
| `--text-secondary` | `#cbd5e1` | Supporting text, meta info, excerpts |
| `--text-muted` | `#cbd5e1` | Placeholder-level text (same value as secondary) |
| `--text-disabled` | `#94a3b8` | Disabled state text |

### Semantic

| Variable | Value | Use |
|---|---|---|
| `--price-color` | `#2ecc71` | Product prices (green = positive/available) |
| `--success` | `#2ecc71` | Success messages, in-stock indicator |
| `--warning` | `#f1c40f` | Warning alerts |
| `--error` | `#e74c3c` | Error messages, form validation |
| `--info` | `#3498db` | Info alerts |

---

## Typography

Two font families are used throughout the theme:

### Display font — Cinzel
```css
--font-display: "Cinzel", "Playfair Display", Georgia, serif;
```
Used for: Section headings, product titles, hero headings, navigation brand name, all-caps labels. Cinzel is loaded from Google Fonts via a `<link>` in the layout. Playfair Display and Georgia are fallbacks.

### Body font — Inter
```css
--font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```
Used for: Body copy, UI labels, prices, buttons, form inputs, meta text. Inter is a system font on macOS 10.15+ and loaded from the system stack on all other platforms.

### Logo tagline — Handwriting Draft
A custom TTF font (`assets/handwriting-draft.ttf`) used **only** for the tagline text below the logo (`.header-logo__tagline`). Declared via `@font-face` in `sections/header.liquid`.

### Type scale

| Variable | Value | Use |
|---|---|---|
| `--text-display-xl` | `48px` | Hero headings |
| `--text-display-lg` | `40px` | Section headings (article titles) |
| `--text-display-md` | `32px` | Card headings |
| `--text-display-sm` | `24px` | Sub-headings |
| `--text-heading-lg` | `20px` | Component headings |
| `--text-heading-md` | `18px` | Sub-component headings |
| `--text-heading-sm` | `16px` | Small headings |
| `--text-body-lg` | `18px` | Hero subheadings |
| `--text-body-md` | `16px` | Default body text |
| `--text-body-sm` | `14px` | Secondary body text, excerpts |
| `--text-body-xs` | `12px` | Metadata, badges, labels |

---

## Spacing scale

The theme uses a fixed spacing scale from 4px to 64px:

| Variable | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `24px` |
| `--space-6` | `32px` |
| `--space-7` | `40px` |
| `--space-8` | `48px` |
| `--space-9` | `64px` |

Use these consistently rather than writing raw pixel values, so spacing stays proportional across the whole theme.

---

## Border radius

| Variable | Value | Use |
|---|---|---|
| `--radius-sm` | `4px` | Badges, buttons, inputs, small tags |
| `--radius-md` | `8px` | Filter groups, smaller cards |
| `--radius-lg` | `12px` | Main cards, panels, sections |
| `--radius-xl` | `16px` | Large modal-like surfaces |

---

## Shadows

| Variable | Value | Use |
|---|---|---|
| `--shadow-card` | `0 1px 4px 0 rgba(0,0,0,0.37)` | Default card shadow |
| `--shadow-card-hover` | `0 3px 3px 0 rgb(236 128 20 / 15%), 0 3px 45px 0 rgb(225 125 25 / 30%)` | Orange glow on card hover |

The hover shadow creates a characteristic orange glow effect — this is a deliberate design choice to reinforce the orange brand identity.

---

## Transition

```css
--transition-base: all 200ms ease;
```

Used on most interactive elements (cards, buttons, links, icons). 200ms is fast enough to feel responsive but slow enough to be visible.

---

## Global theme settings

A small subset of design values are exposed as **theme editor settings** in `config/settings_schema.json`. These feed into CSS variables:

| Setting ID | CSS variable | Description |
|---|---|---|
| `type_primary_font` | `--font-primary--family` | Merchant-selected body font |
| `max_page_width` | `--page-width` | Max container width (1280/1440/1600px) |
| `min_page_margin` | `--page-margin` | Horizontal padding for the container |
| `background_color` | `--color-background` | Used in a few legacy spots |
| `foreground_color` | `--color-foreground` | Used in a few legacy spots |
| `input_corner_radius` | `--style-border-radius-inputs` | Input border radius |

:::warning
The hardcoded design tokens in `css-variables.liquid` (the dark backgrounds, orange accents) take precedence over `settings_schema.json` values for the majority of the UI. If you change `background_color` in the theme editor, most of the site will **not** change color — you need to edit `css-variables.liquid` directly.

The `settings_schema.json` color settings primarily exist as fallback references in `layout/theme.liquid` for the privacy banner overrides.
:::

---

## The `container` class

The max-width container is defined globally in `css-variables.liquid`:

```css
.container {
  width: 100%;
  max-width: var(--page-width);   /* Default: 1280px */
  margin: 0 auto;
  padding: 0 var(--page-margin);  /* Default: 24px each side */
}
```

Used in almost every section: `<div class="container">...</div>`.

The `.full-width` class overrides the container to span 100% of the viewport:
```css
.full-width {
  width: 100%;
  max-width: none;
}
```

---

## Accessibility — WCAG contrast compliance

All text/background color combinations in the theme are verified against WCAG 2.1 standards. Key ratios:

| Text | Background | Ratio | Standard |
|---|---|---|---|
| `--accent-500` (`#ff8b00`) | `--bg-800` (`#1a1f2b`) | **7.02:1** | AAA |
| `--accent-500` | `--bg-900` (`#131720`) | **7.64:1** | AAA |
| `--btn-primary-text` (`#0a0e16`) | `--accent-500` (`#ff8b00`) | **8.23:1** | AAA |
| `--text-primary` (`#ffffff`) | `--bg-800` | **16.47:1** | AAA |
| `--text-secondary` (`#cbd5e1`) | `--bg-800` | **11.10:1** | AAA |
| `--price-color` (`#2ecc71`) | `--bg-800` | **7.84:1** | AAA |

See [Accessibility](./accessibility) for the full compliance guide.
