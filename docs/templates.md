---
id: templates
title: Templates
sidebar_position: 6
---

# Templates

Templates are JSON files in the `templates/` directory. They define which sections appear on each page type and in what order. Merchants can further customize templates via the theme editor without touching code.

:::info Shopify documentation
[Templates →](https://shopify.dev/docs/storefronts/themes/architecture/templates)
[JSON templates →](https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates)
:::

---

## Template basics

A template JSON file looks like this:

```json
{
  "sections": {
    "hero": {
      "type": "hero",
      "settings": {
        "heading": "Welcome",
        "enable_3d_fx": true
      }
    },
    "features": {
      "type": "features"
    }
  },
  "order": ["hero", "features"]
}
```

- **`sections`** — a dictionary where each key is a unique section instance ID
- **`type`** — the filename of the section in `sections/` (without `.liquid`)
- **`settings`** — the current saved values for that section's settings
- **`order`** — the render order (top to bottom)

When the theme editor saves changes, Shopify updates these JSON files automatically.

---

## Template → Page type mapping

Shopify maps page types to template files automatically:

| Page type | Template file | Notes |
|---|---|---|
| Homepage | `templates/index.json` | Always used for `/` |
| Default product | `templates/product.json` | Used for all products by default |
| Product (bases) | `templates/product.base.json` | Assigned in Shopify admin per product |
| Product (miniature) | `templates/product.miniature.json` | Extra product context section |
| Product (paint) | `templates/product.paint.json` | Simpler layout, no context |
| Product (terrain) | `templates/product.terrain.json` | Extra product context section |
| Product (tool) | `templates/product.tool.json` | Simpler layout |
| Collection | `templates/collection.json` | Used for all collections |
| Default blog | `templates/blog.json` | Standard grid layout |
| Blog (cards) | `templates/blog.cards.json` | Large card layout |
| Blog (compact) | `templates/blog.compact.json` | Compact list layout |
| Blog (masonry) | `templates/blog.masonry.json` | Masonry grid |
| Article | `templates/article.json` | Single blog post |
| Cart | `templates/cart.json` | `/cart` page |
| Search | `templates/search.json` | `/search` page |
| 404 | `templates/404.json` | Not found page |
| Generic page | `templates/page.json` | Default for pages |
| About Us | `templates/page.about.json` | Specific template for the about page |
| Contact | `templates/page.contact.json` | Contact form page |
| Blog categories | `templates/page.list-blogs.json` | The `/pages/blog` overview page |
| Blog categories grid | `templates/page.blog-categories.json` | Category tags grid |
| All collections | `templates/list-collections.json` | `/collections` page |
| Password | `templates/password.json` | Coming-soon password page |
| Gift card | `templates/gift_card.liquid` | Liquid (not JSON) — required by Shopify |
| Customer account | `templates/customers/account.json` | |
| Customer addresses | `templates/customers/addresses.json` | |
| Customer login | `templates/customers/login.json` | |
| Customer order | `templates/customers/order.json` | |
| Customer register | `templates/customers/register.json` | |

---

## How to assign a template to a product/page

### For products
1. Go to **Shopify Admin → Products**
2. Open the product
3. In the right sidebar, find "Theme template"
4. Select the template (e.g. `product.miniature`)
5. Save

### For pages
1. Go to **Shopify Admin → Online Store → Pages**
2. Open the page
3. In the right sidebar, find "Theme template"
4. Select the template (e.g. `page.about`)
5. Save

---

## Homepage template structure

```
templates/index.json sections, in order:
┌─────────────────────────────────────────┐
│  hero (sections/hero.liquid)            │
│  Full-width hero with 3D dice effect    │
├─────────────────────────────────────────┤
│  features (sections/features.liquid)    │
│  3-column selling point highlights      │
├─────────────────────────────────────────┤
│  featured-products                      │
│  (sections/featured-products.liquid)    │
│  "Weekly Deals" product slider          │
├─────────────────────────────────────────┤
│  featured-offers                        │
│  (sections/featured-offers.liquid)      │
│  Second product slider                  │
├─────────────────────────────────────────┤
│  newsletter (sections/newsletter.liquid)│
│  Email signup card                      │
├─────────────────────────────────────────┤
│  blog-preview                           │
│  (sections/blog-preview.liquid)         │
│  Recent articles grid                   │
└─────────────────────────────────────────┘
```

---

## Product page template structure

```
templates/product.json sections, in order:
┌─────────────────────────────────────────────────┐
│  product-main (sections/product-main.liquid)    │
│  Image gallery | Product info, variants, form   │
├─────────────────────────────────────────────────┤
│  product-details                                │
│  (sections/product-details.liquid)              │
│  Tabbed: Description / Specs / Shipping         │
├─────────────────────────────────────────────────┤
│  related-products                               │
│  (sections/related-products.liquid)             │
│  "Related Products" slider                      │
├─────────────────────────────────────────────────┤
│  trust-block (sections/trust-block.liquid)      │
│  Security / Shipping / Returns row              │
└─────────────────────────────────────────────────┘
```

The `product.miniature.json` and `product.terrain.json` templates insert `product-context` between `product-main` and `product-details`, adding structured attribute metadata (race, class, weapon, etc.).

---

## Collection page template structure

```
templates/collection.json sections, in order:
┌───────────────────────────────────────────────────────┐
│  collection-grid (sections/collection-grid.liquid)    │
│  ┌────────────────┬───────────────────────────────┐   │
│  │ Filters        │ Toolbar (sort + view toggle)  │   │
│  │ sidebar        │ Product grid (3–5 columns)    │   │
│  │                │ Pagination                    │   │
│  └────────────────┴───────────────────────────────┘   │
└───────────────────────────────────────────────────────┘
```

---

## Adding a new section to a template

**Via the theme editor (recommended for merchants):**
1. Go to **Online Store → Themes → Customize**
2. Navigate to the page type you want to modify
3. Click **Add section** in the sidebar
4. Choose from available sections
5. Save

**Via code (for developers):**
1. Open the template JSON file (e.g. `templates/index.json`)
2. Add an entry to `sections` with a unique key:
   ```json
   "my-new-promo": {
     "type": "promo-block",
     "settings": {
       "heading": "New Arrivals"
     }
   }
   ```
3. Add the key to the `order` array at the position you want
4. Commit and push — Shopify will pick it up automatically

---

## The `gift_card.liquid` exception

`templates/gift_card.liquid` is the one remaining Liquid template (not JSON). It is required by Shopify and handles the gift card redemption page. It cannot be converted to JSON — Shopify mandates the `.liquid` format for gift cards.
