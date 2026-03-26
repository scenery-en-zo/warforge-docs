---
id: snippets-badges
title: Badges
sidebar_label: 'Badges'
---

# Badge Component

The badge component displays small labels for status, discounts, or categories. Commonly used for sale percentages, new arrivals, and stock status.

## Visual Examples

<div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px', backgroundColor: 'var(--bg-900)', borderRadius: '12px', marginBottom: '24px'}}>
  <span class="badge badge--accent badge--sm">-20%</span>
  <span class="badge badge--accent badge--sm">New</span>
  <span class="badge badge--accent badge--sm">Sale</span>
  <span class="badge badge--sm" style={{backgroundColor: 'var(--bg-700)', color: 'var(--text-primary)'}}>Default</span>
  <span class="badge badge--sm" style={{backgroundColor: 'var(--success)', color: 'white'}}>In Stock</span>
  <span class="badge badge--sm" style={{backgroundColor: 'var(--error)', color: 'white'}}>Sold Out</span>
</div>

## Component Usage

```liquid
{% render 'badge',
  text: '-20%',
  variant: 'accent',
  size: 'sm',
  class: ''
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | String | Required | Badge text content |
| `variant` | Select | `accent` | Badge variant: `accent`, `primary`, `success`, `warning`, `error` |
| `size` | Select | `md` | Badge size: `sm`, `md` |
| `class` | String | — | Additional CSS classes |

## Variants

### Accent (Orange)

Used for sale badges and highlights.

```liquid
{% render 'badge', 
  text: '-20%',
  variant: 'accent',
  size: 'sm'
%}
```

<div style={{display: 'flex', gap: '12px', marginBottom: '24px'}}>
  <span class="badge badge--accent badge--sm">-20%</span>
  <span class="badge badge--accent badge--sm">New</span>
</div>

### Primary (Dark)

Used for general labels.

```liquid
{% render 'badge', 
  text: 'Label',
  variant: 'primary',
  size: 'sm'
%}
```

<div style={{display: 'flex', gap: '12px', marginBottom: '24px'}}>
  <span class="badge badge--sm" style={{backgroundColor: 'var(--bg-700)', color: 'var(--text-primary)'}}>Default</span>
</div>

### Success (Green)

Used for positive status (in stock, confirmed).

```liquid
{% render 'badge', 
  text: 'In Stock',
  variant: 'success',
  size: 'sm'
%}
```

<div style={{display: 'flex', gap: '12px', marginBottom: '24px'}}>
  <span class="badge badge--sm" style={{backgroundColor: 'var(--success)', color: 'white'}}>In Stock</span>
  <span class="badge badge--sm" style={{backgroundColor: 'var(--success)', color: 'white'}}>New Arrival</span>
</div>

### Warning (Yellow)

Used for cautionary messages.

```liquid
{% render 'badge', 
  text: 'Low Stock',
  variant: 'warning',
  size: 'sm'
%}
```

<div style={{display: 'flex', gap: '12px', marginBottom: '24px'}}>
  <span class="badge badge--sm" style={{backgroundColor: 'var(--warning)', color: '#000'}}>Low Stock</span>
</div>

### Error (Red)

Used for negative status (sold out, error).

```liquid
{% render 'badge', 
  text: 'Sold Out',
  variant: 'error',
  size: 'sm'
%}
```

<div style={{display: 'flex', gap: '12px', marginBottom: '24px'}}>
  <span class="badge badge--sm" style={{backgroundColor: 'var(--error)', color: 'white'}}>Sold Out</span>
  <span class="badge badge--sm" style={{backgroundColor: 'var(--error)', color: 'white'}}>Error</span>
</div>

## Sizes

| Size | Padding | Font Size | Use Case |
|------|---------|-----------|----------|
| `sm` | 3px 6px | 11px | Product cards, compact displays |
| `md` | 4px 8px | 12px | Standard badges |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.badge` | Base badge class |
| `.badge--sm` | Small size |
| `.badge--md` | Medium size |
| `.badge--accent` | Orange accent variant |
| `.badge--primary` | Dark primary variant |
| `.badge--success` | Green success variant |
| `.badge--warning` | Yellow warning variant |
| `.badge--error` | Red error variant |

## Common Use Cases

### Product Sale Badge

```liquid
{% if product.compare_at_price > product.price %}
  {% assign discount = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round %}
  {% render 'badge', 
    text: discount | prepend: '-', append: '%',
    variant: 'accent',
    size: 'sm'
  %}
{% endif %}
```

### New Product Badge

```liquid
{% if product.created_at > 'now' | date: '%s' | minus: 604800 %}
  {% render 'badge', 
    text: 'New',
    variant: 'accent',
    size: 'sm'
  %}
{% endif %}
```

### Stock Status Badge

```liquid
{% if product.available %}
  {% render 'badge', 
    text: 'In Stock',
    variant: 'success',
    size: 'sm'
  %}
{% else %}
  {% render 'badge', 
    text: 'Sold Out',
    variant: 'error',
    size: 'sm'
  %}
{% endif %}
```

## Color Reference

```css
--accent-500: #ff8b00  /* Sale badges */
--success: #2ecc71     /* In stock */
--warning: #f1c40f     /* Low stock */
--error: #e74c3c       /* Sold out */
--bg-700: #3e4a5d      /* Default */
```

## Accessibility

- Badges use sufficient color contrast
- Text is uppercase for readability
- Font size is legible (11px minimum)
- Semantic meaning conveyed through color and text

## Related Components

- [Product Cards](../product-cards) — Badge placement on products
- [Icons](./icons) — Icon badges alternative
- [Buttons](./buttons) — Action badges
