---
id: snippets-tables
title: Tables
sidebar_label: Tables
---

# Table Snippet

**File:** `snippets/table.liquid`

Dark themed tables with bordered cells.

## Visual Example

<div className="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>PRODUCT</th>
        <th>PRICE</th>
        <th>SKU</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Battlefield Resin Skulls</td>
        <td className="table-cell--accent">€24,95</td>
        <td>WFG-001</td>
        <td>In Stock</td>
      </tr>
      <tr>
        <td>Terrain Set Alpha</td>
        <td className="table-cell--accent">€49,95</td>
        <td>WFG-002</td>
        <td>In Stock</td>
      </tr>
      <tr>
        <td>Paint Starter Kit</td>
        <td className="table-cell--accent">€34,95</td>
        <td>WFG-003</td>
        <td>Low Stock</td>
      </tr>
    </tbody>
  </table>
</div>

## Features

- Dark header with uppercase white text
- Bordered cells
- Orange accent for prices
- Row hover effects

## Related

- [Product Template](./templates-product) - Order tables
- [Cart Template](./templates-cart) - Cart items
