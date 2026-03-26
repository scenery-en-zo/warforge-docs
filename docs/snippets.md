---
id: snippets
title: Snippets
sidebar_label: 'Snippets'
sidebar_position: 4
---

# Snippets

This page documents every snippet in the Warforge theme, including parameters, CSS classes, and usage examples.

## What are Snippets?

Snippets are reusable Liquid fragments that can be included anywhere with `
<!-- Liquid example -->'snippet-name', param: value %}````. Unlike sections, snippets don't have a schema and can't be added via the Theme Editor — they're purely for code reuse.

---

## Button Component (`snippets/button.```liquid`)

<div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
  <button class="button button--primary" style={{backgroundColor: '#F97316', color: 'white', padding: '14px 22px', fontWeight: '600', border: 'none', borderRadius: '10px', cursor: 'pointer'}}>
    Add to Cart
  </button>
  <button class="button button--secondary" style={{border: '1px solid #2C3B52', backgroundColor: 'transparent', color: '#F8FAFC', padding: '14px 22px', fontWeight: '600', borderRadius: '10px', cursor: 'pointer'}}>
    Learn More
  </button>
  <button class="button button--ghost" style={{backgroundColor: 'transparent', color: '#94A3B8', padding: '14px 22px', fontWeight: '600', border: 'none', borderRadius: '10px', cursor: 'pointer'}}>
    Edit
  </button>
</div>

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | String | — | Button text content |
| `style` | Select | `primary` | Button variant: `primary`, `secondary`, `ghost`, `outline` |
| `type` | Select | `button` | Element type: `button`, `submit`, `reset` |
| `href` | URL | — | Make button an anchor link (overrides type) |
| `target` | String | `_self` | Link target for href buttons |
| `rel` | String | `noopener` | Link rel attribute for external links |
| `icon` | String | — | Icon name to render before text |

### Usage Examples

```liquid
```liquid
```

<!-- Liquid example -->'button', label: 'Add to Cart', style: 'primary', type: 'submit' %&#125;```

&#123;%- comment %&#125; Secondary outline button &#123;% endcomment -%&#125;

<!-- Liquid example -->'button', label: 'Learn More', style: 'secondary', href: '/collections/all' %&#125;```

&#123;%- comment %&#125; Ghost button for small actions &#123;% endcomment -%&#125;

<!-- Liquid example -->'button', label: 'Edit', style: 'ghost', type: 'button' %&#125;```

&#123;%- comment %&#125; Button with icon &#123;% endcomment -%&#125;

<!-- Liquid example -->'button', label: 'Share', style: 'primary', icon: 'share' %&#125;```
```

### CSS Classes

| Class | Description |
|-------|-------------|
| `.button` | Base button styles |
| `.button--primary` | Orange CTA button |
| `.button--secondary` | Outline button |
| `.button--ghost` | Transparent ghost button |
| `.button--outline` | Alternative outline style |

---

## Badge Component (`snippets/badge.```liquid`)

