---
id: header
title: Header Section
sidebar_label: "Header"
---

# Header Section

The header section contains the primary navigation elements including the logo, site title, main navigation menu, search bar, and utility icons (cart, account).

## Visual Examples

<div style={{backgroundColor: '#0A0E16', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <a href="/" style={{display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
      <div style={{width: '40px', height: '40px', backgroundColor: '#F97316', borderRadius: '8px'}}></div>
      <span style={{fontFamily: 'Cinzel, serif', fontSize: '20px', color: '#F8FAFC'}}>Warforge</span>
    </a>
    
    <nav style={{display: 'flex', gap: '32px'}}>
      <a href="/collections/miniatures" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '14px'}}>Miniatures</a>
      <a href="/collections/terrain" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '14px'}}>Terrain</a>
      <a href="/collections/paints" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '14px'}}>Paints</a>
      <a href="/collections/tools" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '14px'}}>Tools</a>
    </nav>
    
    <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
      <button style={{background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '8px'}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      </button>
      <button style={{background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '8px'}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </button>
      <button style={{background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '8px', position: 'relative'}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <span style={{position: 'absolute', top: '-4px', right: '-4px', backgroundColor: '#F97316', color: 'white', fontSize: '10px', fontWeight: '600', padding: '2px 6px', borderRadius: '10px'}}>0</span>
      </button>
    </div>
  </div>
</div>

## Component Overview

The header section includes:

- **Logo/Branding** — Company logo and name
- **Main Navigation** — Primary menu links
- **Search** — Product search functionality
- **User Account** — Login/register link
- **Cart** — Shopping cart with item count

## Usage

```liquid
{% section 'header' %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `logo` | Image | — | Logo image |
| `show_search` | Boolean | `true` | Show search bar |
| `show_account` | Boolean | `true` | Show account link |
| `show_cart` | Boolean | `true` | Show cart icon |
| `sticky` | Boolean | `false` | Sticky header on scroll |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.header` | Header container |
| `.header__logo` | Logo wrapper |
| `.header__nav` | Navigation wrapper |
| `.header__menu` | Menu list |
| `.header__utilities` | Utility icons |
| `.header__cart-count` | Cart badge |

## Accessibility

- Logo links to homepage
- Navigation uses semantic `<nav>` element
- All buttons have aria-labels
- Cart count announced to screen readers
- Keyboard navigation supported

## Related Components

- [Navigation](./navigation) — Menu structure
- [Icons](./icons) — Utility icons
- [Search](../header) — Search functionality
