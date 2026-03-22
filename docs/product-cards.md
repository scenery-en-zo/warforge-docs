---
id: product-cards
title: Product Cards
sidebar_position: 8
---

# Product Cards

The product card is the most-used component in the theme. It appears in:
- Product sliders (Featured Products, Featured Offers, Related Products, Sale Products)
- Collection grids (the main collection page)
- Search results
- New Arrivals, Newest Products sections

All of these use **one single snippet**: `snippets/product-card.liquid`.

---

## Card anatomy

```
┌──────────────────────────────────┐
│  ┌────────────────────────────┐  │
│  │                            │  │
│  │    Product image           │  │
│  │    (1:1 aspect ratio)      │  │
│  │                            │  │
│  │  [SALE -20%]  [♡]         │  │ ← badge + wishlist button
│  └────────────────────────────┘  │
│                                  │
│  MINIATURES             SKU: 123 │ ← category + SKU
│  Product Title Here               │ ← accent color title
│                                  │
│  €12,99  ~~€15,99~~              │ ← price + compare-at
│                                  │
│  [      ADD TO CART      ]       │ ← form button
└──────────────────────────────────┘
```

---

## How to call the snippet

```liquid
{% render 'product-card', product: product %}
```

With all optional parameters:

```liquid
{% render 'product-card',
  product: product,
  image_loading: 'lazy',
  image_fetchpriority: 'auto',
  image_decoding: 'async',
  image_width: 600,
  image_widths: '300,400,500,600,800',
  image_sizes: '(max-width: 768px) 50vw, 25vw'
%}
```

**Parameters:**

| Param | Default | Description |
|---|---|---|
| `product` | — | Required. The Shopify product object |
| `image_loading` | `'lazy'` | HTML `loading` attribute (`eager` or `lazy`) |
| `image_fetchpriority` | `'auto'` | HTML `fetchpriority` attribute |
| `image_decoding` | `'async'` | HTML `decoding` attribute |
| `image_width` | `600` | Base image width for `image_url` filter |
| `image_widths` | Various | Responsive widths for `srcset` |
| `image_sizes` | Various | `sizes` attribute for responsive images |

For the first few visible cards (above the fold), use `image_loading: 'eager'` and `image_fetchpriority: 'high'` to avoid lazy loading delays.

---

## Card structure (HTML)

```html
<div class="product-card" data-product-card data-product-url="/products/handle">

  <!-- Image zone -->
  <div class="product-card__media">
    <a href="/products/handle" class="product-card__media-link" 
       aria-hidden="true" tabindex="-1">
      <img class="product-card__image" ... />
    </a>
    
    <!-- Sale badge (if compare-at price exists) -->
    <div class="product-card__badges">
      <!-- badge snippet: "SALE -20%" -->
    </div>
    
    <!-- Wishlist Hero button (if customer logged in) -->
    <button class="wishlisthero-floating" ...></button>
  </div>

  <!-- Content zone -->
  <div class="product-card__content">
    <a href="/products/handle" class="product-card__content-link">
      
      <div class="product-card__header">
        <div class="product-card__meta-top">
          <span class="product-card__category">Miniatures</span>
          <span class="product-card__sku">SKU: 30217</span>
        </div>
        <h3 class="product-card__title">Barbarian Chieftain</h3>
      </div>

      <div class="product-card__body">
        <div class="product-card__price">
          <span class="price-current">€12,99</span>
          <span class="price-old">€15,99</span>  <!-- only if on sale -->
        </div>
      </div>

    </a>

    <!-- Add to Cart form -->
    <div class="product-card__footer">
      <div class="product-card__actions">
        <form class="product-card__form" action="/cart/add" method="post">
          <input type="hidden" name="id" value="{{ variant.id }}">
          <!-- button snippet: "Add to Cart" or "Sold Out" -->
        </form>
      </div>
    </div>

  </div>
</div>
```

---

## Key CSS classes

