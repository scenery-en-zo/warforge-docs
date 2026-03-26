---
id: customization
title: How to Customize
sidebar_position: 10
---

# How to Customize

This page is a practical guide for making common changes to the theme. Each recipe tells you exactly which file to edit and what to change.

:::tip Before you start
Always work on the **development theme** (duplicate your live theme first) so changes don't go live until you're ready. In Shopify Admin: **Online Store → Themes → ⋯ → Duplicate**.
:::

---

## Colors

### Change the accent orange color

**File:** `snippets/css-variables.`

Find and update:
```css
--accent-500: #ff8b00; /* Change this */
--accent-600: #e67a00; /* Hover/darker variant — usually 85% brightness of accent-500 */
--accent-700: #cc6a00; /* Even darker — usually 75% brightness */
--accent-glow: rgba(255, 139, 0, 0.3); /* Shadow glow — match the RGB of accent-500 */
```
Also update the hardcoded rgba in `sections/product-main.
```css
border-bottom: 1px dashed rgba(255, 139, 0, 0.45); /* Match your new color */
```
And `sections/collection-grid`.
```css
box-shadow: 0 0 0 3px rgba(255, 139, 0, 0.28); /* Match your new color */
```
:::warning Check contrast after changing
Run a contrast check against `--bg-800` (`#1a1f2b`). Your accent must achieve at least **4.5:1** (WCAG AA) for normal text, **7:1** (WCAG AAA) for full compliance. Use the formula in the [Accessibility](./accessibility) page.
:::

### Change the button text color

**File:** `snippets/css-variables.`

```css
--btn-primary-text: #0a0e16; /* Dark text on orange buttons */
```
Also update `layout/theme.` (the privacy banner injection):
```css
color: #0a0e16 !important; /* Inside the styleText template literal */
```
### Change the background colors

**File:** `snippets/css-variables.`

```css
--bg-950: #0a0e16;  /* Darkest */
--bg-900: #131720;  /* Page background */
--bg-800: #1a1f2b;  /* Cards, panels */
--bg-700: #3e4a5d;  /* Borders */
```
Also update `layout/theme.` — the privacy banner uses hardcoded hex values that reference these backgrounds:
```css
--shopify-privacy-banner-background-color: #1a1f2b !important; /* = bg-800 */
--shopify-privacy-banner-secondary-button-background-color: #131720 !important; /* = bg-900 */
```
And the shadow DOM injection script in the same file:
```javascript
background-color: #1a1f2b !important; /* Update to match new bg-800 */
```
### Change the price color

**File:** `snippets/css-variables.`

```css
--price-color: #2ecc71; /* Green */
```
---

## Typography

### Change the heading font (Cinzel)

**File:** `snippets/css-variables.`

```css
--font-display: "Cinzel", "Playfair Display", Georgia, serif;
```
Replace `"Cinzel"` with any Google Font name. Then load the font in `layout/theme.` — find the `<link />` tag that loads Google Fonts and update the family name.

:::info
Cinzel is already loaded via a Google Fonts `<link />` tag in the layout. If you switch to a different font, update both the CSS variable and the Google Fonts URL.
:::

### Change the body font

**File:** `snippets/css-variables.```liquid`

```css
--font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```
Inter is a system font — no external loading needed. If you switch to a non-system font, add a `<link />` and `<link />` to `layout/theme.`.

### Change font sizes

**File:** `snippets/css-variables.`

Find the type scale section and adjust:
```css
--text-display-xl: 48px;  /* Hero headings */
--text-display-lg: 40px;  /* Section headings */
--text-heading-lg: 20px;  /* Component headings */
--text-body-md: 16px;     /* Default body text */
/* etc. */
```
### Change the logo tagline font or text

**File:** `sections/header.`

Find the tagline span:
```html
<span class="header-logo__tagline">Originaliteit door creativiteit</span>
```
The font is declared via `@font-face` using `assets/handwriting-draft.ttf`. To change the font, replace the TTF file and update the `@font-face` declaration above the tagline's CSS.

---

## Layout & Spacing

### Change the page maximum width

**Option 1 — Theme editor:** Go to **Customize → Theme settings → Layout → Page width**. Options: 1280px, 1440px, 1600px.

**Option 2 — Code:** In `config/settings_schema.json`, add more options to the `max_page_width` select setting. The selected value flows into `--page-width` via `css-variables.`.

### Change horizontal page padding

**Theme editor:** Go to **Customize → Theme settings → Layout → Minimum page margin**.

Or in code (`snippets/css-variables.`):
```css
--page-margin: {{ settings.min_page_margin }}px;
```
### Change spacing between sections

Sections use `.section-padding` for vertical space:
```css
/* In snippets/css-variables.```liquid */
.section-padding {
  padding: var(--space-8) 0; /* = 48px top and bottom */
}