<div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
  <span class="badge badge--miniature" style={{backgroundColor: '#F59E0B', color: '#0F172A', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    Miniature
  </span>
  <span class="badge badge--new" style={{backgroundColor: '#22C55E', color: '#0F172A', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    New Arrival
  </span>
  <span class="badge badge--out-of-stock" style={{backgroundColor: '#EF4444', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    Out of Stock
  </span>
</div>

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | String | — | Badge text content |
| `variant` | Select | `default` | Badge style: `miniature`, `new`, `out-of-stock`, `sale`, `preorder` |
| `href` | URL | — | Optional link for badge |
| `target` | String | `_self` | Link target |

### Usage Examples

```
&#123;%- comment %&#125; Miniature product badge &#123;% endcomment -%&#125;

<!-- Liquid example -->'badge', label: 'Miniature', variant: 'miniature' %&#125;```

&#123;%- comment %&#125; New arrival badge &#123;% endcomment -%&#125;

<!-- Liquid example -->'badge', label: 'New', variant: 'new' %&#125;```

&#123;%- comment %&#125; Out of stock warning &#123;% endcomment -%&#125;

<!-- Liquid example -->'badge', label: 'Out of Stock', variant: 'out-of-stock' %&#125;```
```
### CSS Classes

| Class | Description |
|-------|-------------|
| `.badge` | Base badge styles |
| `.badge--miniature` | Product category badge |
| `.badge--new` | New arrival indicator |
| `.badge--out-of-stock` | Stock status warning |
| `.badge--sale` | Sale promotion tag |

---

## Breadcrumbs Component (`snippets/breadcrumbs.```liquid`)

<div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px'}}>
  <a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>Home</a>
  <span style={{color: '#64748B'}}>/</span>
  <a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>Miniatures</a>
  <span style={{color: '#64748B'}}>/</span>
  <span style={{color: '#F8FAFC', fontWeight: '600'}}>Battlefield Skulls</span>
</div>

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `current_page` | String | — | Current page title (not clickable) |
| `links` | Array | — | Array of `{ label: '...', url: '...' }` objects |
| `show_home_label` | Boolean | `true` | Show "Home" as first link |

### Usage Examples

```
```&#123;%- comment %&#125; Product breadcrumbs &#123;% endcomment -%&#125;
&#123;%!-- Liquid render example --%&#125;'breadcrumbs', links: [&#123; label: 'Miniatures', url: '/collections/miniatures' &#125;], current_page: 'Battlefield Skulls' %&#125;

&#123;%- comment %&#125; Collection breadcrumbs &#123;% endcomment -%&#125;
&#123;%!-- Liquid render example --%&#125;'breadcrumbs', links: [
  &#123; label: 'Home', url: '/' &#125;,
  &#123; label: 'Miniatures', url: '/collections/miniatures' &#125;
], current_page: 'Battlefield Skulls' %&#125;

&#123;%- comment %&#125; Blog post breadcrumbs &#123;% endcomment -%&#125;
&#123;%!-- Liquid render example --%&#125;'breadcrumbs', links: [
  &#123; label: 'Home', url: '/' &#125;,
  &#123; label: 'Projects', url: '/blogs/projecten' &#125;
], current_page: 'Painting Factory Floor Bases' %&#125;
```

### CSS Classes

| Class | Description |
|-------|-------------|
| `.breadcrumbs` | Container for breadcrumb trail |
| `.breadcrumbs__link` | Individual breadcrumb link |
| `.breadcrumbs__separator` | Slash separator between links |

---

## Product Card Component (`snippets/product-card.```liquid`)

<div style={{backgroundColor: '#1E293B', borderRadius: '14px', padding: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.25)'}}>
  <div style={{aspectRatio: '4/3', backgroundColor: '#2C3B52', borderRadius: '8px', marginBottom: '12px'}}></div>
  <span style={{fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase'}}>Miniatures</span>
  <h3 style={{fontFamily: "Cinzel, serif", fontSize: '18px', margin: '8px 0'}}>Battlefield Resin Skulls</h3>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <span style={{fontSize: '20px', color: '#F97316'}}>€24,95</span>
    <button style={{backgroundColor: '#F97316', color: 'white', padding: '8px 16px', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Add to Cart</button>
  </div>
</div>

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `product` | Object | — | Product object from collection |
| `show_price` | Boolean | `true` | Show product price |
| `show_rating` | Boolean | `false` | Show star rating |
| `variant_id` | Number | — | Specific variant to display |
| `image_width` | Number | `400` | Image width for rendering |

### Usage Examples

``````liquid
&#123;%- comment %&#125; Standard product card &#123;% endcomment -%&#125;

<!-- Liquid example -->'product-card', product: item, image_width: 400 %&#125;```

&#123;%- comment %&#125; Card without price (for sliders) &#123;% endcomment -%&#125;

<!-- Liquid example -->'product-card', product: item, show_price: false, image_width: 300 %&#125;```

&#123;%- comment %&#125; Card with variant selector &#123;% endcomment -%&#125;

<!-- Liquid example -->'product-card', product: product, variant_id: selected_variant.id, image_width: 500 %&#125;```
```
### CSS Classes

| Class | Description |
|-------|-------------|
| `.product-card` | Base card container |
| `.product-card__image` | Product image wrapper |
| `.product-card__title` | Product title |
| `.product-card__price` | Price display |
| `.product-card__add-to-cart` | Add to cart button |

---

## Blog Card Component (`snippets/article-card.```liquid`)

<div style={{backgroundColor: '#1E293B', borderRadius: '14px', padding: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.25)'}}>
  <div style={{aspectRatio: '4/3', backgroundColor: '#2C3B52', borderRadius: '8px', marginBottom: '12px'}}></div>
  <span style={{fontSize: '10px', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Projects</span>
  <h3 style={{fontFamily: "Cinzel, serif", fontSize: '18px', margin: '8px 0'}}>Painting Factory Floor Bases</h3>
  <p style={{color: '#94A3B8', fontSize: '14px', lineHeight: '1.6', marginBottom: '12px'}}>On request I painted factory floor bases, 40mm round, 12 pieces...</p>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <span style={{fontSize: '12px', color: '#64748B'}}>Feb 26 • 5 min read</span>
    <a href="#" style={{color: '#F97316', fontWeight: '600', textDecoration: 'none'}}>Read more →</a>
  </div>
</div>

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `article` | Object | — | Blog article object |
| `image_width` | Number | `400` | Image width for rendering |
| `show_date` | Boolean | `true` | Show publication date |
| `show_read_time` | Boolean | `false` | Show reading time estimate |

### Usage Examples

```liquid
```liquid
```

<!-- Liquid example -->'article-card', article: article, image_width: 400, show_date: true %&#125;```

&#123;%- comment %&#125; Compact card for grid layouts &#123;% endcomment -%&#125;

<!-- Liquid example -->'article-card', article: article, image_width: 300, show_date: false %&#125;```

&#123;%- comment %&#125; Large featured card &#123;% endcomment -%&#125;

<!-- Liquid example -->'article-card', article: article, image_width: 600, show_read_time: true %&#125;```
```

### CSS Classes

| Class | Description |
|-------|-------------|
| `.article-card` | Base card container |
| `.article-card__tag` | Category/tag badge |
| `.article-card__title` | Article title |
| `.article-card__excerpt` | Article excerpt |
| `.article-card__meta` | Date and read time |

---

## Icon Component (`snippets/icon.```liquid`)

<div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
  
<!-- Liquid example -->'icon', name: 'truck', size: 'sm', variant: 'accent' %}```
  <span class="announcement-text">Free shipping</span>
  
  
<!-- Liquid example -->'icon', name: 'user', size: 'sm', variant: 'secondary' %}```
  <span>My Account</span>
  
  
<!-- Liquid example -->'icon', name: 'cart', size: 'sm', variant: 'secondary' %}```
  <span>Cart (0)</span>
</div>

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | String | — | Icon name from icon library |
| `size` | Select | `md` | Icon size: `sm`, `md`, `lg`, `xl` |
| `variant` | Select | `primary` | Color variant: `primary`, `secondary`, `accent`, `muted` |

### Usage Examples

```
&#123;%- comment %&#125; Small accent icon &#123;% endcomment -%&#125;

<!-- Liquid example -->'icon', name: 'truck', size: 'sm', variant: 'accent' %&#125;```

&#123;%- comment %&#125; Medium secondary icon &#123;% endcomment -%&#125;

<!-- Liquid example -->'icon', name: 'user', size: 'md', variant: 'secondary' %&#125;```

&#123;%- comment %&#125; Large primary icon &#123;% endcomment -%&#125;

<!-- Liquid example -->'icon', name: 'menu', size: 'lg', variant: 'primary' %&#125;```
```
### Available Icons

The theme includes these icons (from Heroicons or similar):

- `truck` — Free shipping announcement
- `user` — Account/login icon
- `user-plus` — Register account icon
- `cart` — Cart icon
- `menu` — Mobile menu toggle
- `chevron-down` — Dropdown indicators
- `share` — Share button icon
- `search` — Search icon
- `close` — Close/exit icon
- `check` — Success/checkmark icon

### CSS Classes

| Class | Description |
|-------|-------------|
| `.icon` | Base icon container |
| `.icon--sm` | Small icon (16px) |
| `.icon--md` | Medium icon (24px) |
| `.icon--lg` | Large icon (32px) |
| `.icon--xl` | Extra large icon (48px) |

---

## Image Component (`snippets/image.```liquid`)

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
  <div style={{aspectRatio: '1/1', backgroundColor: '#2C3B52', borderRadius: '8px'}}></div>
  <div style={{aspectRatio: '4/3', backgroundColor: '#2C3B52', borderRadius: '8px'}}></div>
  <div style={{aspectRatio: '16/9', backgroundColor: '#2C3B52', borderRadius: '8px'}}></div>
</div>

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `src` | URL | — | Image source URL |
| `alt` | String | Empty | Alt text for accessibility |
| `width` | Number | `auto` | Image width (or 'auto') |
| `height` | Number | `auto` | Image height (or 'auto') |
| `crop` | Select | `none` | Crop position: `none`, `left`, `center`, `right`, `top`, `bottom` |
| `loading` | String | `lazy` | Loading strategy: `lazy`, `eager` |

### Usage Examples

```
```&#123;%- comment %&#125; Product featured image &#123;% endcomment -%&#125;
<img />

&#123;%- comment %&#125; Hero background image &#123;% endcomment -%&#125;

<!-- Liquid example -->'image', src: hero_section.image, width: 1920, crop: 'center' %&#125;```

&#123;%- comment %&#125; Blog article thumbnail &#123;% endcomment -%&#125;

<!-- Liquid example -->'image', src: article.featured_image, width: 400, height: 300, crop: 'left' %&#125;```
```

### CSS Classes

| Class | Description |
|-------|-------------|
| `.image` | Base image wrapper |
| `.image--product` | Product image (maintains aspect ratio) |
| `.image--hero` | Hero background image |
| `.image--thumbnail` | Thumbnail/preview image |

---

## Pagination Component (`snippets/pagination.```liquid`)

<div style={{display: 'flex', gap: '4px'}}>
  <button style={{backgroundColor: 'transparent', color: '#94A3B8', border: 'none', padding: '8px', cursor: 'pointer'}}>‹ Prev</button>
  <button style={{backgroundColor: '#F97316', color: 'white', border: 'none', padding: '8px 16px', fontWeight: '600', borderRadius: '6px', cursor: 'pointer'}}>1</button>
  <button style={{backgroundColor: 'transparent', color: '#94A3B8', border: 'none', padding: '8px', cursor: 'pointer'}}>2</button>
  <button style={{backgroundColor: 'transparent', color: '#94A3B8', border: 'none', padding: '8px', cursor: 'pointer'}}>3</button>
  <button style={{backgroundColor: 'transparent', color: '#94A3B8', border: 'none', padding: '8px', cursor: 'pointer'}}>Next ›</button>
</div>

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `current_page` | Number | — | Current page number |
| `total_pages` | Number | — | Total number of pages |
| `url_base` | String | — | Base URL for pagination links |
| `show_prev_next` | Boolean | `true` | Show previous/next buttons |
| `show_page_numbers` | Boolean | `true` | Show page number links |

### Usage Examples

``````liquid
&#123;%- comment %&#125; Standard pagination &#123;% endcomment -%&#125;

<!-- Liquid example -->'pagination', current_page: 1, total_pages: 5, url_base: collection.url %&#125;```

&#123;%- comment %&#125; Pagination without prev/next buttons &#123;% endcomment -%&#125;

<!-- Liquid example -->'pagination', current_page: 2, total_pages: 10, show_prev_next: false %&#125;```
```
### CSS Classes

| Class | Description |
|-------|-------------|
| `.pagination` | Container for pagination controls |
| `.pagination__button` | Individual pagination button |
| `.pagination__current` | Current page indicator |

---

## Cookie Banner Component (`snippets/cookie-banner.```liquid`)

<div style={{backgroundColor: '#1a1f2b', borderRadius: '14px', padding: '24px'}}>
  <p style={{color: '#CBD5E1', marginBottom: '16px'}}>We use cookies to improve your experience on our battlefield. <a href="/pages/privacy-policy" style={{color: '#F97316'}}>Privacy Policy</a></p>
  <div style={{display: 'flex', gap: '12px'}}>
    <button style={{backgroundColor: '#ff8b00', color: '#0a0e16', padding: '10px 24px', fontWeight: '700', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Accept</button>
    <button style={{backgroundColor: '#131720', color: 'white', border: '1px solid #3e4a5d', padding: '10px 24px', fontWeight: '700', borderRadius: '4px', cursor: 'pointer'}}>Decline</button>
  </div>
</div>

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `show_banner` | Boolean | `true` | Whether to show the banner |
| `banner_text` | String | — | Custom banner text |
| `privacy_policy_url` | URL | — | Privacy policy link |

### Usage Examples

```liquid
```liquid
```

<!-- Liquid example -->'cookie-banner', show_banner: true, privacy_policy_url: '/pages/privacy-policy' %&#125;```

&#123;%- comment %&#125; Hidden banner (after acceptance) &#123;% endcomment -%&#125;

<!-- Liquid example -->'cookie-banner', show_banner: false %&#125;```
```

### CSS Classes

| Class | Description |
|-------|-------------|
| `.cookie-banner` | Banner container |
| `.cookie-banner__text` | Banner text content |
| `.cookie-banner__accept` | Accept button |
| `.cookie-banner__decline` | Decline button |

---

## Meta Tags Component (`snippets/meta-tags.```liquid`)


<!-- Liquid example -->'meta-tags' %}
```
### Description

Generates all SEO meta tags for the page including:

- Title tag
- Meta description
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Canonical URL
- Robots meta tag

### Usage

This snippet is automatically rendered in `layout/theme.```liquid` and doesn't need to be called manually.

---

## CSS Variables Snippet (`snippets/css-variables.```liquid`)


<!-- Liquid example -->'css-variables' %}
```

### Description

Injects CSS custom properties into the `<head>` for all design tokens:

- Color palette (backgrounds, accents, text)
- Typography scale (font sizes, line heights)
- Spacing scale (--space-1 through --space-9)
- Border radius scale (--radius-sm through --radius-xl)
- Shadow definitions
- Transition timing functions

### Usage

This snippet is automatically rendered in `layout/theme.```liquid` and provides the foundation for all theme styling.

---

## Learn More

- [Shopify Snippets reference](https://shopify.dev/docs/storefronts/themes/architecture/snippets)
- [Theme editor guide](https://shopify.dev/docs/storefronts/themes/tools/online-editor)

