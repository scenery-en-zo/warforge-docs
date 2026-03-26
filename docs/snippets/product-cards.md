---
id: snippets-product-cards
title: Product Cards
sidebar_label: Product Cards
---

# Product Card Snippet

**File:** `snippets/product-card.liquid`

The product card is the primary component for displaying products in grids, carousels, and collection pages.

## Visual Example

<div className="product-card-demo">
  <div className="product-card" data-product-card>
    <div className="product-card__media">
      <div className="product-card__placeholder-container">
        <svg className="product-card__placeholder" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
      </div>
      <div className="product-card__badges">
        <span className="badge badge--accent badge--sm">-20%</span>
      </div>
    </div>
    
    <div className="product-card__content">
      <div className="product-card__header">
        <div className="product-card__meta-top">
          <span className="product-card__category">Miniatures</span>
          <span className="product-card__sku">SKU: WFG-001</span>
        </div>
        <h3 className="product-card__title">Battlefield Resin Skulls</h3>
      </div>
      
      <div className="product-card__body">
        <div className="product-card__price">
          <span className="price-current">€24,95</span>
          <span className="price-old">€31,95</span>
        </div>
      </div>
      
      <div className="product-card__footer">
        <div className="product-card__form">
          <button type="button" className="btn btn--primary product-card__btn">
            <span className="btn__content">
              <span className="btn__icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </span>
              <span className="btn__text">Add to Cart</span>
            </span>
          </button>
        </div>
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
