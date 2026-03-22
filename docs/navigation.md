---
id: navigation
title: Navigation & Menus
sidebar_position: 7
---

# Navigation & Menus

The theme has three separate navigation systems. Understanding which one is active and how to change it is important for making menu edits without breaking anything.

---

## System 1 — Shopify link list (active, primary)

This is the **live navigation system**. It reads a Shopify menu called `main-menu` and renders it in the header.

### How to edit the menu items

1. Go to **Shopify Admin → Online Store → Navigation**
2. Click **Main menu**
3. Add, remove, or reorder items
4. For items with dropdowns: click the **▸** arrow next to an item to add nested items

The theme renders **two levels** of nesting:
- Level 1 → top nav bar items (`.nav-item`)
- Level 2 → dropdown sub-items (`.nav-submenu__panel`)

### How to change which menu is used

In the theme editor:
1. Click the **Header** section in the sidebar
2. Find the **Menu** setting
3. Select a different Shopify menu

Or in code: in `sections/header.liquid`, the menu is loaded via `section.settings.menu`, which defaults to `main-menu`.

### How dropdown menus work

When a nav item has child links, hovering it reveals a dropdown panel. The dropdown is a CSS `display:grid` container that becomes visible via `opacity: 1` and `pointer-events: auto` on hover. No JavaScript needed for the basic dropdown — it's pure CSS.

For navigation items that have **structured category content** (Miniatures, Terrain & Scenery, etc.), the `nav-structured-dropdown` snippet is called to render rich content with collection links grouped by category. See [System 3](#system-3--structured-dropdown-snippet) below.

---

## System 2 — Mobile drawer

On mobile (viewport `≤ 768px`), the desktop nav bar is hidden (`display: none`). A hamburger button (`#MobileMenuToggle`) opens a slide-in drawer (`#MobileDrawer`).

The mobile drawer mirrors the same `main-menu` link list. Items with children have an expandable accordion (a chevron button that toggles `hidden` on the sub-list).

### How the drawer opens/closes

JavaScript in `sections/header.liquid`:
- Hamburger click → adds `is-open` class to drawer + `is-active` class to overlay
- Overlay click or close button → removes those classes
- Tab key management keeps focus inside the drawer when open

---

## System 3 — Structured dropdown snippet

`snippets/nav-structured-dropdown.liquid` contains hardcoded dropdown content for specific navigation categories. When a nav item's handle matches one of these keys, the snippet renders a rich multi-column panel instead of the simple link list.

**Supported keys:** `miniatures`, `terrain-scenery`, `paints`, `brushes`, `tools`, `bases`, `materials`, `starter-sets-bundles`, `inspiration-guides`, `home`

**How it connects to the header:**
Inside `sections/header.liquid`, for each nav item, the code checks:
```liquid
{% assign has_structured = false %}
{% if link.handle == 'miniatures' or link.handle == 'terrain-scenery' ... %}
  {% assign has_structured = true %}
{% endif %}

{% if has_structured %}
  {% render 'nav-structured-dropdown', key: link.handle, variant: 'desktop' %}
{% else %}
  {# render simple link list #}
{% endif %}
```

### Editing structured dropdown content

To change which collections appear in the dropdowns, edit `snippets/nav-structured-dropdown.liquid` directly. The content is organized by `key` using `{% case key %}` ... `{% when 'miniatures' %}` etc.

Each panel contains grouped `<div>` elements with `<h4>` headings and `<a>` links using `{{ routes.collections_url }}/your-collection-handle`.

---

## System 4 — Mega menu snippet (not active)

`snippets/mega-menu.liquid` is a data-driven mega menu that reads the global `collections` object and uses `collection.metafields.custom.parent_collection` to build a 3-level hierarchy grid. It is **not currently wired into the header**.

If you want to activate it:
1. Add a toggle/button in `sections/header.liquid` to trigger it
2. Call `{% render 'mega-menu' %}` where you want it to appear
3. The snippet handles its own CSS and visibility logic via `.mega-menu.is-active`

---

## Language selector

The top bar contains a language selector using `{% form 'localization' %}`. The available languages are defined in your Shopify store settings under **Settings → Languages**.

The current language ISO code is checked via `localization.language.iso_code`. Available languages come from `localization.available_languages`.

The selector shows emoji flag + language name, rendered from the `locales/en.default.json` language name strings.

:::info Shopify documentation
[Localization form →](https://shopify.dev/docs/api/liquid/tags/form#form-localization)
[Localization object →](https://shopify.dev/docs/api/liquid/objects/localization)
:::

---

## Adding a new top-level menu item

1. Go to **Online Store → Navigation → Main menu**
2. Add a new menu item (label + link)
3. If you want a rich dropdown for this item: add the handle to the `has_structured` check in `sections/header.liquid`, then add a new `{% when 'your-handle' %}` block in `snippets/nav-structured-dropdown.liquid`

## Adding a new language

1. Go to **Shopify Admin → Settings → Languages**
2. Add the language
3. Create `locales/xx.json` and `locales/xx.schema.json` with translations
4. The language selector in the header will appear automatically

## Changing the logo

1. Go to **Online Store → Themes → Customize → Header**
2. Upload a new image via the logo image picker

Or for the fallback text logo: edit the section settings in the theme editor. The logo renders `shop.name` if no image is set.

## Changing the tagline below the logo

Edit the `header-logo__tagline` span content in `sections/header.liquid`. The tagline text is hardcoded (not a theme setting). It uses the Handwriting Draft custom font from `assets/handwriting-draft.ttf`.
