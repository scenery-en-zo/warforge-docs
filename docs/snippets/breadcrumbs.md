---
id: snippets-breadcrumbs
title: Breadcrumbs
sidebar_label: Breadcrumbs
---

# Breadcrumbs Snippet

**File:** `snippets/breadcrumbs.liquid`

Navigation breadcrumbs with star icon and automatic context detection.

## Visual Example

<nav className="breadcrumb-bar" aria-label="Breadcrumb">
  <div className="breadcrumb-inner">
    <a href="/">
      <svg className="breadcrumb-home-icon" viewBox="0 0 24 24" style={{width: '16px', height: '16px', marginRight: '8px', fill: 'var(--accent-500)'}}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"></polygon>
      </svg>
      Home
    </a>
    <span className="breadcrumb-sep">
      <svg viewBox="0 0 24 24" style={{width: '12px', height: '12px'}}><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
    </span>
    <a href="/collections/all">Shop</a>
    <span className="breadcrumb-sep">
      <svg viewBox="0 0 24 24" style={{width: '12px', height: '12px'}}><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
    </span>
    <a href="/collections/miniatures">Miniatures</a>
    <span className="breadcrumb-sep">
      <svg viewBox="0 0 24 24" style={{width: '12px', height: '12px'}}><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
    </span>
    <span className="breadcrumb-current">Battlefield Resin Skulls</span>
  </div>
</nav>

## Usage

```liquid
{% render 'breadcrumbs' %}
```

## Features

- Star icon before Home link
- Chevron separators (>)
- Current page in orange
- Auto-detects template context

## CSS Classes

| Class | Description |
|-------|-------------|
| `.breadcrumb-bar` | Container with orange top border |
| `.breadcrumb-home-icon` | Orange star icon |
| `.breadcrumb-sep` | Chevron separator |
| `.breadcrumb-current` | Current page (orange) |

## Styling

- Top border: 2px orange accent
- Links: White/secondary, orange on hover
- Current: Orange accent
- Background: Dark bg-800

## Related

- [Icons](./snippets-icons) - Star icon
- [Navigation](./navigation) - Main navigation
