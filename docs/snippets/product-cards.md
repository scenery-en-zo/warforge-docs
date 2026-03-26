---
id: snippets-product-cards
title: Product Cards
sidebar_label: 'Product Cards'
---

# Product Card Snippet

**File:** `snippets/product-card.liquid`

The product card is the primary component for displaying products in grids, carousels, and collection pages.

## Visual Example

<div class="product-card-demo" style="max-width: 320px; margin: 0 auto;">
<div class="product-card" data-product-card>
  <div class="product-card__media">
    <div class="product-card__placeholder-container">
      <svg class="product-card__placeholder" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
    </div>
    <div class="product-card__badges">
      <span class="badge badge--accent badge--sm">-20%</span>
    </div>
  </div>
  
  <div class="product-card__content">
    <div class="product-card__header">
      <div class="product-card__meta-top">
        <span class="product-card__category">Miniatures</span>
        <span class="product-card__sku">SKU: WFG-001</span>
      </div>
      <h3 class="product-card__title">Battlefield Resin Skulls</h3>
    </div>
    
    <div class="product-card__body">
      <div class="product-card__price">
        <span class="price-current">€24,95</span>
        <span class="price-old">€31,95</span>
      </div>
    </div>
    
    <div class="product-card__footer">
      <form class="product-card__form">
        <button type="button" class="btn btn--primary product-card__btn">
          <span class="btn__content">
            <span class="btn__icon-wrapper">
              <svg class="icon" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </span>
            <span class="btn__text">Add to Cart</span>
          </span>
        </button>
      </form>
    </div>
  </div>
</div>
</div>

## Usage

```liquid
{% render 'product-card',
  product: product,
  image_loading: 'lazy',
  image_fetchpriority: 'auto',
  image_decoding: 'async',
  image_width: 320,
  image_widths: '120,160,180,200,220,260,320',
  image_sizes: '(max-width: 992px) 205px, (min-width: 1500px) 205px, (min-width: 1200px) 16vw, (min-width: 992px) 20vw, (min-width: 768px) 28vw, 42vw'
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `product` | Object | Required | Shopify product object |
| `image_loading` | String | `lazy` | Image loading: `lazy` or `eager` |
| `image_fetchpriority` | String | `low` | Fetch priority: `low`, `high`, `auto` |
| `image_decoding` | String | `async` | Image decoding: `async`, `sync`, `auto` |
| `image_width` | Number | `320` | Base image width in pixels |
| `image_widths` | String | See default | Responsive widths (comma-separated) |
| `image_sizes` | String | See default | Image sizes attribute |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.product-card` | Main card container |
| `.product-card__media` | Image zone (1:1 aspect ratio) |
| `.product-card__placeholder-container` | Placeholder wrapper |
| `.product-card__badges` | Badge container (top-right) |
| `.product-card__content` | Content wrapper |
| `.product-card__header` | Header with category/title |
| `.product-card__meta-top` | Category and SKU row |
| `.product-card__category` | Category label |
| `.product-card__sku` | SKU text |
| `.product-card__title` | Product title |
| `.product-card__body` | Body with price |
| `.product-card__price` | Price container |
| `.price-current` | Current price (green) |
| `.price-old` | Compare-at price |
| `.product-card__footer` | Footer with button |
| `.product-card__form` | Add to cart form |
| `.product-card__btn` | Add to cart button |

## Features

- ✅ Unibody design (seamless image area)
- ✅ Hover effects (border, lift, zoom)
- ✅ Sale badge display
- ✅ Wishlist integration
- ✅ Sold out state
- ✅ Responsive images
- ✅ Accessibility compliant

## Related

- [Buttons](./snippets-buttons) — Add to cart button
- [Icons](./snippets-icons) — Cart icon
- [Badges](./snippets-badges) — Sale badges
