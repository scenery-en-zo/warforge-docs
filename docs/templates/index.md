---
id: templates-index
title: Templates Overview
sidebar_label: 'Overview'
---

# Templates

Templates define the page structure using JSON configuration. They specify which sections to include and in what order.

## Available Templates

### Core Templates
- [Product](./templates-product) - Product pages
- [Collection](./templates-collection) - Collection pages
- [Cart](./templates-cart) - Shopping cart

### Blog Templates
- `blog.json` - Main blog
- `blog.cards.json` - Card layout
- `blog.compact.json` - Compact layout
- `blog.masonry.json` - Masonry layout
- `article.json` - Single article

### Page Templates
- `index.json` - Homepage
- `page.json` - Default page
- `page.about.json` - About page
- `page.contact.json` - Contact page
- `page.blog-categories.json` - Blog categories

### Other Templates
- `404.json` - Error page
- `customers/` - Customer account pages
- `password.json` - Password page
- `gift_card.liquid` - Gift card

## Template Structure

```json
{
  "sections": {
    "main": {
      "type": "section-name",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## Related

- [Layout](./layout-index) - Master layouts
- [Sections](./sections-index) - Page sections
