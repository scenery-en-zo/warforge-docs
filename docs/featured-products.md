---
id: featured-products
title: Featured Products Section
sidebar_label: 'Featured Products'
---

# Featured Products Section

The featured products section displays a curated collection of products in a carousel or grid format, often used to showcase bestsellers, new arrivals, or themed collections.

## Visual Examples

<div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px'}}>
    <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px', textAlign: 'center'}}>
      <div style={{aspectRatio: '1', backgroundColor: '#3B4A61', borderRadius: '4px', marginBottom: '12px'}}></div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', margin: '0 0 4px 0'}}>Battlefield Skulls</h5>
      <p style={{color: '#94A3B8', fontSize: '12px', margin: '0 0 8px 0'}}>60mm Base Oval</p>
      <span style={{color: '#F8FAFC', fontSize: '14px'}}>€24.99</span>
    </div>
    
    <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px', textAlign: 'center'}}>
      <div style={{aspectRatio: '1', backgroundColor: '#3B4A61', borderRadius: '4px', marginBottom: '12px'}}></div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', margin: '0 0 4px 0'}}>Mountain Terrain</h5>
      <p style={{color: '#94A3B8', fontSize: '12px', margin: '0 0 8px 0'}}>100mm Base Rectangular</p>
      <span style={{color: '#F8FAFC', fontSize: '14px'}}>€39.99</span>
    </div>
    
    <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px', textAlign: 'center'}}>
      <div style={{aspectRatio: '1', backgroundColor: '#3B4A61', borderRadius: '4px', marginBottom: '12px'}}></div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', margin: '0 0 4px 0'}}>Forest Terrain</h5>
      <p style={{color: '#94A3B8', fontSize: '12px', margin: '0 0 8px 0'}}>60mm Base Oval</p>
      <span style={{color: '#F8FAFC', fontSize: '14px'}}>€29.99</span>
    </div>
    
    <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px', textAlign: 'center'}}>
      <div style={{aspectRatio: '1', backgroundColor: '#3B4A61', borderRadius: '4px', marginBottom: '12px'}}></div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', margin: '0 0 4px 0'}}>Paint Set</h5>
      <p style={{color: '#94A3B8', fontSize: '12px', margin: '0 0 8px 0'}}>12 Colors</p>
      <span style={{color: '#F8FAFC', fontSize: '14px'}}>€34.99</span>
    </div>
  </div>
</div>

## Component Overview

The featured products section is used for:

- **Homepage** — Showcase bestsellers or new arrivals
- **Collection pages** — Highlight featured items
- **Promotional sections** — Sale items or themed collections
- **Related products** — Cross-sell on product pages

## Usage

```liquid
{% section 'featured-products',
  title: 'Featured Products',
  products: collections.all.products,
  limit: 8,
  columns: 4
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | String | `Featured Products` | Section heading |
| `products` | Array | — | Product collection to display |
| `limit` | Number | `8` | Maximum products to show |
| `columns` | Number | `4` | Number of columns on desktop |
| `autoplay` | Boolean | `false` | Enable carousel autoplay |
| `show_badges` | Boolean | `true` | Show sale/new badges |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.featured-products` | Section container |
| `.featured-products__title` | Section heading |
| `.featured-products__grid` | Product grid |
| `.featured-products__carousel` | Carousel wrapper |

## Related Components

- [Product Cards](./product-cards) — Individual product display
- [Sections](./sections) — Section configuration
