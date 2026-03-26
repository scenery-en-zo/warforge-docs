---
id: badges
title: Badges
sidebar_label: 'Badges'
---

# Badges

The badge component is a small inline label used to display status, categories, promotions, and other contextual information. It's commonly placed on product cards, collection tiles, and filter chips.

## Visual Examples

<div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px'}}>
  <!-- Product Category Badge -->
  <span class="badge badge--miniature" style={{backgroundColor: '#F59E0B', color: '#0F172A', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    Miniature
  </span>
  
  <!-- New Arrival Badge -->
  <span class="badge badge--new" style={{backgroundColor: '#22C55E', color: '#0F172A', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    New Arrival
  </span>
  
  <!-- Sale Badge -->
  <span class="badge badge--sale" style={{backgroundColor: '#EF4444', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    -30% SALE
  </span>
  
  <!-- Pre-order Badge -->
  <span class="badge badge--preorder" style={{backgroundColor: '#3B82F6', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    Pre-order
  </span>
  
  <!-- Out of Stock Badge -->
  <span class="badge badge--out-of-stock" style={{backgroundColor: '#EF4444', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    Out of Stock
  </span>
  
  <!-- In Stock Badge -->
  <span class="badge badge--in-stock" style={{backgroundColor: '#22C55E', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    In Stock
  </span>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
  <!-- Outline Badge -->
  <span class="badge badge--outline" style={{border: '1px solid #F97316', color: '#F97316', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    Featured
  </span>
  
  <!-- Accent Badge -->
  <span class="badge badge--accent" style={{backgroundColor: '#F97316', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    Hot Deal
  </span>
  
  <!-- Secondary Badge -->
  <span class="badge badge--secondary" style={{backgroundColor: '#1A2033', color: '#94A3B8', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600'}}>
    Best Seller
  </span>
</div>

## Component Overview

Badges provide quick visual feedback about product status, category, or promotional information. They're used extensively on:

- **Product cards** — Category badges (miniature, terrain, paints)
- **Collection tiles** — Featured/curated collection indicators
- **Filter chips** — Active filter selections
- **Product details** — Stock status, shipping info

## Variants

### Status Badges

| Variant | Use Case | Color |
|---------|----------|-------|
| `miniature` | Product category indicator | Orange (#F59E0B) |
| `new` | Recently added products | Green (#22C55E) |
| `sale` | Discounted items | Red (#EF4444) |
| `preorder` | Future availability | Blue (#3B82F6) |
| `out-of-stock` | No inventory available | Red (#EF4444) |
| `in-stock` | Available for purchase | Green (#22C55E) |

### Style Badges

| Variant | Use Case | Style |
|---------|----------|-------|
| `primary` | Main CTAs or important info | Orange background |
| `accent` | Promotional highlights | Orange background |
| `secondary` | Neutral/low priority | Dark background |
| `outline` | Border-only style | Transparent with border |

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | String | Required | Badge label/content |
| `variant` | Select | `default` | Badge style variant |
| `size` | Select | `md` | Size: `sm`, `md` |
| `href` | URL | — | Optional link for badge |
| `target` | String | `_self` | Link target for href badges |

## Usage Examples

### Basic Badge

```liquid
```liquid
```
```

### New Arrival Badge

```
<!-- Liquid example -->'badge', text: 'New', variant: 'new' %&#125;```
```
### Sale Badge

```
```<!-- Liquid example -->'badge', 
  text: '-30%', 
  variant: 'sale'
%&#125;```
```

### Clickable Badge (Link)

``````liquid
<!-- Liquid example -->'badge', 
  text: 'Featured Collection', 
  href: '/collections/featured',
  variant: 'primary'
%&#125;```
```
### Small Size Badge

```liquid
```liquid
```
  text: 'Hot', 
  variant: 'accent',
  size: 'sm'
%&#125;```
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.badge` | Base badge with padding and border radius |
| `.badge--miniature` | Orange category badge |
| `.badge--new` | Green new arrival indicator |
| `.badge--sale` | Red sale/discount badge |
| `.badge--preorder` | Blue preorder indicator |
| `.badge--out-of-stock` | Red out of stock warning |
| `.badge--in-stock` | Green in stock indicator |
| `.badge--outline` | Border-only style |
| `.badge--accent` | Orange accent badge |
| `.badge--secondary` | Dark secondary badge |

## Accessibility

- All badges have sufficient contrast ratios (WCAG AA compliant)
- Screen readers announce badge text correctly
- Clickable badges use proper link semantics
- Focus visible on interactive badges

## Related Components

- [Buttons](./buttons) — CTAs often paired with status badges
- [Product Cards](./product-cards) — Badges commonly placed on product cards
- [Filters](./filters) — Active filter chips use badge styling

