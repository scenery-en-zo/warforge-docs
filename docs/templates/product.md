---
id: templates-product
title: Product Template
sidebar_label: 'Product'
---

# Product Template

**File:** `templates/product.json`

The product template defines the layout for individual product pages using JSON template configuration.

## Structure

```json
{
  "sections": {
    "main": {
      "type": "product-main",
      "settings": {}
    },
    "details": {
      "type": "product-details",
      "settings": {}
    },
    "related": {
      "type": "related-products",
      "settings": {}
    },
    "trust": {
      "type": "trust-block",
      "settings": {}
    }
  },
  "order": ["main", "details", "related", "trust"]
}
```

## Sections

| Section ID | Type | Description |
|------------|------|-------------|
| `main` | `product-main` | Main product area (images, title, price, form) |
| `details` | `product-details` | Product description, specifications |
| `related` | `related-products` | Related products carousel |
| `trust` | `trust-block` | Trust badges and guarantees |

## Features

- ✅ JSON template configuration
- ✅ Modular section architecture
- ✅ Customizable section order
- ✅ No hardcoded section settings (theme editor可控)

## Related Sections

### Product Main
- Product images/gallery
- Product title and vendor
- Price and compare-at price
- Variant selector
- Quantity selector
- Add to cart button

### Product Details
- Rich text description
- Specifications table
- Shipping information
- Reviews integration

### Related Products
- Automatically selected by type/vendor
- Configurable product count
- Carousel or grid layout

### Trust Block
- Payment icons
- Shipping info
- Guarantee badges
- Return policy

## CSS Classes

Key classes used in product templates:

| Class | Description |
|-------|-------------|
| `.product` | Main product container |
| `.product__media` | Image gallery |
| `.product__info` | Product details |
| `.product__title` | Product title |
| `.product__price` | Price display |
| `.product__form` | Add to cart form |
| `.product__variants` | Variant selectors |

## Related

- [Product Card](./snippets-product-cards) - Product grid cards
- [Product Main Section](./sections-product-main) - Main product section
- [Product Details Section](./sections-product-details) - Details section
