---
id: sections-index
title: Sections Overview
sidebar_label: 'Overview'
---

# Sections

Sections are major page components that merchants can configure through the Shopify theme editor. They contain schema settings and can include blocks.

## Available Sections

### Global Sections
- [Header](./sections-header) - Site header with navigation
- [Footer](./sections-footer) - Site footer with links

### Page Sections
- [Hero](./sections-hero) - Hero banner with effects
- Collection Header - Collection title and description
- Collection Grid - Product grid
- Product Main - Product details
- Cart - Shopping cart
- And more...

## Usage

Sections are configured in JSON templates:

```json
{
  "sections": {
    "main": {
      "type": "section-name",
      "settings": {}
    }
  }
}
```

## Related

- [Snippets](./snippets-index) - Reusable components
- [Blocks](./blocks-index) - Content blocks
- [Templates](./templates-index) - Page templates
