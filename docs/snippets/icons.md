---
id: snippets-icons
title: Icons
sidebar_label: Icons
---

# Icon Snippet

**File:** `snippets/icon.liquid`

The icon component renders inline SVG icons from the theme standard library.

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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
    <span style={{fontSize: '13px', color: 'var(--text-secondary)'}}>truck</span>
  </div>
</div>

## Usage

```liquid
{% render 'icon',
  name: 'cart',
  size: 'md',
  variant: 'accent'
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | String | Required | Icon name |
| `size` | String | `md` | `sm` (16px), `md` (20px), `lg` (24px), `xl` (32px) |
| `variant` | String | `primary` | `primary`, `secondary`, `muted`, `accent`, `success`, `warning`, `error`, `info` |
| `class` | String | - | Additional CSS classes |
| `aria_hidden` | Boolean | `true` | Hide from screen readers |
| `aria_label` | String | - | Accessible label if not hidden |

## Available Icons

| Icon Name | Description |
|-----------|-------------|
| `cart` | Shopping cart |
| `search` | Search/magnifying glass |
| `user` | User/profile |
| `user-plus` | Add user/register |
| `truck` | Delivery/shipping |
| `chevron-down` | Dropdown arrow |
| `plus` | Add/create |
| `minus` | Remove/collapse |
| `close` | Close/X |
| `menu` | Hamburger menu |
| `mail` | Email/envelope |
| `phone` | Phone/telephone |
| `map-pin` | Location/pin |
| `package` | Package/box |
| `star` | Star/rating |
| `filter` | Filter/funnel |
| `grid` | Grid view |
| `list` | List view |
| `folder` | Folder/category |
| `dice` | D20 gaming die |
| `palette` | Colors/design |
| `logout` | Logout/exit |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.icon-wrapper` | Base icon container |
| `.icon-wrapper--sm` | Small (16px) |
| `.icon-wrapper--md` | Medium (20px) |
| `.icon-wrapper--lg` | Large (24px) |
| `.icon-wrapper--xl` | Extra large (32px) |
| `.icon-wrapper--primary` | Inherits parent color |
| `.icon-wrapper--secondary` | Secondary text color |
| `.icon-wrapper--muted` | Muted color |
| `.icon-wrapper--accent` | Orange accent color |

## Related

- [Buttons](./snippets-buttons) - Button icons
- [Header](./sections-header) - Navigation icons
