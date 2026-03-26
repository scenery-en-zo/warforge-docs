---
id: snippets-buttons
title: Buttons
sidebar_label: Buttons
---

# Button Snippet

**File:** `snippets/button.liquid`

The button component is used for all call-to-action elements throughout the theme.

## Visual Examples

<div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '24px', backgroundColor: 'var(--bg-900)', borderRadius: '12px', marginBottom: '24px'}}>
  <button className="btn btn--primary btn--md">Add to Cart</button>
  <button className="btn btn--secondary btn--md">View Details</button>
  <button className="btn btn--ghost btn--md">Learn More</button>
  <button className="btn btn--primary btn--md" disabled>Sold Out</button>
</div>

## Usage

```liquid
{% render 'button',
  text: 'Add to Cart',
  type: 'submit',
  variant: 'primary',
  size: 'md'
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | String | Required | Button text |
| `type` | String | `button` | `button`, `submit` |
| `variant` | String | `primary` | `primary`, `secondary`, `ghost`, `destructive` |
| `size` | String | `md` | `sm`, `md`, `lg` |
| `url` | String | - | If provided, renders as `<a>` tag |
| `disabled` | Boolean | `false` | Disabled state |
| `loading` | Boolean | `false` | Loading spinner state |
| `full_width` | Boolean | `false` | Full width button |
| `leading_icon` | String | - | Icon name before text |
| `trailing_icon` | String | - | Icon name after text |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.btn` | Base button class |
| `.btn--primary` | Orange accent button |
| `.btn--secondary` | Dark gray button |
| `.btn--ghost` | Transparent text button |
| `.btn--destructive` | Red delete button |
| `.btn--sm` | Small (36px height) |
| `.btn--md` | Medium (44px height) |
| `.btn--lg` | Large (52px height) |
| `.btn--full` | Full width |
| `.btn.is-loading` | Loading state with spinner |

## Variants

### Primary
Main call-to-action buttons (Add to Cart, Checkout).

### Secondary
Secondary actions (View Details, Back).

### Ghost
Minimal text buttons for less prominent actions.

### Destructive
Danger actions (Delete, Remove).

## Related

- [Badges](./snippets-badges) - Status indicators
- [Icons](./snippets-icons) - Button icons
