---
id: snippets-pagination
title: Pagination
sidebar_label: 'Pagination'
---

# Pagination Snippet

**File:** `snippets/pagination.liquid`

The pagination component renders navigation for paginated content with previous/next buttons and page numbers.

## Visual Example

<nav class="pagination" role="navigation" aria-label="Pagination">
  <ul class="pagination__list" role="list">
    <li class="pagination__item">
      <button class="pagination__link pagination__link--prev" disabled aria-label="Previous page">
        <svg class="icon" viewBox="0 0 24 24" style="width:16px;height:16px;transform:rotate(90deg);"><path d="M6 9l6 6 6-6"></path></svg>
      </button>
    </li>
    <li class="pagination__item">
      <span class="pagination__link is-active" aria-current="page">1</span>
    </li>
    <li class="pagination__item">
      <a href="/collections/all?page=2" class="pagination__link" aria-label="Page 2">2</a>
    </li>
    <li class="pagination__item">
      <a href="/collections/all?page=3" class="pagination__link" aria-label="Page 3">3</a>
    </li>
    <li class="pagination__item">
      <a href="/collections/all?page=2" class="pagination__link pagination__link--next" aria-label="Next page">
        <svg class="icon" viewBox="0 0 24 24" style="width:16px;height:16px;transform:rotate(-90deg);"><path d="M6 9l6 6 6-6"></path></svg>
      </a>
    </li>
  </ul>
</nav>

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
