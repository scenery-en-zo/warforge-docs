---
id: pagination
title: Pagination
sidebar_label: 'Pagination'
---

# Pagination

The pagination component divides content across multiple pages with navigation controls. It's used for product grids, blog listings, and other content-heavy sections that exceed a single page.

## Visual Examples

<div style={{marginBottom: '24px'}}>
  <!-- Standard Pagination -->
  <nav aria-label="Pagination" class="pagination" style={{display: 'flex', justifyContent: 'center', gap: '4px'}}>
    
<!-- Liquid example -->'button', label: '&laquo;', href: '/collections/all?page=1', size: 'sm', style: 'ghost' %}```
    <span style={{color: '#94A3B8', padding: '0 8px'}}>&bull;</span>
    
    
<!-- Liquid example -->'button', label: '1', href: '/collections/all?page=1', size: 'sm', style: 'secondary' %}```
    
    
<!-- Liquid example -->'button', label: '2', href: '/collections/all?page=2', size: 'sm', style: 'primary' %}```
    
    
<!-- Liquid example -->'button', label: '3', href: '/collections/all?page=3', size: 'sm', style: 'secondary' %}```
    
    <span style={{color: '#94A3B8', padding: '0 8px'}}>&bull;</span>
    
    
<!-- Liquid example -->'button', label: '&raquo;', href: '/collections/all?page=3', size: 'sm', style: 'ghost' %}```
  </nav>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <!-- Range Pagination -->
  <nav aria-label="Pagination">
    
<!-- Liquid example -->'button', label: '&laquo;', href: '/collections/all?page=1', size: 'sm', style: 'ghost' %}```
    
    
<!-- Liquid example -->'button', label: '1', href: '/collections/all?page=1', size: 'sm', style: 'secondary' %}```
    
    
<!-- Liquid example -->'button', label: '2', href: '/collections/all?page=2', size: 'sm', style: 'primary' %}```
    
    
<!-- Liquid example -->'button', label: '3', href: '/collections/all?page=3', size: 'sm', style: 'secondary' %}```
    
    
<!-- Liquid example -->'button', label: '&raquo;', href: '/collections/all?page=4', size: 'sm', style: 'ghost' %}```
  </nav>
  
  <!-- Next/Previous Only -->
  <nav aria-label="Pagination">
    
<!-- Liquid example -->'button', label: 'Previous', href: '/collections/all?page=1', size: 'sm', style: 'secondary' %}```
    
    
<!-- Liquid example -->'button', label: 'Next', href: '/collections/all?page=5', size: 'sm', style: 'primary' %}```
  </nav>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
  <!-- Full Pagination with Ellipsis -->
  <nav aria-label="Pagination">
    
<!-- Liquid example -->'button', label: '&laquo;', href: '/collections/all?page=1', size: 'sm', style: 'ghost' %}```
    
    
<!-- Liquid example -->'button', label: '1', href: '/collections/all?page=1', size: 'sm', style: 'secondary' %}```
    
    
<!-- Liquid example -->'button', label: '2', href: '/collections/all?page=2', size: 'sm', style: 'primary' %}```
    
    <span style={{color: '#64748B', padding: '0 8px'}}>&hellip;</span>
    
    
<!-- Liquid example -->'button', label: '10', href: '/collections/all?page=10', size: 'sm', style: 'secondary' %}```
    
    
<!-- Liquid example -->'button', label: '&raquo;', href: '/collections/all?page=11', size: 'sm', style: 'ghost' %}```
  </nav>
  
  <!-- Product Grid Footer -->
  <div style={{backgroundColor: '#1A2033', padding: '16px', borderRadius: '8px'}}>
    <p style={{fontSize: '12px', color: '#94A3B8', marginBottom: '12px'}}>Showing 1-24 of 96 results</p>
    
    
<!-- Liquid example -->'button', label: '&laquo;', href: '/collections/all?page=1', size: 'sm', style: 'ghost' %}```
    
    
<!-- Liquid example -->'button', label: '1', href: '/collections/all?page=1', size: 'sm', style: 'secondary' %}```
    
    
<!-- Liquid example -->'button', label: '2', href: '/collections/all?page=2', size: 'sm', style: 'primary' %}```
    
    
<!-- Liquid example -->'button', label: '&raquo;', href: '/collections/all?page=3', size: 'sm', style: 'ghost' %}```
  </div>
  
  <!-- Blog Pagination -->
  <nav aria-label="Pagination">
    
<!-- Liquid example -->'button', label: 'Previous posts', href: '/blog?page=1', size: 'sm', style: 'secondary' %}```
    
    
<!-- Liquid example -->'button', label: 'Next posts', href: '/blog?page=2', size: 'sm', style: 'primary' %}```
  </nav>
</div>

## Component Overview

Pagination helps users navigate through large datasets:

- **Product grids** — Navigate between product pages (24 items per page)
- **Blog listings** — Browse through blog posts
- **Collection archives** — View products across multiple pages
- **Search results** — Paginate through search results

## Pagination Types

### Numbered Pagination

Full numeric pagination with ellipsis for large ranges:

```liquid
```liquid
```
  current_page: 2,
  total_pages: 10,
  items_per_page: 24
%&#125;```
```

### Simple Pagination

Previous/Next buttons only:

```
<!-- Liquid example -->'pagination', 
  current_page: 2,
  total_pages: 5,
  type: 'simple'
%&#125;```
```
### Product Grid Footer

Pagination with result count:

```
```<p style="font-size: 12px; color: #94A3B8;">Showing 1-24 of 96 results</p>


<!-- Liquid example -->'pagination', 
  current_page: 2,
  total_pages: 4
%&#125;```
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `current_page` | Number | Required | Current page number |
| `total_pages` | Number | Required | Total number of pages |
| `items_per_page` | Number | 24 | Items shown per page |
| `type` | Select | `standard` | Pagination style: `standard`, `simple` |
| `show_ellipsis` | Boolean | `true` | Show ellipsis for skipped pages |

## Usage Examples

### Standard Product Grid Pagination

``````liquid
<!-- Liquid example -->'pagination', 
  current_page: 2,
  total_pages: 4,
  items_per_page: 24
%&#125;```
```
### Simple Next/Previous

```liquid
```liquid
```
  current_page: 2,
  total_pages: 5,
  type: 'simple'
%&#125;```
```

### Blog Pagination

```
<!-- Liquid example -->'pagination', 
  current_page: 2,
  total_pages: 12,
  type: 'text'
%&#125;```
```
## CSS Classes

| Class | Description |
|-------|-------------|
| `.pagination` | Pagination container |
| `.pagination__item` | Individual pagination button |
| `.pagination__item--current` | Current active page |
| `.pagination__item--disabled` | Disabled page (first/last) |

## Accessibility

- Uses `aria-label="Pagination"` for screen reader context
- Current page has `aria-current="page"` attribute
- Previous/Next buttons have proper labels
- Keyboard navigation: Arrow keys to navigate, Enter/Space to activate
- Screen readers announce total pages and current position

## Related Components

- [Buttons](./buttons) — Pagination uses button components
- [Sort Dropdown](./sort-dropdown) — Often paired with pagination on collection pages

