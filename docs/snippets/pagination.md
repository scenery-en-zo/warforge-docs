---
id: snippets-pagination
title: Pagination
sidebar_label: Pagination
---

# Pagination Snippet

**File:** `snippets/pagination.liquid`

Square button pagination with orange active state.

## Visual Example

<nav className="pagination" role="navigation">
  <ul className="pagination__list">
    <li className="pagination__item">
      <button className="pagination__link pagination__link--prev" disabled aria-label="Previous">
        <svg viewBox="0 0 24 24" style={{width: '16px', height: '16px'}}><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
      </button>
    </li>
    <li className="pagination__item">
      <span className="pagination__link is-active">1</span>
    </li>
    <li className="pagination__item">
      <a href="/collections/all?page=2" className="pagination__link">2</a>
    </li>
    <li className="pagination__item">
      <a href="/collections/all?page=3" className="pagination__link">3</a>
    </li>
    <li className="pagination__item">
      <a href="/collections/all?page=2" className="pagination__link pagination__link--next" aria-label="Next">
        <svg viewBox="0 0 24 24" style={{width: '16px', height: '16px'}}><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
      </a>
    </li>
  </ul>
</nav>

## Usage

```liquid
{% paginate collection.products by 12 %}
  {% render 'pagination', paginate: paginate %}
{% endpaginate %}
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.pagination__link` | Square button (40x40px) |
| `.pagination__link.is-active` | Orange background |
| `.pagination__link--prev` | Previous chevron |
| `.pagination__link--next` | Next chevron |

## Styling

- Buttons: 40x40px squares
- Default: Dark bg-800 with border
- Active: Orange background
- Hover: Orange border and text

## Related

- [Collection Pages](./templates-collection) - Product pagination
