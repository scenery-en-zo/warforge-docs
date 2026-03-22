---
id: sections
title: Sections Reference
sidebar_position: 4
---

# Sections Reference

Sections are the building blocks of every page. Each section is a `.liquid` file in the `sections/` directory. They contain Liquid/HTML markup, optional `{% stylesheet %}` and `{% javascript %}` blocks, and a `{% schema %}` block that exposes settings in the theme editor.

:::info Shopify documentation
[Sections →](https://shopify.dev/docs/storefronts/themes/architecture/sections)
:::

---

## Layout sections (always present)

These sections are rendered via section groups and appear on **every page**, regardless of template.

### `sections/header.liquid`

The site-wide header. Three zones stacked vertically:

1. **Top bar** — Free shipping announcement, account/cart links, language selector
2. **Main header** — Logo, search input (with predictive search overlay)
3. **Desktop nav** — Horizontal navigation menu from a Shopify link list

Mobile: the desktop nav is hidden; a hamburger button opens a slide-in drawer.

**Theme editor settings:**

| Setting | Type | Description |
|---|---|---|
| `menu` | link_list | Which Shopify menu to use for navigation. Default: `main-menu` |

**To change the navigation menu:** Go to the theme editor → click the header → change the "Menu" setting. To edit the menu items themselves, go to **Online Store → Navigation**.

**Key CSS classes:**
- `.header-wrapper` — the fixed-position header container
- `.nav-bar` — the desktop navigation strip
- `.nav-link.is-active` — the currently active nav link (orange underline)
- `.mobile-drawer` — the slide-in mobile menu
- `.search-input-wrapper.is-active` — the expanded search overlay

---

### `sections/footer.liquid`

The site-wide footer. Uses **blocks** — merchants can add/remove/reorder columns in the theme editor.

**Block types:**

| Block type | What it renders |
|---|---|
| `brand_info` | Logo + about text |
| `link_list` | Column heading + links from a Shopify menu |
| `contact` | Address, email, phone with icons |
| `text` | Rich text content |
| `policies` | Auto-renders all shop policies (privacy, refund, etc.) |

**Theme editor settings:**

| Setting | Type | Description |
|---|---|---|
| `show_payment_icons` | checkbox | Show accepted payment method icons in the bottom bar |

---

## Homepage sections

These appear in `templates/index.json`.

### `sections/hero.liquid`

The full-width hero banner at the top of the homepage. Renders a background image with an animated Three.js WebGL scene (floating RPG dice + embers) on top.

**Theme editor settings:**

| Setting | Type | Description |
|---|---|---|
| `background_image` | image_picker | Desktop background image |
| `mobile_background_image` | image_picker | Mobile background image (optional — falls back to desktop) |
| `heading` | text | The H1 heading text |
| `subheading` | textarea | Subheading below the heading |
| `cta_text` | text | Primary button label |
| `cta_url` | url | Primary button URL |
| `secondary_cta_text` | text | Secondary button label (only shown to guests, not logged-in customers) |
| `secondary_cta_url` | url | Secondary button URL |
| `enable_3d_fx` | checkbox | Turn the WebGL dice/embers effect on or off |
| `fx_mode` | select | Effect colour preset: `embers` (orange), `arcane` (blue), `mist` (grey) |
| `fx_intensity` | range 20–100 | How many particles to render |
| `fx_parallax` | checkbox | Mouse parallax on desktop |
| `fx_mobile_quality` | select | Mobile quality: `off`, `low`, `medium` |

**How the 3D effect works:**
The section loads `assets/three.module.min.js` dynamically via `import()`. An `IntersectionObserver` delays loading until the hero is visible. On mobile, a `requestIdleCallback` schedules it with a 2-second timeout. If WebGL is unavailable, the class `.hero--fx-fallback` is added and a CSS radial-gradient animation runs instead.

---

### `sections/features.liquid`

A horizontal strip of selling-point highlights (icon + title + text). Shown below the hero on the homepage.

**Block type:** `feature`

| Block setting | Type | Description |
|---|---|---|
| `icon_name` | text | Name of an icon from `snippets/icon.liquid` |
| `title` | text | Feature title |
| `text` | textarea | Short description |

---

### `sections/featured-products.liquid`

A horizontally scrollable product slider (labelled "Weekly Deals" by default). Products are added as blocks in the theme editor.

**Theme editor settings:**

| Setting | Type | Description |
|---|---|---|
| `heading` | text | Section title |
| `collection` | collection | Fallback collection if no product blocks are added |
| `show_view_all` | checkbox | Show a "View All" link |
| `view_all_url` | url | Where the "View All" link points |

**Block type:** `product` — add a product picker per slide.

**How the slider works:** Each section instance has its own JS function (scoped by section ID) to avoid conflicts when multiple sliders are on the same page. The slider supports drag-to-scroll with momentum physics and keyboard navigation.

---

### `sections/featured-offers.liquid`

Identical to `featured-products` — a second slider zone for a different set of products (labelled "Featured Offers").

---

### `sections/blog-preview.liquid`

Shows recent blog posts in a card grid. Uses the `blog-preview-card` snippet for each article.

**Theme editor settings:**

| Setting | Type | Description |
|---|---|---|
| `heading` | text | Section title |
| `blog` | blog | Which blog to pull articles from |
| `articles_to_show` | number | How many articles to display |

---

### `sections/newsletter.liquid`

Email newsletter signup card. Accepts either a Shopify Forms app block or a built-in theme form.

**Block types:**
- `@app` — allows Shopify app extensions (e.g. Shopify Forms)
- `theme_form` — built-in form using `{% form 'customer' %}` with tag `newsletter`

---

## Collection page sections

### `sections/collection-grid.liquid`

The main collection page (used in `templates/collection.json`). This is the most complex section in the theme at ~1,347 lines.

**Features:**
- Sidebar with faceted filters (supports custom metafield namespaces)
- Sort-by dropdown
- Grid/list view toggle (saved per session)
- Configurable column counts
- Mobile filter drawer
- Breadcrumbs
- Pagination

**Theme editor settings:**

| Setting | Type | Description |
|---|---|---|
| `columns_wide` | select | Columns on wide screens (4 or 5) |
| `columns_desktop` | select | Columns on desktop (3 or 4) |

**Supported filter namespaces (metafields):**
`miniature`, `terrain`, `paint`, `tool`, `brush`, `base`, `material`, `effect`, `compatibility`, `custom.*`

**Key CSS classes:**
- `.collection-sidebar` — the filter sidebar
- `.filter-group` — a single filter section (e.g. "Race", "Class")
- `.filter-apply` — the "Apply" button inside a filter group
- `.collection__grid` — the product grid
- `.collection-toolbar-hero` — the toolbar bar with sort and view controls

---

## Product page sections

### `sections/product-main.liquid`

The main product detail view (~956 lines). Two-column layout: image gallery on the left, product info on the right.

**Gallery:** Main image with zoom URL, thumbnail strip (click to swap), fade transition between images.

**Info:** vendor, title, price (with compare-at price), badge (in-stock/sold-out), description excerpt, variant swatches, quantity selector, add-to-cart button, trust badges.

**Metadata footer:** Renders all custom metafields as linked values (race, class, weapon, base shape, paint type, etc.) using `snippets/product-meta-link-list.liquid`.

**Theme editor settings:**

| Setting | Type | Description |
|---|---|---|
| `trust_text_1/2/3` | text | Labels for the three trust badge items |

**How variant switching works:** All variant data is serialized to a `<script type="application/json">` tag. When a swatch is clicked, JavaScript reads this JSON, updates the price, SKU, availability badge, gallery image, and URL `?variant=` parameter client-side — no page reload.

---

### `sections/product-details.liquid`

A tabbed content section below the main product form. Tabs: Description, Specifications, Shipping, Returns.

---

### `sections/related-products.liquid`

A "Related Products" slider below the product info, pulling from the current product's collection or tags.

---

## Blog sections

### `sections/main-article.liquid`

Full blog post page. Contains: breadcrumbs, article header (tag badge, read time, title, author), featured image, article content (rich text), author bio block, and comments section (if enabled by the blog settings).

Also includes a sidebar with: article search, popular tags, newsletter signup.

**Key CSS classes:**
- `.article__tag` — the orange blog category badge
- `.article__author-bio` — the author bio card at the bottom of the post
- `.bio-link` — the "view all posts" link in the author bio

---

### `sections/main-blog.liquid`

Blog listing page with layout options.

**Theme editor settings include a `layout` select** with options: `grid`, `masonry`, `compact`, `cards`. Each layout uses a different article card snippet.

---

## Page sections

### `sections/page.liquid`

Generic page template that renders `page.content` as rich text. Used for most pages created under **Online Store → Pages**.

### `sections/about.liquid`

The About Us page with a hero panel (title + subtitle overlaid on a background image) and a rich text body section.

### `sections/main-contact.liquid`

Contact page with a `{% form 'contact' %}` form, plus contact info (address, email, phone).

---

## Other sections

| Section | Description |
|---|---|
| `sections/cart.liquid` | Cart page with line items and order summary |
| `sections/search.liquid` | Search results page |
| `sections/testimonials.liquid` | Grid of testimonial cards (uses theme blocks) |
| `sections/featured-collections.liquid` | Grid of collection tiles |
| `sections/image-with-text.liquid` | Two-column image + text layout |
| `sections/rich-text.liquid` | Centered text block |
| `sections/video.liquid` | Embedded YouTube/Vimeo or Shopify video |
| `sections/new-arrivals.liquid` | Product grid section for newest products |
| `sections/sale-products.liquid` | Product slider for discounted products |
| `sections/popular-tags.liquid` | Tag/category pill grid |
| `sections/trust-block.liquid` | Row of trust badges (security, shipping, returns) |
| `sections/promo-block.liquid` | Promotional banner with image and CTA |
| `sections/predictive-search.liquid` | AJAX search results (fetched by the header) |
| `sections/404.liquid` | 404 not found page |
| `sections/password.liquid` | Store password/coming-soon page |
| `sections/collections.liquid` | All-collections grid |
| `sections/customer-*.liquid` | Account, orders, addresses, login, register pages |
