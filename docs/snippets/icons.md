---
id: snippets-icons
title: Icons
sidebar_label: 'Icons'
---

# Icon Snippet

**File:** `snippets/icon.liquid`

The icon component renders inline SVG icons from the theme's standard library.

## Visual Examples

<div style={{display: 'flex', gap: '24px', alignItems: 'center', padding: '24px', backgroundColor: 'var(--bg-900)', borderRadius: '12px', marginBottom: '24px', flexWrap: 'wrap'}}>
  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span style={{fontSize: '13px', color: 'var(--text-secondary)'}}>cart</span>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <span style={{fontSize: '13px', color: 'var(--text-secondary)'}}>search</span>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
    <span style={{fontSize: '13px', color: 'var(--text-secondary)'}}>user</span>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span style={{fontSize: '13px', color: 'var(--text-secondary)'}}>check</span>
  </div>
</div>

## Usage

```liquid
{% render 'icon', 
  name: 'cart',
  size: 'md',
  variant: 'primary',
  class: '',
  aria_hidden: true,
  aria_label: ''
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | String | Required | Icon name from library |
| `size` | Select | `md` | Size: `sm` (16px), `md` (20px), `lg` (24px), `xl` (32px) |
| `variant` | Select | `primary` | Color: `primary`, `secondary`, `muted`, `accent` |
| `class` | String | — | Additional CSS classes |
| `aria_hidden` | Boolean | `true` | Hide from screen readers |
| `aria_label` | String | — | Accessible label if not hidden |

## Available Icons

### Navigation
`menu`, `close`, `search`, `chevron-down`, `plus`, `minus`

### E-commerce
`cart`, `user`, `user-plus`, `package`

### Communication
`mail`, `phone`, `map-pin`

### Status
`check`, `close`, `star`

### UI Actions
`grid`, `list`, `filter`, `folder`, `palette`

### Shipping
`truck`

### Gaming
`dice`

## CSS Classes

| Class | Description |
|-------|-------------|
| `.icon-wrapper` | Base wrapper class |
| `.icon-wrapper--sm` | Small size (16px) |
| `.icon-wrapper--md` | Medium size (20px) |
| `.icon-wrapper--lg` | Large size (24px) |
| `.icon-wrapper--xl` | Extra large size (32px) |
| `.icon-wrapper--primary` | Primary color |
| `.icon-wrapper--accent` | Accent color |
| `.icon` | SVG icon element |

## Related

- [Buttons](./snippets-buttons) — Button icons
- [Badges](./snippets-badges) — Badge icons