@media (max-width: 768px) {
  .section-padding {
    padding: var(--space-6) 0; /* = 32px on mobile */
  }
}
```
---

## Homepage

### Add or remove a section

**Via theme editor (recommended):**
1. Go to **Online Store → Themes → Customize**
2. Click **Add section** in the left sidebar
3. Choose a section
4. Drag to reorder

**Via code:** Edit `templates/index.json`. Add/remove entries in both `sections` and `order`.

### Change the hero background image

**Theme editor:** Click **Hero Banner** → **Background image** → upload image.

### Disable the 3D dice animation

**Theme editor:** Click **Hero Banner** → uncheck **Enable 3D effects**.

Or for a permanent code change, in `sections/hero.` find `section.settings.enable_3d_fx` and set the default to `false` in the `{% schema %}`.

### Change the "Weekly Deals" heading

**Theme editor:** Click the **Weekly Deals** section → change the **Heading** setting.

### Add a product to the "Weekly Deals" slider

**Theme editor:** Click **Weekly Deals** → **Add block** → **Product** → search and select a product.

---

## Navigation

### Add a menu item

1. Go to **Shopify Admin → Online Store → Navigation → Main menu**
2. Click **Add menu item**
3. Enter a label and URL
4. Save

### Add a dropdown to a menu item

1. In **Navigation → Main menu**, click the **⋮** menu next to an item
2. Click **Add submenu item**
3. Add child items

### Add rich dropdown content for a category

Edit `snippets/nav-structured-dropdown.`. Find the `{% case key %}` block and add a new `{% when 'your-handle' %}` case. The `key` corresponds to the menu item's link handle.

---

## Product pages

### Add a new metafield to the product detail page

1. Create a metafield definition in **Shopify Admin → Settings → Custom data → Products**. Use a namespace like `custom` and a key like `my_field`.

2. In `sections/product-main.`, find the metadata footer block. Add a new call to `product-meta-link-list`:

```liquid
 'product-meta-link-list',
    primary_metafield: product.metafields.custom.my_field,
    label_key: 'products.product.my_field_label',
    base_collection_url: collection.url | default: routes.collections_url,
    product_type_handle: product.type | handleize,
    primary_filter: 'filter.p.m.custom.my_field'
{%!-- Liquid loop/conditional --%}
```

3. Add a translation key to `locales/en.default.json`:
```json
  "product": {
    "my_field_label": "My Field"
  }
```

### Change the number of product columns in a collection

**Theme editor:** Click the **Collection** section → adjust **Columns on desktop** and **Columns on wide screens**.

### Change the product image aspect ratio

**File:** `snippets/product-card.`

```css
  aspect-ratio: 1 / 1; /* Change to e.g. 4 / 3 or 3 / 4 */
```

---

## Blog

### Add a new blog category

1. Go to **Shopify Admin → Online Store → Blog posts → Manage blogs**
2. Click **Add blog**
3. Set a handle (used in URLs)

The blog will automatically appear in the blog navigation if you add it to the menu.

### Change the blog listing layout

1. Assign a different template to the blog page:
   - `blog.json` — standard grid
   - `blog.cards.json` — large cards
   - `blog.compact.json` — compact list
   - `blog.masonry.json` — masonry grid

2. In **Shopify Admin → Online Store → Blog posts**, click the blog → in the theme template dropdown, select the layout you want.

---

## Footer

### Add a footer column

**Theme editor:** Click **Footer** → **Add block** → choose block type (Links, Contact, Text, etc.)

### Add social media links

**Theme editor:** Go to **Theme settings → Social media** → fill in the URLs.

---

## Adding a new section to the theme

1. Create `sections/my-section.` with content, `{% stylesheet %}`, and `{% schema %}`:

```liquid
<div class="my-section">
  <div class="container">
    <h2>{{ section.settings.heading }}</h2>
  </div>
</div>

{% stylesheet %}
  .my-section &#123;
    padding: var(--space-8) 0;
    background-color: var(--bg-900);
  &#125;
{% endstylesheet %}

{% schema %}
&#123;
  "name": "My Section",
  "settings": [
    &#123;
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "My Section"
    &#125;
  ],
  "presets": [
    &#123; "name": "My Section" &#125;
  ]
&#125;
{% endschema %}
```
2. Add it to a template via the theme editor or directly in the template JSON.

:::info Shopify documentation
[Section schema →](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema)
[Input settings →](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings)
:::

---

## Adding a new translation string

1. Add the key to `locales/en.default.json`:
```json
{
  "general": {
    "my_new_string": "My text here"
  }
}
```
2. Add the same key to all other locale files (`nl.json`, `de.json`, etc.) with appropriate translations.

3. Use it in Liquid:
```liquid
{{ 'general.my_new_string' | t }}
```

---

## Deploying changes

Changes pushed to the `main` branch of the git repository are **not automatically deployed** to Shopify. You must sync them:

1. **Via Shopify CLI:** `shopify theme push` from the theme directory
2. **Via Shopify GitHub integration:** If connected, pushes to `main` may trigger auto-deploy depending on your configuration
3. **Via manual upload:** In the Shopify admin theme editor, you can edit files directly (not recommended for large changes)

:::tip
The safest workflow is:
1. Make changes in the git repository
2. Push to a branch
3. Use `shopify theme push --theme-id YOUR_DEV_THEME_ID` to push to a development theme
4. Preview and verify
5. Merge to main and push to the live theme
:::

