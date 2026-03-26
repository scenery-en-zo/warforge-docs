---
id: snippets-tables
title: Tables
sidebar_label: 'Tables'
---

# Table Snippet

**File:** `snippets/table.liquid`

The table snippet provides styling for HTML tables with responsive scrolling and consistent Warforge theming.

## Visual Example

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>SKU</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Battlefield Resin Skulls</td>
        <td class="table-cell--accent">€24,95</td>
        <td>WFG-001</td>
        <td>In Stock</td>
      </tr>
      <tr>
        <td>Terrain Set Alpha</td>
        <td class="table-cell--accent">€49,95</td>
        <td>WFG-002</td>
        <td>In Stock</td>
      </tr>
      <tr>
        <td>Paint Starter Kit</td>
        <td class="table-cell--accent">€34,95</td>
        <td>WFG-003</td>
        <td>Low Stock</td>
      </tr>
    </tbody>
  </table>
</div>

## Usage

```liquid
<div class="table-wrapper">
  {% render 'table' %}
  <table>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.table-wrapper` | Scrollable container |
| `.table-cell--bold` | Bold cell text |
| `.table-cell--accent` | Accent colored text |

## Features

- ✅ Horizontal scroll for overflow
- ✅ Dark themed styling
- ✅ Header row with uppercase labels
- ✅ Row hover effects
- ✅ Border separators
- ✅ Responsive design

## Related

- [Product Template](./templates-product) - Order tables
- [Cart Template](./templates-cart) - Cart line items
