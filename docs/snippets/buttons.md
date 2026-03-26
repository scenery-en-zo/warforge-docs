---
id: snippets-buttons
title: Buttons
sidebar_label: 'Buttons'
---

# Button Snippet

**File:** `snippets/button.liquid`

The button component is used for all call-to-action elements throughout the theme.

## Visual Examples

<div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '24px', backgroundColor: 'var(--bg-900)', borderRadius: '12px', marginBottom: '24px'}}>
  <button class="btn btn--primary btn--md" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px', backgroundColor: 'var(--accent-500)', color: 'var(--btn-primary-text)', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
    Add to Cart
  </button>
  
  <button class="btn btn--primary btn--md" disabled style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px', backgroundColor: 'var(--bg-700)', color: 'var(--text-muted)', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: '700', cursor: 'not-allowed', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: '0.6'}}>
    Sold Out
  </button>
</div>

## Usage

```liquid
{% render 'button',
  text: 'Add to Cart',
  type: 'submit',
  variant: 'primary',
  size: 'md',
  full_width: false,
  leading_icon: 'cart',
  disabled: false,
  loading: false
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | String | Required | Button label text |
| `type` | String | `button` | Button type: `button`, `submit`, `reset` |
| `variant` | Select | `primary` | Variant: `primary`, `secondary`, `ghost` |
| `size` | Select | `md` | Size: `sm`, `md`, `lg`, `xl` |
| `full_width` | Boolean | `false` | Make button full width |
| `leading_icon` | String | — | Icon name before text |
| `trailing_icon` | String | — | Icon name after text |
| `url` | String | — | If provided, renders as `<a>` tag |
| `disabled` | Boolean | `false` | Disable the button |
| `loading` | Boolean | `false` | Show loading state |
| `class` | String | — | Additional CSS classes |

## Variants

### Primary

```liquid
{% render 'button', 
  text: 'Add to Cart',
  variant: 'primary'
%}
```

### Secondary

```liquid
{% render 'button', 
  text: 'Learn More',
  variant: 'secondary'
%}
```

### Ghost

```liquid
{% render 'button', 
  text: 'Edit',
  variant: 'ghost'
%}
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.btn` | Base button class |
| `.btn--primary` | Primary variant |
| `.btn--secondary` | Secondary variant |
| `.btn--ghost` | Ghost variant |
| `.btn--sm` | Small size |
| `.btn--md` | Medium size |
| `.btn--lg` | Large size |
| `.btn--full` | Full width |
| `.is-loading` | Loading state |

## Related

- [Product Cards](./snippets-product-cards) — Add to cart buttons
- [Icons](./snippets-icons) — Button icons
