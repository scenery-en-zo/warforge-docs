---
id: snippets-breadcrumbs
title: Breadcrumbs
sidebar_label: Breadcrumbs
---

# Breadcrumbs Snippet

**File:** `snippets/breadcrumbs.liquid`

The breadcrumbs component renders navigation breadcrumbs with automatic context detection for products, collections, blogs, and articles.

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
