---
id: filters
title: Filters
sidebar_label: "Filters"
---

# Filters

The filters component allows users to refine product collections by category, brand, price range, and other attributes. Filters are commonly found in collection pages with sidebar or top toolbar layouts.

## Visual Examples

<div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
    <div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', marginBottom: '12px'}}>Category</h5>
      <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px'}}>
        <input type="checkbox" checked style={{accentColor: '#F97316'}}/>
        <span style={{color: '#94A3B8', fontSize: '13px'}}>Miniatures</span>
      </label>
      <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px'}}>
        <input type="checkbox" style={{accentColor: '#F97316'}}/>
        <span style={{color: '#94A3B8', fontSize: '13px'}}>Terrain</span>
      </label>
      <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px'}}>
        <input type="checkbox" style={{accentColor: '#F97316'}}/>
        <span style={{color: '#94A3B8', fontSize: '13px'}}>Paints & Brushes</span>
      </label>
    </div>
    
    <div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', marginBottom: '12px'}}>Price Range</h5>
      <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
        <input type="number" placeholder="Min" style={{backgroundColor: '#1A2033', border: '1px solid #3B4A61', borderRadius: '4px', padding: '8px', color: '#F8FAFC', fontSize: '13px', width: '80px'}}/>
        <span style={{color: '#94A3B8'}}>-</span>
        <input type="number" placeholder="Max" style={{backgroundColor: '#1A2033', border: '1px solid #3B4A61', borderRadius: '4px', padding: '8px', color: '#F8FAFC', fontSize: '13px', width: '80px'}}/>
      </div>
    </div>
  </div>
</div>

## Component Overview

The filters component is used for:

- **Collection pages** — Sidebar or top toolbar filters
- **Search results** — Refine search by attributes
- **Product recommendations** — Filter related products

## Usage

```liquid
{% render 'filters',
  filters: collection.filters,
  sort_by: collection.sort_by,
  show_price_range: true
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `filters` | Array | — | Available filter options |
| `sort_by` | String | `manual` | Current sort order |
| `show_price_range` | Boolean | `true` | Show price range inputs |
| `layout` | Select | `sidebar` | Layout: `sidebar` or `toolbar` |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.filters` | Filter container |
| `.filters__group` | Filter group wrapper |
| `.filters__title` | Group heading |
| `.filters__option` | Individual filter option |
| `.filters__checkbox` | Checkbox input |
| `.filters__price-range` | Price range inputs |

## Accessibility

- All filter checkboxes have associated labels
- Filter groups use proper heading hierarchy
- Screen readers announce filter state changes
- Keyboard navigation supported for all inputs

## Related Components

- [Checkbox](./checkboxes) — Filter checkboxes
- [Inputs](./inputs) — Price range inputs
- [Sort Dropdown](./sort-dropdown) — Sort order selection
