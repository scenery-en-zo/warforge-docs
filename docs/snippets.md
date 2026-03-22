---
id: snippets
title: Snippets Reference
sidebar_position: 5
---

# Snippets Reference

Snippets are reusable Liquid fragments in the `snippets/` directory. They are included with the `render` tag:

```liquid
{% render 'snippet-name', param: value, other_param: other_value %}
```

:::warning Important
Unlike sections, snippets run in an **isolated scope**. They cannot access variables created outside of them. You must pass everything they need as parameters. They can access global Liquid objects (`product`, `shop`, `cart`, etc.) directly.
:::

:::info Shopify documentation
[Render tag →](https://shopify.dev/docs/api/liquid/tags/render)
[Snippets →](https://shopify.dev/docs/storefronts/themes/architecture/snippets)
:::

---

## Foundation snippets

### `snippets/css-variables.liquid`

Rendered in `layout/theme.liquid` inside a `{% style %}` tag. Outputs **all CSS custom properties** for the entire design system onto `:root`. Also defines the `.container` class, base `body/html` styles, custom scrollbar, `.visually-hidden`, `.skip-to-content-link`, and `*:focus-visible` focus ring.

**This is where you change:** colors, spacing, fonts, shadows, transitions.

No parameters. Not called with `render` — included via `{% render 'css-variables' %}` in the layout.

---

### `snippets/meta-tags.liquid`

Outputs all SEO meta tags, Open Graph tags, Twitter Card meta, structured data (JSON-LD for products), `<title>`, `<link rel="canonical">`, and `<meta name="description">`. Adapts automatically based on the current page type (`template.name`).

No parameters. Rendered in `layout/theme.liquid`.

---

## UI component snippets

### `snippets/button.liquid`

The universal button component. Renders as `<a>` when `url` is provided, `<button>` otherwise.

**Parameters:**

| Param | Type | Required | Description |
|---|---|---|---|
| `text` | string | Yes | Button label |
| `url` | string | No | If provided, renders as `<a>` link |
| `type` | string | No | HTML button type (`submit`, `button`, `reset`) |
| `variant` | string | No | `primary`, `secondary`, `ghost`, `destructive` |
| `size` | string | No | `sm` (36px), `md` (44px), `lg` (52px) |
| `full_width` | boolean | No | Adds `.btn--full` for 100% width |
| `loading` | boolean | No | Shows a spinner |
| `disabled` | boolean | No | Disables the button |
| `aria_label` | string | No | Accessible label override |
| `class` | string | No | Additional CSS classes |
| `leading_icon` | string | No | Icon name (from `icon` snippet) before text |
| `trailing_icon` | string | No | Icon name after text |

**Example:**
```liquid
{% render 'button',
  text: 'Add to cart',
  type: 'submit',
  variant: 'primary',
  size: 'lg',
  full_width: true
%}
```

**CSS classes:**
- `.btn` — base button styles
- `.btn--primary` — orange background (`--accent-500`), dark text (`--btn-primary-text`)
- `.btn--secondary` — transparent with border, hover: orange border + text
- `.btn--ghost` — fully transparent, hover: orange text
- `.btn--destructive` — red background
- `.btn--sm/md/lg` — size variants
- `.btn--full` — 100% width

---

### `snippets/icon.liquid`

SVG icon library. Renders a `<span class="icon-wrapper">` with an inline SVG inside.

**Parameters:**

| Param | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Icon name (see list below) |
| `size` | string | No | `sm` (16px), `md` (20px), `lg` (24px), `xl` (32px) |
| `variant` | string | No | Color variant: `primary`, `secondary`, `muted`, `accent`, `success`, `warning`, `error`, `info` |
| `class` | string | No | Additional classes on the wrapper |
| `aria_hidden` | boolean | No | Defaults to `true` — most icons are decorative |
| `aria_label` | string | No | For meaningful icons |

**Available icons:**
`truck`, `user`, `user-plus`, `cart`, `search`, `chevron-down`, `logout`, `plus`, `minus`, `close`, `map-pin`, `mail`, `phone`, `package`, `palette`, `grid`, `list`, `folder`, `dice`, `filter`, `star`, `menu`, `calendar`, `clock`, `arrow-right`

**Example:**
```liquid
{% render 'icon', name: 'cart', size: 'md', variant: 'accent' %}
```

---

### `snippets/badge.liquid`

Small inline label/pill component.

**Parameters:**

| Param | Type | Required | Description |
|---|---|---|---|
| `text` | string | Yes | Badge label |
| `variant` | string | No | `primary`, `secondary`, `outline`, `accent`, `success`, `warning`, `error`, `info` |
| `size` | string | No | `sm` (11px), `md` (12px) |
| `class` | string | No | Additional classes |

**Example:**
```liquid
{% render 'badge', text: 'SALE', variant: 'accent', size: 'sm' %}
```

---

### `snippets/input.liquid`

Form input component with label, optional icons, error state, and helper text.

**Parameters:**

| Param | Type | Required | Description |
|---|---|---|---|
| `type` | string | No | HTML input type (default: `text`) |
| `name` | string | Yes | `name` attribute |
| `id` | string | No | `id` attribute (auto-generated from name if omitted) |
| `value` | string | No | Pre-filled value |
| `placeholder` | string | No | Placeholder text |
| `label` | string | No | Label text (omit for label-less inputs) |
| `size` | string | No | `sm`, `md`, `lg` |
| `leading_icon` | string | No | Icon name to show inside the left edge |
| `trailing_icon` | string | No | Icon name to show inside the right edge |
| `required` | boolean | No | Marks field as required |
| `disabled` | boolean | No | Disables the input |
| `error` | string | No | Error message to show below |
| `helper_text` | string | No | Helper text below the input |
| `class` | string | No | Additional classes on the wrapper |

**Example:**
```liquid
{% render 'input',
  type: 'email',
  name: 'contact[email]',
  label: 'Email address',
  placeholder: 'you@example.com',
  required: true,
  trailing_icon: 'mail'
%}
```

---

### `snippets/textarea.liquid`

Textarea component sharing the same styles as `input.liquid`.

| Param | Type | Description |
|---|---|---|
| `name` | string | Required — `name` attribute |
| `label` | string | Label text |
| `rows` | number | Number of rows (default: 5) |
| `placeholder` | string | Placeholder text |
| `required` | boolean | Required field |

---

### `snippets/checkbox.liquid`

Custom-styled checkbox. The native `<input type="checkbox">` is hidden and replaced with a custom `.checkbox-box` styled in CSS.

| Param | Type | Description |
|---|---|---|
| `name` | string | Input `name` attribute |
| `value` | string | Input `value` attribute |
| `id` | string | Input `id` |
| `label` | string | Label text |
| `checked` | boolean | Pre-checked state |

Checked state uses `--accent-500` as background. Focus-visible state uses a double-ring outline.

---

### `snippets/image.liquid`

Responsive image wrapper. Renders as `<a>` if `url` is provided, `<div>` otherwise.

| Param | Type | Description |
|---|---|---|
| `image` | image | Shopify image object |
| `url` | string | Optional link URL |
| `css_class` | string | Additional CSS class |
| `width` | number | Image render width |
| `height` | number | Image render height |
| `crop` | string | Crop position (`center`, `top`, `bottom`, `left`, `right`) |

---

### `snippets/pagination.liquid`

Pagination nav. Pass the Shopify `paginate` object as a parameter.

| Param | Type | Description |
|---|---|---|
| `paginate` | object | The Shopify `paginate` object from a `{% paginate %}` block |

**Example:**
```liquid
{% paginate collection.products by 24 %}
  {% for product in collection.products %}
    ...
  {% endfor %}
  {% render 'pagination', paginate: paginate %}
{% endpaginate %}
```

---

### `snippets/breadcrumbs.liquid`

Context-aware breadcrumb navigation bar. Automatically detects the current page type (collection, product, article, blog, page) and builds the appropriate trail. No parameters needed — reads global Liquid objects.

---

## Card snippets

### `snippets/product-card.liquid`

The main product card used everywhere products are listed. See [Product Cards](./product-cards) for full documentation.

---

### `snippets/article-card.liquid`

Standard blog article card for grid layouts. Full card is clickable.

| Param | Type | Description |
|---|---|---|
| `article` | object | Shopify article object |
| `blog` | object | Shopify blog object |
| `is_featured` | boolean | Featured variant spans full grid width |

---

### `snippets/article-card-masonry.liquid`

Variable-height card for masonry grid. Three size variants: `small`, `medium`, `large`.

| Param | Type | Description |
|---|---|---|
| `article` | object | Article object |
| `blog` | object | Blog object |
| `card_style` | string | `small`, `medium`, or `large` |
| `is_featured` | boolean | Featured spans 2 columns |

---

### `snippets/article-card-compact.liquid`

Horizontal compact card (image + content side by side) for list-style blog layouts.

---

### `snippets/article-card-large.liquid`

Large-format card with a tall image, gradient tag overlay, and a full button CTA.

---

### `snippets/blog-preview-card.liquid`

Homepage blog preview card with a distinctive date badge (day/month stacked on an orange square). No parameters beyond the standard `article` and `blog`.

---

### `snippets/collection-card.liquid`

Collection tile with a circular image on a white background.

| Param | Type | Description |
|---|---|---|
| `collection` | object | Shopify collection object |
| `class` | string | Additional CSS class |

---

## Navigation snippets

### `snippets/nav-structured-dropdown.liquid`

Renders hardcoded dropdown content for specific navigation keys. Used inside the header for rich category dropdowns.

| Param | Type | Description |
|---|---|---|
| `key` | string | Navigation key: `miniatures`, `terrain-scenery`, `paints`, etc. |
| `variant` | string | `desktop` or `mobile` |

---

### `snippets/mega-menu.liquid`

A data-driven mega menu that reads the `collections` global and uses `collection.metafields.custom.parent_collection` to build a 3-level hierarchy. **Not currently wired into the header.**

---

### `snippets/translated-link-title.liquid`

Maps Shopify link handles to translation keys for multilingual navigation labels.

| Param | Type | Description |
|---|---|---|
| `link` | object | A Shopify link list link object |

---

## Utility snippets

### `snippets/product-meta-link-list.liquid`

Renders a single metadata row (`<div class="meta-item">`) with linked values for product detail pages. Resolves collection URLs through a 7-step cascade. Used extensively in `sections/product-main.liquid` to render metafield data.

| Param | Description |
|---|---|
| `primary_metafield` | Main metafield to display |
| `fallback_metafield` | Fallback if primary is empty |
| `label` | Display label string |
| `label_key` | Translation key for the label |
| `primary_filter` / `fallback_filter` | Filter URL query parameter name |
| `base_collection_url` | Base URL for building filter links |
| `product_type_handle` | Product type handle for URL building |
| `prefer_filter_url` | Whether to prefer filter URL over collection URL |

---

### `snippets/table.liquid`

No HTML output — only a `{% stylesheet %}` block that applies design-system table styles to any `table`, `th`, `td` in the page. Include it on any page where you want styled tables.

---

### `snippets/cookie-banner.liquid`

Custom cookie consent banner (slides up from the bottom). Checks `localStorage` for `scenery_en_zo_cookies_accepted`. Rendered directly in `layout/theme.liquid`.

---

### `snippets/ambient-scene-layer.liquid`

A full-screen Three.js canvas overlay with floating RPG dice and ember particles. Used as an ambient background effect on select pages.

| Param | Type | Description |
|---|---|---|
| `preset` | string | `home`, `about`, or `blog` — controls the color scheme |
