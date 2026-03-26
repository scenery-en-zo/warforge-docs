---
id: templates-cart
title: Cart Template
sidebar_label: 'Cart'
---

# Cart Template

**File:** `templates/cart.json`

The cart template defines the layout for the shopping cart page with line items, order summary, and checkout.

## Structure

```json
{
  "sections": {
    "main": {
      "type": "cart",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## Sections

| Section ID | Type | Description |
|------------|------|-------------|
| `main` | `cart` | Full cart layout |

## Features

- ✅ Line item list with images
- ✅ Quantity adjustment
- ✅ Item removal
- ✅ Order summary
- ✅ Subtotal calculation
- ✅ Checkout button
- ✅ Continue shopping link
- ✅ Empty cart state
- ✅ Cart notes (optional)
- ✅ Shipping calculator (optional)

## Cart Section Components

### Line Items
- Product image
- Product title
- Variant details
- Quantity stepper
- Price
- Remove button

### Order Summary
- Subtotal
- Shipping estimate
- Tax notice
- Checkout button

## CSS Classes

| Class | Description |
|-------|-------------|
| `.cart` | Main cart container |
| `.cart__items` | Line items list |
| `.cart-item` | Individual line item |
| `.cart-item__media` | Product image |
| `.cart-item__details` | Product info |
| `.cart-item__quantity` | Quantity controls |
| `.cart-item__price` | Line price |
| `.cart__summary` | Order summary |
| `.cart__subtotal` | Subtotal display |
| `.cart__checkout` | Checkout button |

## Empty Cart State

When cart is empty:
- Empty cart message
- Continue shopping button
- Featured products (optional)

## Related

- [Cart Section](./sections-cart) - Cart section
- [Button](./snippets-buttons) - Checkout button
- [Product Cards](./snippets-product-cards) - Featured products
