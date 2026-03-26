---
id: snippets-badges
title: Badges
sidebar_label: Badges
---

# Badge Snippet

**File:** `snippets/badge.liquid`

The badge component displays small labels for status, discounts, or categories.

## Visual Examples

<div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px', backgroundColor: 'var(--bg-900)', borderRadius: '12px', marginBottom: '24px'}}>
  <span className="badge badge--accent badge--sm">-20%</span>
  <span className="badge badge--accent badge--sm">New</span>
  <span className="badge badge--primary badge--sm">Default</span>
  <span className="badge badge--success badge--sm">In Stock</span>
  <span className="badge badge--error badge--sm">Sold Out</span>
</div>

## Usage

```liquid
{% render 'badge',
  text: 'New',
  variant: 'accent',
  size: 'sm',
  class: 'my-class'
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | String | Required | Badge text content |
| `variant` | String | `primary` | `primary`, `secondary`, `outline`, `accent`, `success`, `warning`, `error`, `info` |
| `size` | String | `md` | `sm`, `md` |
| `class` | String | - | Additional CSS classes |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.badge` | Main badge container |
| `.badge--primary` | Default dark badge |
| `.badge--secondary` | Secondary muted badge |
| `.badge--outline` | Transparent with border |
| `.badge--accent` | Orange accent badge |
| `.badge--success` | Green success badge |
| `.badge--warning` | Yellow warning badge |
| `.badge--error` | Red error badge |
| `.badge--info` | Blue info badge |
| `.badge--sm` | Small size (11px) |
| `.badge--md` | Medium size (12px) |

## Variants

### Accent
Used for sale badges, promotions, and highlights.

```liquid
{% render 'badge', text: 'Sale', variant: 'accent' %}
```

### Success
Used for "In Stock", "Available" status.

```liquid
{% render 'badge', text: 'In Stock', variant: 'success' %}
```

### Error
Used for "Sold Out", "Out of Stock" status.

```liquid
{% render 'badge', text: 'Sold Out', variant: 'error' %}
```

## Related

- [Product Cards](./snippets-product-cards) - Uses badges for sale indicators
- [Buttons](./snippets-buttons) - Similar variant system
