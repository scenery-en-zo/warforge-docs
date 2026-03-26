---
id: buttons
title: Buttons
sidebar_label: 'Buttons'
---

# Buttons

The button component is the primary call-to-action element in the Warforge theme. It's used throughout the site for CTAs, form submissions, and navigation actions.

## Visual Examples

<div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px'}}>
  <!-- Primary Button -->
  <button class="button button--primary" style={{backgroundColor: '#F97316', color: 'white', padding: '14px 28px', fontWeight: '600', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px'}}>
    Add to Cart
  </button>
  
  <!-- Secondary Button -->
  <button class="button button--secondary" style={{border: '1px solid #F97316', backgroundColor: 'transparent', color: '#F8FAFC', padding: '14px 28px', fontWeight: '600', borderRadius: '10px', cursor: 'pointer', fontSize: '16px'}}>
    Learn More
  </button>
  
  <!-- Ghost Button -->
  <button class="button button--ghost" style={{backgroundColor: 'transparent', color: '#94A3B8', padding: '14px 28px', fontWeight: '600', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px'}}>
    Edit
  </button>
  
  <!-- Small Button -->
  <button class="button button--primary" style={{backgroundColor: '#F97316', color: 'white', padding: '10px 20px', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px'}}>
    Quick View
  </button>
  
  <!-- Large Button -->
  <button class="button button--primary" style={{backgroundColor: '#F97316', color: 'white', padding: '18px 32px', fontWeight: '600', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '18px'}}>
    Shop Now
  </button>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
  <!-- Icon Button -->
  <button class="button button--primary" style={{backgroundColor: '#F97316', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    <span style={{marginLeft: '8px'}}>Add</span>
  </button>
  
  <!-- Disabled Button -->
  <button class="button button--primary" style={{backgroundColor: '#334155', color: '#64748B', padding: '14px 28px', fontWeight: '600', border: 'none', borderRadius: '10px', cursor: 'not-allowed', fontSize: '16px'}} disabled>
    Sold Out
  </button>
  
  <!-- Loading Button -->
  <button class="button button--primary" style={{backgroundColor: '#F97316', color: 'white', padding: '14px 28px', fontWeight: '600', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <svg class="spinner" style={{width: '18px', height: '18px', marginRight: '8px'}} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" stroke-width="3" fill="none"/><path d="M12 2a10 10 0 0110 10" stroke="white" stroke-width="3" fill="none"/></svg>
    Processing...
  </button>
</div>

## Component Overview

The button component serves multiple purposes:

- **Primary buttons** — Orange background for main CTAs (add to cart, buy now)
- **Secondary buttons** — Outline style for less prominent actions
- **Ghost buttons** — Transparent with hover effects for subtle interactions
- **Icon buttons** — Small circular buttons with icons (cart, search, menu)

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | String | Required | Button text content |
| `style` | Select | `primary` | Button variant: `primary`, `secondary`, `ghost`, `outline` |
| `type` | Select | `button` | HTML type: `button`, `submit`, `reset` |
| `href` | URL | — | Makes button an anchor link (overrides type) |
| `size` | Select | `md` | Size: `sm`, `md`, `lg` |
| `full_width` | Boolean | `false` | 100% width for form buttons |
| `disabled` | Boolean | `false` | Disables the button |
| `loading` | Boolean | `false` | Shows spinner animation |
| `icon` | String | — | Icon name to prepend |

## Usage Examples

### Basic Button

```liquid
```liquid
```
```

### Button as Link

```
<!-- Liquid example -->'button', 
  label: 'Learn More', 
  href: '/collections/all',
  style: 'secondary'
%&#125;```
```
### Full Width Form Button

```
```<!-- Liquid example -->'button', 
  label: 'Continue to Checkout', 
  type: 'submit',
  full_width: true,
  size: 'lg'
%&#125;```
```

### Disabled Button

``````liquid
<!-- Liquid example -->'button', 
  label: 'Sold Out', 
  disabled: true
%&#125;```
```
### Loading State

```liquid
```liquid
```
  label: 'Processing...', 
  loading: true,
  type: 'submit'
%&#125;```
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.btn` | Base button styles with padding and border radius |
| `.btn--primary` | Orange background (`#F97316`) with white text |
| `.btn--secondary` | Transparent with orange border, hover: filled |
| `.btn--ghost` | Fully transparent, hover: orange text |
| `.btn--outline` | Alternative outline style |
| `.btn--sm` | Small size (36px height) |
| `.btn--md` | Medium size (44px height) |
| `.btn--lg` | Large size (52px height) |
| `.btn--full` | 100% width button |

## Accessibility

- All buttons are keyboard accessible (Tab + Enter/Space)
- Disabled buttons have `aria-disabled="true"`
- Loading state uses aria-live region for screen readers
- Focus visible ring on all interactive states

## Related Components

- [Badges](./badges) — Status indicators next to buttons
- [Icons](./icons) — Icon library for button actions
- [Inputs](./inputs) — Form inputs with submit buttons