| Class | Description |
|---|---|
| `.product-card` | The card container — `background: var(--bg-800)`, border, rounded corners, shadow |
| `.product-card__media` | Image container — `aspect-ratio: 1/1`, overflow hidden |
| `.product-card__media-link` | Wraps the image — `aria-hidden="true"` (decorative, the content link handles navigation) |
| `.product-card__image` | The `<img>` element — `object-fit: cover`, transitions on hover |
| `.product-card__badges` | Container for the sale badge — positioned top-left over the image |
| `.product-card__content-link` | The clickable content area — no `aria-label` (derives accessible name from its text content) |
| `.product-card__title` | Product title — `font-family: var(--font-display)`, `color: var(--accent-500)` |
| `.price-current` | Current price — `color: var(--price-color)` (green) |
| `.price-old` | Compare-at price — `text-decoration: line-through`, muted color |
| `.product-card__btn` | The Add to Cart button |

### Hover state

On desktop (hover-capable screens), hovering the card:
- Border turns orange (`var(--accent-500)`)
- Shadow becomes an orange glow (`var(--shadow-card-hover)`)
- Background darkens to `var(--bg-950)`
- Title changes to white
- Product image scales to 1.08×

---

## Sold-out products

When `product.available` is false:
- The Add to Cart button shows "Sold Out" with a close icon
- The button is `disabled`
- A sold-out badge may appear (if configured)

---

## Sale percentage calculation

The sale percentage badge is calculated in the snippet:

```liquid
{% if product.compare_at_price > product.price %}
  {% assign discount = product.compare_at_price | minus: product.price %}
  {% assign discount_pct = discount | times: 100 | divided_by: product.compare_at_price %}
  {% render 'badge', text: '-' | append: discount_pct | append: '%', variant: 'accent' %}
{% endif %}
```

---

## Accessibility decisions

### Why `aria-hidden` on the image link

The product card has **two links** to the same URL:
1. `.product-card__media-link` (wraps the image)
2. `.product-card__content-link` (wraps the text)

Having two links to the same URL is redundant for screen reader users. The image link is marked `aria-hidden="true" tabindex="-1"`, so screen readers skip it and only encounter the content link, which has a readable accessible name from its text content (title + price).

### Why no `aria-label` on the content link

Earlier versions used `aria-label="{{ product.title }}"` on the content link, but this caused **label-content-name-mismatch** WCAG violations (the accessible name must include the visible text). The fix: remove `aria-label` entirely. The link's accessible name is now computed from its visible children (category, title, price) — which is correct and compliant.

---

## Wishlist Hero integration

If the Wishlist Hero app is installed and a customer is logged in, a floating heart button appears over the product image:

```html
<button 
  class="wishlisthero-floating"
  data-wlh-id="{{ product.id }}"
  data-wlh-handle="{{ product.handle }}"
  data-wlh-variant="{{ product.selected_or_first_available_variant.id }}"
  data-wlh-title="{{ product.title }}"
  data-wlh-image="{{ product.featured_image | image_url: width: 300 }}"
  data-wlh-price="{{ product.price | money }}"
  data-wlh-url="{{ product.url }}"
>
```

The app reads these `data-wlh-*` attributes to manage wishlist state. The button's visual styling is overridden in `assets/critical.css` to match the theme design.

---

## Product card in different contexts

### In sliders (featured-products, featured-offers)

The slider wraps each card in a `.featured-slider__item`:

```liquid
{% for product in products %}
  <div class="featured-slider__item">
    {% render 'product-card', product: product, image_loading: 'lazy' %}
  </div>
{% endfor %}
```

### In collection grids (collection-grid.liquid)

The grid wraps each card in a `.collection__item`:

```liquid
{% for product in collection.products %}
  <li class="collection__item">
    {% render 'product-card', product: product %}
  </li>
{% endfor %}
```

The grid column count is controlled by CSS custom properties set on the `.collection` element:
```css
.collection {
  --columns-wide: 4;
  --columns-desktop: 3;
}
```

These are set from section settings.
