---
id: sort-dropdown
title: Sort Dropdown
sidebar_label: "Sort Dropdown"
---

# Sort Dropdown

The sort dropdown allows users to sort products by various criteria including recommended, price, date, and relevance. It's commonly found in collection pages above product grids.

## Visual Examples

<div style={{display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#2C3B52', borderRadius: '8px', padding: '12px 16px'}}>
  <label style={{fontSize: '13px', color: '#94A3B8', marginRight: '8px'}}>Sort by:</label>
  <select style={{backgroundColor: 'transparent', border: 'none', color: '#F8FAFC', fontSize: '13px', cursor: 'pointer', outline: 'none'}}>
    <option value="recommended">Recommended</option>
    <option value="best-selling">Best Selling</option>
    <option value="price-asc">Price: Low to High</option>
    <option value="price-desc">Price: High to Low</option>
    <option value="created-desc">New Arrivals</option>
  </select>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <!-- Sort Dropdown with Icon -->
  <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '14px', marginBottom: '12px'}}>With Icon</h4>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <select style={{backgroundColor: 'transparent', border: 'none', color: '#F8FAFC', fontSize: '13px', cursor: 'pointer', outline: 'none'}}>
        <option value="recommended">Recommended</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="created-desc">New Arrivals</option>
      </select>
    </div>
  </div>
  
  <!-- Sort Dropdown Compact -->
  <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '14px', marginBottom: '12px'}}>Compact</h4>
    <select style={{backgroundColor: '#1A2033', border: '1px solid #3B4A61', color: '#94A3B8', fontSize: '12px', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer'}}>
      <option value="recommended">Sort</option>
    </select>
  </div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
  <!-- Sort Dropdown with Badge -->
  <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '14px', marginBottom: '12px'}}>With Badge</h4>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <select style={{backgroundColor: 'transparent', border: 'none', color: '#F8FAFC', fontSize: '13px', cursor: 'pointer', outline: 'none'}}>
        <option value="recommended">Recommended</option>
        <option value="best-selling" selected>Best Selling</option>
      </select>
    </div>
  </div>
  
  <!-- Sort Dropdown with Arrow -->
  <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '14px', marginBottom: '12px'}}>With Arrow</h4>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <select style={{backgroundColor: 'transparent', border: 'none', color: '#F8FAFC', fontSize: '13px', cursor: 'pointer', outline: 'none'}}>
        <option value="recommended">Recommended</option>
        <option value="price-asc">Price: Low to High</option>
      </select>
    </div>
  </div>
  
  <!-- Sort Dropdown Full Width -->
  <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '14px', marginBottom: '12px'}}>Full Width</h4>
    <select style={{width: '100%', backgroundColor: '#1A2033', border: '1px solid #3B4A61', color: '#F8FAFC', fontSize: '13px', padding: '10px 14px', borderRadius: '6px', cursor: 'pointer'}}>
      <option value="recommended">Recommended</option>
      <option value="best-selling">Best Selling</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="created-desc">New Arrivals</option>
    </select>
  </div>
</div>

## Component Overview

The sort dropdown enables product sorting on collection pages:

- **Recommended** — Default algorithmic sorting
- **Best Selling** — Top-selling products first
- **Price: Low to High** — Ascending price order
- **Price: High to Low** — Descending price order
- **New Arrivals** — Recently added products first

## Sort Options

### Standard Sort Dropdown

Default sort dropdown for collection pages:

```liquid
```liquid
```
'sort-dropdown',
  options: [
    &#123; value: 'recommended', label: 'Recommended' &#125;,
    &#123; value: 'best-selling', label: 'Best Selling' &#125;,
    &#123; value: 'price-asc', label: 'Price: Low to High' &#125;,
    &#123; value: 'price-desc', label: 'Price: High to Low' &#125;,
    &#123; value: 'created-desc', label: 'New Arrivals' &#125;
  ]
%&#125;
```

### Compact Sort Dropdown

Minimal sort dropdown for compact layouts:

```
&#123;%
'sort-dropdown',
  options: [
    &#123; value: 'recommended', label: 'Sort' &#125;
  ],
  compact: true
%&#125;
```
## Parameters

| Parameter   | Type    | Default          | Description                                |
| ----------- | ------- | ---------------- | ------------------------------------------ |
| `options`   | Array   | Required         | Array of sort options with value and label |
| `selected`  | String  | 'recommended'    | Currently selected sort option             |
| `compact`   | Boolean | `false`          | Compact styling without label              |
| `show_icon` | Boolean | `true`           | Show sort icon                             |
| `icon_name` | String  | 'sort-ascending' | Icon name for sort indicator               |

## Usage Examples

### Standard Sort Dropdown

```
```&#123;%
'sort-dropdown',
  options: [
    &#123; value: 'recommended', label: 'Recommended' &#125;,
    &#123; value: 'best-selling', label: 'Best Selling' &#125;,
    &#123; value: 'price-asc', label: 'Price: Low to High' &#125;,
    &#123; value: 'price-desc', label: 'Price: High to Low' &#125;,
    &#123; value: 'created-desc', label: 'New Arrivals' &#125;
  ]
%&#125;
```

### Custom Sort Options

``````liquid
&#123;%
'sort-dropdown',
  options: [
    &#123; value: 'featured', label: 'Featured' &#125;,
    &#123; value: 'manual', label: 'Manual Order' &#125;
  ],
  selected: 'featured'
%&#125;
```
## CSS Classes

| Class                    | Description             |
| ------------------------ | ----------------------- |
| `.sort-dropdown`         | Sort dropdown container |
| `.sort-dropdown__select` | Select element wrapper  |
| `.sort-dropdown__icon`   | Sort icon indicator     |

## Accessibility

- Select has proper label (visually hidden if needed)
- All options are keyboard accessible
- Screen readers announce sort options correctly
- Focus visible on select dropdown
- Change in selection announced to screen readers

## Related Components

- [Inputs](./inputs) — Sort dropdown uses input/select elements
- [Pagination](./pagination) — Often paired with sort on collection pages
- [Filters](./filters) — Filters and sort commonly appear together
