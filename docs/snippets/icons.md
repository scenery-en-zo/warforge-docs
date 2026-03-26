---
id: snippets-icons
title: Icons
sidebar_label: 'Icons'
---

# Icon Component

The icon component renders inline SVG icons from the theme's standard library. Icons are used throughout the theme for navigation, actions, and visual indicators.

## Visual Examples

<div style={{display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap'}}>
  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span style={{fontSize: '13px', color: '#94A3B8'}}>cart</span>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <span style={{fontSize: '13px', color: '#94A3B8'}}>search</span>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
    <span style={{fontSize: '13px', color: '#94A3B8'}}>user</span>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span style={{fontSize: '13px', color: '#94A3B8'}}>check</span>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
    <span style={{fontSize: '13px', color: '#94A3B8'}}>close</span>
  </div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '24px'}}>
  <div style={{textAlign: 'center', padding: '16px', backgroundColor: '#1E293B', borderRadius: '8px'}}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '8px'}}>
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
    <span style={{fontSize: '11px', color: '#64748B'}}>truck</span>
  </div>
  
  <div style={{textAlign: 'center', padding: '16px', backgroundColor: '#1E293B', borderRadius: '8px'}}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '8px'}}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
    <span style={{fontSize: '11px', color: '#64748B'}}>map-pin</span>
  </div>
  
  <div style={{textAlign: 'center', padding: '16px', backgroundColor: '#1E293B', borderRadius: '8px'}}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '8px'}}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
    <span style={{fontSize: '11px', color: '#64748B'}}>mail</span>
  </div>
  
  <div style={{textAlign: 'center', padding: '16px', backgroundColor: '#1E293B', borderRadius: '8px'}}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '8px'}}>
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
    <span style={{fontSize: '11px', color: '#64748B'}}>plus</span>
  </div>
  
  <div style={{textAlign: 'center', padding: '16px', backgroundColor: '#1E293B', borderRadius: '8px'}}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '8px'}}>
      <path d="M6 9l6 6 6-6"></path>
    </svg>
    <span style={{fontSize: '11px', color: '#64748B'}}>chevron-down</span>
  </div>
</div>

## Component Usage

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
| `size` | Select | `md` | Icon size: `sm` (16px), `md` (20px), `lg` (24px), `xl` (32px) |
| `variant` | Select | `primary` | Color variant: `primary`, `secondary`, `muted`, `accent`, `success`, `warning`, `error`, `info` |
| `class` | String | — | Additional CSS classes |
| `aria_hidden` | Boolean | `true` | Hide from screen readers |
| `aria_label` | String | — | Accessible label if not hidden |

## Available Icons

### Navigation

| Icon Name | Description |
|-----------|-------------|
| `menu` | Hamburger menu |
| `close` | Close/X icon |
| `search` | Search magnifying glass |
| `chevron-down` | Down chevron |
| `plus` | Plus/add |
| `minus` | Minus/remove |

### E-commerce

| Icon Name | Description |
|-----------|-------------|
| `cart` | Shopping cart |
| `user` | User/account |
| `user-plus` | User with plus |
| `package` | Package/box |

### Communication

| Icon Name | Description |
|-----------|-------------|
| `mail` | Email envelope |
| `phone` | Phone handset |
| `map-pin` | Location pin |

### Status

| Icon Name | Description |
|-----------|-------------|
| `check` | Checkmark |
| `close` | Close/error |
| `star` | Star/rating |

### UI Actions

| Icon Name | Description |
|-----------|-------------|
| `grid` | Grid view |
| `list` | List view |
| `filter` | Filter funnel |
| `folder` | Folder |
| `palette` | Color palette |

### Shipping

| Icon Name | Description |
|-----------|-------------|
| `truck` | Delivery truck |

### Gaming

| Icon Name | Description |
|-----------|-------------|
| `dice` | D20 die |

## Size Variants

| Size | Dimensions | Use Case |
|------|-----------|----------|
| `sm` | 16×16px | Small indicators, inline text |
| `md` | 20×20px | Standard buttons, inputs (default) |
| `lg` | 24×24px | Large buttons, prominent features |
| `xl` | 32×32px | Hero sections, featured items |

## Color Variants

| Variant | Color | Use Case |
|---------|-------|----------|
| `primary` | #F97316 (Orange) | Main CTAs, important actions |
| `secondary` | #94A3B8 (Gray) | Neutral actions |
| `muted` | #64748B (Muted) | Decorative icons |
| `accent` | #F59E0B (Gold) | Highlights, special features |
| `success` | #22C55E (Green) | Success states |
| `warning` | #F59E0B (Orange) | Warnings |
| `error` | #EF4444 (Red) | Errors |
| `info` | #3B82F6 (Blue) | Informational |

## Usage Examples

### Basic Icon

```liquid
{% render 'icon', name: 'search', size: 'md' %}
```

### Icon with Custom Variant

```liquid
{% render 'icon', 
  name: 'cart',
  size: 'lg',
  variant: 'accent'
%}
```

### Accessible Icon

```liquid
{% render 'icon', 
  name: 'search',
  size: 'md',
  aria_hidden: false,
  aria_label: 'Search products'
%}
```

### Icon in Button

```liquid
{% render 'button',
  text: 'Add to Cart',
  leading_icon: 'cart'
%}
```

### Icon with Additional Classes

```liquid
{% render 'icon',
  name: 'star',
  variant: 'accent',
  class: 'rating-icon'
%}
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.icon-wrapper` | Base wrapper class |
| `.icon-wrapper--sm` | Small size |
| `.icon-wrapper--md` | Medium size |
| `.icon-wrapper--lg` | Large size |
| `.icon-wrapper--xl` | Extra large size |
| `.icon-wrapper--primary` | Primary color |
| `.icon-wrapper--accent` | Accent color |
| `.icon` | SVG icon element |

## Accessibility

- Decorative icons have `aria-hidden="true"` by default
- Meaningful icons include accessible labels
- Proper focus states on interactive icons
- Screen readers announce labeled icons correctly
- Sufficient color contrast maintained

## Adding Custom Icons

To add a new icon, edit `snippets/icon.liquid` and add a new `{% when 'icon-name' %}` case with your SVG:

```liquid
{% when 'custom-icon' %}
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <!-- Your SVG paths here -->
  </svg>
```

## Related Components

- [Buttons](./buttons) — Icons in buttons
- [Badges](./badges) — Icons in badges
- [Inputs](./inputs) — Search icons
