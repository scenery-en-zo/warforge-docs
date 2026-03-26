---
id: snippets-breadcrumbs
title: Breadcrumbs
sidebar_label: 'Breadcrumbs'
---

# Breadcrumbs Snippet

**File:** `snippets/breadcrumbs.liquid`

The breadcrumbs component renders navigation breadcrumbs with automatic context detection for products, collections, blogs, and articles.

## Visual Example

<nav class="breadcrumb-bar" aria-label="Breadcrumb">
  <div class="breadcrumb-inner">
    <a href="/"><svg class="icon-wrapper icon-wrapper--sm icon-wrapper--accent" style="display:inline-flex;width:1em;height:1em;" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"></polygon></svg> Home</a>
    <span class="breadcrumb-sep">&gt;</span>
    <a href="/collections/all">Shop</a>
    <span class="breadcrumb-sep">&gt;</span>
    <a href="/collections/miniatures">Miniatures</a>
    <span class="breadcrumb-sep">&gt;</span>
    <span class="breadcrumb-current">Battlefield Resin Skulls</span>
  </div>
</nav>

## Usage

```liquid
{% render 'breadcrumbs' %}
```

## Features

The breadcrumbs component automatically detects the current template context:

| Template | Breadcrumb Trail |
|----------|------------------|
| Collection | Home > Shop > Collection Name |
| Product | Home > Shop > Collection > Product Title |
| Blog | Home > Blog |
| Article | Home > Blog > Article Title |
| Page | Home > Page Title |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.breadcrumb-bar` | Main navigation container |
| `.breadcrumb-inner` | Inner flex container |
| `.breadcrumb-sep` | Separator character (>) |
| `.breadcrumb-current` | Current page (non-clickable) |

## Styling

- **Background**: Dark (bg-800) with top accent border
- **Links**: Muted color, highlights to accent on hover
- **Current**: Accent color (orange), bold weight
- **Separator**: Disabled color, smaller font

## Related

- [Navigation](./navigation) - Main navigation
- [Icons](./snippets-icons) - Home icon
