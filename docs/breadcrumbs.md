---
id: breadcrumbs
title: Breadcrumbs
sidebar_label: 'Breadcrumbs'
---

# Breadcrumbs

The breadcrumbs component provides hierarchical navigation clues, showing users their current location within the site and providing quick links to parent pages. Breadcrumbs are commonly found at the top of collection, product, and blog pages.

## Visual Examples

<div style={{marginBottom: '24px'}}>
  <nav aria-label="Breadcrumb" className="breadcrumbs" style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px'}}>
    <a href="/" style={{color: '#94A3B8', textDecoration: 'none'}}>Home</a>
    <span style={{color: '#64748B'}}>/</span>
    <a href="/collections/all" style={{color: '#94A3B8', textDecoration: 'none'}}>Collections</a>
    <span style={{color: '#64748B'}}>/</span>
    <span style={{color: '#F8FAFC', fontWeight: '500'}}>Miniatures</span>
  </nav>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <nav aria-label="Breadcrumb" style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px'}}>
    <a href="/" style={{color: '#94A3B8', textDecoration: 'none'}}>Home</a>
    <span style={{color: '#64748B'}}>/</span>
    <a href="/collections/miniatures" style={{color: '#94A3B8', textDecoration: 'none'}}>Miniatures</a>
    <span style={{color: '#64748B'}}>/</span>
    <a href="/products/battlefield-skulls" style={{color: '#94A3B8', textDecoration: 'none'}}>Battlefield Skulls</a>
    <span style={{color: '#64748B'}}>/</span>
    <span style={{color: '#F8FAFC', fontWeight: '500'}}>120mm Base Oval</span>
  </nav>
  
  <nav aria-label="Breadcrumb" style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px'}}>
    <a href="/" style={{color: '#94A3B8', textDecoration: 'none'}}>Home</a>
    <span style={{color: '#64748B'}}>/</span>
    <span style={{color: '#F8FAFC', fontWeight: '500'}}>Featured Collections</span>
  </nav>
</div>

## Component Overview

Breadcrumbs help users understand their location within the site hierarchy. They are used on:

- **Collection pages** — Show category path (Home → Collections → Miniatures)
- **Product pages** — Full navigation path to specific product
- **Blog posts** — Navigate through blog categories
- **Account pages** — Show account section hierarchy

## Usage

```liquid
{% render 'breadcrumb',
  collection: collection,
  product: product,
  blog: blog
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `collection` | Object | — | Current collection object |
| `product` | Object | — | Current product object |
| `blog` | Object | — | Current blog object |
| `hide_current` | Boolean | `true` | Hide current page from breadcrumbs |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.breadcrumbs` | Breadcrumb container |
| `.breadcrumbs__link` | Individual link |
| `.breadcrumbs__separator` | Separator between items |
| `.breadcrumbs__current` | Current page (non-clickable) |

## Accessibility

- Uses `aria-label="Breadcrumb"` for screen readers
- Current page has `aria-current="page"`
- All links have descriptive text
- Keyboard navigation supported
- Proper heading hierarchy maintained

## Related Components

- [Navigation](./navigation) — Main navigation structure
- [Icons](./icons) — Chevron separators
- [Collection](../product-cards) — Collection page context
