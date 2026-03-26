---
id: templates-collection
title: Collection Template
sidebar_label: 'Collection'
---

# Collection Template

**File:** `templates/collection.json`

The collection template defines the layout for collection pages with filtering, sorting, and product grids.

## Structure

```json
{
  "sections": {
    "header": {
      "type": "collection-header",
      "settings": {}
    },
    "main": {
      "type": "collection-grid",
      "settings": {}
    }
  },
  "order": ["header", "main"]
}
```

## Sections

| Section ID | Type | Description |
|------------|------|-------------|
| `header` | `collection-header` | Collection title, description, image |
| `main` | `collection-grid` | Product grid with filtering/sorting |

## Features

- ✅ Collection header with branding
- ✅ Product grid layout
- ✅ Filtering by availability, price, etc.
- ✅ Sorting options
- ✅ Pagination
- ✅ Responsive grid (mobile to desktop)

## Collection Header

Displays:
- Collection title
- Collection description
- Collection image (optional)
- Breadcrumb navigation

## Collection Grid

Displays:
- Product cards in responsive grid
- Filter sidebar/options
- Sort dropdown
- Product count
- Pagination controls

## CSS Classes

| Class | Description |
|-------|-------------|
| `.collection` | Main collection container |
| `.collection-header` | Header section |
| `.collection-header__title` | Collection title |
| `.collection-header__description` | Collection description |
| `.collection-grid` | Product grid |
| `.collection-toolbar` | Filter/sort toolbar |
| `.collection__filters` | Filter sidebar |

## Related

- [Product Cards](./snippets-product-cards) - Product display cards
- [Pagination](./snippets-pagination) - Page navigation
- [Collection Header Section](./sections-collection-header) - Header section
- [Collection Grid Section](./sections-collection-grid) - Grid section
