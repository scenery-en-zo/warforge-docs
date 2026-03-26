---
id: snippets-badges
title: Badges
sidebar_label: 'Badges'
---

# Badge Snippet

**File:** `snippets/badge.liquid`

The badge component displays small labels for status, discounts, or categories.

## Visual Examples

<div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px', backgroundColor: 'var(--bg-900)', borderRadius: '12px', marginBottom: '24px'}}>
  <span class="badge badge--accent badge--sm" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--accent-500)', color: 'var(--btn-primary-text)', padding: '3px 6px', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px'}}>-20%</span>
  <span class="badge badge--accent badge--sm" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--accent-500)', color: 'var(--btn-primary-text)', padding: '3px 6px', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px'}}>New</span>
  <span class="badge badge--sm" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-700)', color: 'var(--text-primary)', padding: '3px 6px', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Default</span>
  <span class="badge badge--sm" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--success)', color: 'white', padding: '3px 6px', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px'}}>In Stock</span>
  <span class="badge badge--sm" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--error)', color: 'white', padding: '3px 6px', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Sold Out</span>
</div>

## Usage

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
| `variant` | Select | `accent` | Variant: `accent`, `primary`, `success`, `warning`, `error` |
| `size` | Select | `md` | Size: `sm`, `md` |
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

### Success (Green)
Used for positive status (in stock).

```liquid
{% render 'badge', 
  text: 'In Stock',
  variant: 'success',
  size: 'sm'
%}
```

### Error (Red)
Used for negative status (sold out).

```liquid
{% render 'badge', 
  text: 'Sold Out',
  variant: 'error',
  size: 'sm'
%}
```

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

## Related

- [Product Cards](./snippets-product-cards) — Badge placement
- [Icons](./snippets-icons) — Icon badges alternative
