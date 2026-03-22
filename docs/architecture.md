---
id: architecture
title: Architecture
sidebar_position: 2
---

# Architecture

This page explains the directory structure of the theme and how all the pieces fit together.

## Directory structure

```
warforge/
├── assets/
│   ├── critical.css          # Loaded on every page (reset, app overrides, global utilities)
│   ├── theme.js              # Global JS utilities (debounce, throttle, slider init)
│   ├── three.module.min.js   # Three.js ES module (WebGL dice/ember effects)
│   ├── three.min.js          # Three.js UMD fallback
│   ├── handwriting-draft.ttf # Custom font for the logo tagline
│   ├── icon-account.svg
│   ├── icon-cart.svg
│   └── shoppy-x-ray.svg
│
├── blocks/
│   ├── group.liquid          # Nestable layout container (horizontal/vertical)
│   └── text.liquid           # Text content block (title/subtitle/normal styles)
│
├── config/
│   ├── settings_schema.json  # Defines global theme settings in the theme editor
│   └── settings_data.json    # Saved values for those settings (managed by Shopify)
│
├── layout/
│   ├── theme.liquid          # Root HTML shell for all pages
│   └── password.liquid       # Minimal shell for the password/coming-soon page
│
├── locales/
│   ├── en.default.json       # English translations (storefront strings)
│   ├── en.default.schema.json# English translations (theme editor strings)
│   ├── nl.json / nl.schema.json
│   ├── de.json / de.schema.json
│   ├── fr.json / fr.schema.json
│   ├── es.json / es.schema.json
│   └── it.json / it.schema.json
│
├── sections/                 # 53 section files (see Sections reference)
│
├── snippets/                 # 26 snippet files (see Snippets reference)
│
└── templates/                # JSON files wiring sections to page types
    ├── index.json            # Homepage
    ├── product.json          # Default product page
    ├── product.base.json     # Base product variant
    ├── product.miniature.json# Miniature product variant
    ├── product.paint.json    # Paint product variant
    ├── product.terrain.json  # Terrain product variant
    ├── product.tool.json     # Tool product variant
    ├── collection.json       # Collection (shop) page
    ├── article.json          # Single blog post
    ├── blog.json             # Blog listing (grid)
    ├── blog.cards.json       # Blog listing (large cards)
    ├── blog.compact.json     # Blog listing (compact list)
    ├── blog.masonry.json     # Blog listing (masonry)
    ├── cart.json
    ├── search.json
    ├── 404.json
    ├── page.json             # Generic page
    ├── page.about.json       # About Us page
    ├── page.contact.json     # Contact page
    ├── page.list-blogs.json  # Blogs overview page
    ├── page.blog-categories.json
    ├── list-collections.json # All collections page
    ├── password.json
    ├── gift_card.liquid      # Gift card (Liquid template, not JSON)
    └── customers/
        ├── account.json
        ├── addresses.json
        ├── login.json
        ├── order.json
        └── register.json
```

---

## How a page request flows

When a visitor loads a page, this is what happens:

```
Browser request
     │
     ▼
Shopify server
     │  Picks the right template (e.g. templates/collection.json)
     │  Renders layout/theme.liquid as the outer HTML shell
     │  Inside layout: renders css-variables snippet (design tokens in <head>)
     │  Inside layout: renders meta-tags snippet (SEO tags in <head>)
     │  Inside layout: renders header-group sections
     │  Inside layout: renders {{ content_for_layout }}
     │       │
     │       └── Each section listed in the template is rendered in order
     │           Each section can render snippets with {% render %}
     │           CSS from {% stylesheet %} tags is bundled and linked
     │           JS from {% javascript %} tags is bundled and linked
     │
     ▼
Browser receives complete HTML
```

### Why CSS is split across files

- **`assets/critical.css`** — loaded with `<link rel="stylesheet">` on every page. Contains the CSS reset, global base styles, and third-party app overrides (Wishlist Hero, Shopify Privacy Banner). This is loaded first because it's always needed.

- **`{% stylesheet %}` in section/snippet files** — Shopify bundles all these together into a single compiled stylesheet (`compiled_assets/styles.css`). Each section/snippet's CSS is only included once even if the snippet is rendered many times.

- **`{% style %}` in `snippets/css-variables.liquid`** — inlined directly into `<head>` as a `<style>` tag so CSS custom properties are available before any other CSS loads.

:::info Shopify documentation
[Stylesheet tag →](https://shopify.dev/docs/api/liquid/tags/stylesheet)
:::

---

## How sections and templates relate

A **template** (JSON file) is just a list of section IDs. Example from `templates/index.json`:

```json
{
  "sections": {
    "hero": { "type": "hero", "settings": { ... } },
    "features": { "type": "features", "settings": { ... } },
    "featured-products": { "type": "featured-products", "blocks": { ... } }
  },
  "order": ["hero", "features", "featured-products"]
}
```

The `type` field refers to the filename in `sections/` without the `.liquid` extension. So `"type": "hero"` renders `sections/hero.liquid`.

When merchants click "Customize" in the Shopify admin, the theme editor reads these JSON files to show the correct sections in the sidebar.

:::info Shopify documentation
[Templates →](https://shopify.dev/docs/storefronts/themes/architecture/templates)
[JSON templates →](https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates)
:::

---

## How the `{% schema %}` tag works

Every section (and block) has a `{% schema %}` tag at the bottom. This JSON tells the theme editor what settings to show for that section. Example:

```liquid
{% schema %}
{
  "name": "Hero Banner",
  "settings": [
    {
      "type": "image_picker",
      "id": "background_image",
      "label": "Background image"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Welcome"
    }
  ],
  "presets": [
    { "name": "Hero Banner" }
  ]
}
{% endschema %}
```

Inside the section, settings are accessed via `section.settings.background_image`, `section.settings.heading`, etc.

Block settings are accessed via `block.settings.some_setting` inside a `{% for block in section.blocks %}` loop.

:::info Shopify documentation
[Schema tag →](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema)
[Input settings →](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings)
:::

---

## Section groups

The header and footer are managed by **section groups** — special JSON files in `sections/`:

- `sections/header-group.json` — wraps the header section
- `sections/footer-group.json` — wraps the footer section

In `layout/theme.liquid`, they're rendered with:

```liquid
{% sections 'header-group' %}
{% sections 'footer-group' %}
```

This means the header and footer appear on **every page** regardless of the template.

:::info Shopify documentation
[Section groups →](https://shopify.dev/docs/storefronts/themes/architecture/section-groups)
:::

---

## Translation / localization

All user-facing text uses the `| t` filter:

```liquid
{{ 'general.add_to_cart' | t }}
```

The translation strings live in `locales/en.default.json`. The schema versions (`en.default.schema.json`) contain strings shown inside the theme editor (setting labels, option names, etc.).

To add a new translatable string:
1. Add the key to `locales/en.default.json` (and all other language files)
2. Use `{{ 'your.key' | t }}` in the Liquid file

:::info Shopify documentation
[Locales →](https://shopify.dev/docs/storefronts/themes/architecture/locales)
[Translation filter →](https://shopify.dev/docs/api/liquid/filters/translate)
:::
