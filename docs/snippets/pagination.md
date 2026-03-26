---
id: snippets-pagination
title: Pagination
sidebar_label: Pagination
---

# Pagination Snippet

**File:** `snippets/pagination.liquid`

The pagination component renders navigation for paginated content with previous/next buttons and page numbers.

## Usage

```liquid
{% paginate collection.products by 12 %}
  <!-- Product grid -->
  
  {% render 'pagination', paginate: paginate %}
{% endpaginate %}
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `paginate` | Object | Shopify paginate object |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.pagination` | Main navigation container |
| `.pagination__list` | Unordered list wrapper |
| `.pagination__item` | Individual page item |
| `.pagination__link` | Page link/button |
| `.pagination__link--prev` | Previous page button |
| `.pagination__link--next` | Next page button |
| `.pagination__link.is-active` | Current page indicator |

## Features

- ✅ Previous/Next navigation with chevron icons
- ✅ Page number links
- ✅ Current page highlighting
- ✅ Disabled state for boundary buttons
- ✅ Accessible ARIA labels
- ✅ Responsive design

## States

- **Active** - Orange background, indicates current page
- **Default** - Dark background with border
- **Hover** - Border and text highlight to accent color
- **Disabled** - Reduced opacity for boundary buttons

## Related

- [Icons](./snippets-icons) - Chevron icons
- [Collection Pages](./templates-collection) - Product pagination
