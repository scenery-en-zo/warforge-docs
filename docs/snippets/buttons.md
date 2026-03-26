---
id: snippets-buttons
title: Buttons
sidebar_label: 'Buttons'
---

# Button Component

The button component is used for all call-to-action elements throughout the theme. It supports multiple variants, sizes, and states.

## Visual Examples

<div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px'}}>
  <button className="btn btn--primary btn--md" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
    Add to Cart
  </button>
  
  <button className="btn btn--secondary btn--md" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px', backgroundColor: 'transparent', color: '#F8FAFC', border: '1px solid #3B4A61', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
    Learn More
  </button>
  
  <button className="btn btn--ghost btn--md" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px', backgroundColor: 'transparent', color: '#94A3B8', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
    Edit
  </button>
</div>

<div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px'}}>
  <button className="btn btn--primary btn--sm" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '8px 16px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '13px'}}>
    Small
  </button>
  
  <button className="btn btn--primary btn--md" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
    Medium
  </button>
  
  <button className="btn btn--primary btn--lg" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 32px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '16px'}}>
    Large
  </button>
</div>

<div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
  <button className="btn btn--primary btn--md is-loading" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'not-allowed', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: '0.6'}}>
    Loading...
  </button>
  
  <button className="btn btn--primary btn--md" disabled style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'not-allowed', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: '0.6'}}>
    Disabled
  </button>
</div>

## Component Usage

```liquid
{% render 'button',
  text: 'Add to Cart',
  type: 'submit',
  variant: 'primary',
  size: 'md',
  full_width: false,
  leading_icon: 'cart',
  trailing_icon: '',
  url: '',
  disabled: false,
  loading: false,
  aria_label: ''
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | String | Required | Button label text |
| `type` | String | `button` | Button type: `button`, `submit`, `reset` |
| `variant` | Select | `primary` | Button variant: `primary`, `secondary`, `ghost`, `outline`, `success`, `warning`, `error` |
| `size` | Select | `md` | Button size: `sm`, `md`, `lg`, `xl` |
| `full_width` | Boolean | `false` | Make button full width |
| `leading_icon` | String | — | Icon name before text |
| `trailing_icon` | String | — | Icon name after text |
| `url` | String | — | If provided, renders as `<a>` tag |
| `disabled` | Boolean | `false` | Disable the button |
| `loading` | Boolean | `false` | Show loading state |
| `aria_label` | String | — | Accessibility label |
| `class` | String | — | Additional CSS classes |
| `name` | String | — | Button name attribute |

## Variants

### Primary

Used for main call-to-action buttons.

```liquid
{% render 'button', 
  text: 'Add to Cart',
  variant: 'primary'
%}
```

### Secondary

Used for secondary actions.

```liquid
{% render 'button', 
  text: 'Learn More',
  variant: 'secondary'
%}
```

### Ghost

Used for subtle actions like edit or cancel.

```liquid
{% render 'button', 
  text: 'Edit',
  variant: 'ghost'
%}
```

### Success

Used for positive confirmations.

```liquid
{% render 'button', 
  text: 'Confirm',
  variant: 'success'
%}
```

### Warning

Used for cautionary actions.

```liquid
{% render 'button', 
  text: 'Review',
  variant: 'warning'
%}
```

### Error

Used for destructive actions.

```liquid
{% render 'button', 
  text: 'Delete',
  variant: 'error'
%}
```

## Sizes

| Size | Padding | Font Size | Use Case |
|------|---------|-----------|----------|
| `sm` | 8px 16px | 13px | Compact actions, inline buttons |
| `md` | 12px 24px | 14px | Standard buttons (default) |
| `lg` | 16px 32px | 16px | Prominent CTAs |
| `xl` | 20px 40px | 18px | Hero sections, featured actions |

## States

### Default

Standard button appearance.

### Hover

Buttons have hover states with subtle color/border changes.

### Focus

Visible focus ring for keyboard navigation:

```css
.btn:focus-visible {
  box-shadow: 0 0 0 2px var(--bg-900), 0 0 0 4px var(--accent-500);
}
```

### Disabled

Reduced opacity and non-interactive.

```liquid
{% render 'button', 
  text: 'Submit',
  disabled: true
%}
```

### Loading

Shows spinner and disables interactions.

```liquid
{% render 'button', 
  text: 'Adding...',
  loading: true
%}
```

## With Icons

### Leading Icon

```liquid
{% render 'button', 
  text: 'Add to Cart',
  leading_icon: 'cart'
%}
```

### Trailing Icon

```liquid
{% render 'button', 
  text: 'Learn More',
  trailing_icon: 'arrow-right'
%}
```

### Icon Only

```liquid
{% render 'button', 
  text: '',
  leading_icon: 'search',
  aria_label: 'Search'
%}
```

## As Link

When `url` is provided, renders as `<a>` tag:

```liquid
{% render 'button', 
  text: 'View Collection',
  url: '/collections/all',
  variant: 'secondary'
%}
```

## Full Width

```liquid
{% render 'button', 
  text: 'Checkout',
  full_width: true
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
| `.btn--xl` | Extra large size |
| `.btn--full` | Full width |
| `.is-loading` | Loading state |

## Accessibility

- All buttons have proper focus states
- Loading buttons have `aria-disabled="true"`
- Icon-only buttons require `aria_label`
- Keyboard navigation fully supported
- Proper contrast ratios maintained

## Related Components

- [Icons](./icons) — Button icons
- [Inputs](./inputs) — Form inputs
- [Product Cards](../product-cards) — Add to cart buttons
