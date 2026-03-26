---
id: architecture
title: Architecture
sidebar_label: "Architecture"
sidebar_position: 3
---

# Theme Architecture

This document explains how the Warforge theme is structured and how its files relate to each other.

## Directory Structure

```bash
warforge/
├── assets/              # Static files (CSS, JS, images, fonts)
│   ├── css/            # Compiled CSS files
│   │   ├── critical.css      # Above-the-fold styles
│   │   └── styles.css        # All other styles
│   ├── js/             # JavaScript files
│   │   ├── three.module.min.js  # Three.js for WebGL effects
│   │   └── custom.js          # Custom interactions
│   ├── fonts/          # Custom font files
│   │   └── handwriting-draft.ttf  # Logo tagline font
│   └── images/         # Theme images (logos, icons)
│       └── shoppy-x-ray.svg    # Theme logo
├── blocks/             # Reusable theme editor blocks
│   ├── group.liquid    # Group container block
│   ├── text.liquid     # Text content block
│   └── schema.json     # Block settings configuration
├── config/             # Global theme settings
│   ├── settings_schema.json   # Theme editor settings definitions
│   └── settings_data.json     # Default setting values
├── design_system/      # Component documentation
│   ├── COMPONENT_*.md  # Individual component docs
│   └── DESIGN_SYSTEM.md       # Main design system reference
├── layout/             # Root HTML wrappers
│   ├── theme.liquid    # Main layout template
│   └── password.liquid # Password page layout
├── locales/            # Translation files
│   ├── default.json    # English translations
│   ├── nl.json         # Dutch translations
│   └── de.json         # German translations
├── refference_design/  # UI component reference docs
│   ├── ACCESIBILITY_GUIDELINES.md
│   ├── BUTTON_COMPONENT.md
│   ├── CARD_COMPONENT.md
│   └── ... (30+ component docs)
├── sections/           # Full-width page components
│   ├── 404.liquid      # 404 error page
│   ├── about.liquid    # About page section
│   ├── article.liquid  # Article layout
│   ├── blog-preview.liquid     # Blog preview grid
│   ├── cart.liquid     # Cart page
│   ├── collection-grid.liquid  # Collection product grid
│   ├── collection-header.liquid # Collection header
│   ├── collection-toolbar.liquid # Collection filters
│   ├── collections.liquid # Collections listing
│   ├── customer-account.liquid # Account dashboard
│   ├── customer-addresses.liquid # Address management
│   ├── customer-login.liquid # Login page
│   ├── customer-order.liquid # Order details
│   ├── customer-register.liquid # Registration form
│   ├── featured-collections.liquid # Featured collections grid
│   ├── featured-offers.liquid # Promotional offers
│   ├── featured-products.liquid # Featured products grid
│   ├── features.liquid # Feature blocks
│   ├── footer-group.json # Footer columns config
│   ├── footer.liquid   # Main footer
│   ├── header-group.json # Header sections config
│   ├── header.liquid   # Main header (logo, nav)
│   ├── hero.liquid     # Hero section
│   ├── image-with-text.liquid # Image + text layout
│   ├── main-article.liquid # Article content
│   ├── main-blog.liquid # Blog listing
│   ├── main-contact.liquid # Contact page
│   ├── main-list-blogs.liquid # Multiple blogs listing
│   ├── main-list-collections.liquid # Collections grid
│   ├── new-arrivals.liquid # New products section
│   ├── newest-products.liquid # Recently added products
│   ├── newsletter.liquid # Email signup form
│   ├── page.liquid     # Generic page layout
│   ├── password.liquid # Password page
│   ├── popular-tags.liquid # Tag cloud filter
│   ├── predictive-search.liquid # Search suggestions
│   ├── product-context.liquid # Product meta info
│   ├── product-details.liquid # Product details tab
│   ├── product-main.liquid # Main product content
│   ├── product.liquid  # Product layout
│   ├── promo-block.liquid # Promotional block
│   ├── related-products.liquid # Related products grid
│   └── ... (40+ sections total)
├── snippets/           # Reusable Liquid fragments
│   ├── ambient-scene-layer.liquid # 3D scene layer
│   ├── article-card-compact.liquid # Compact blog card
│   ├── article-card-large.liquid # Large blog card
│   ├── article-card-masonry.liquid # Masonry blog grid
│   ├── article-card.liquid # Standard blog card
│   ├── badge.liquid    # Badge component
│   ├── blog-preview-card.liquid # Blog preview card
│   ├── breadcrumb.liquid # Breadcrumb navigation
│   ├── button.liquid   # Button component
│   ├── card.liquid     # Card component
│   ├── cart-drawer.liquid # Slide-out cart
│   ├── cookie-banner.liquid # Cookie consent
│   ├── favicon.liquid  # Favicon markup
│   ├── filters.liquid  # Filter controls
│   ├── icon.liquid     # Icon library
│   ├── input.liquid    # Form input
│   ├── modal.liquid    # Modal dialog
│   ├── pagination.liquid # Pagination controls
│   ├── product-card.liquid # Product card
│   ├── radio.liquid    # Radio button
│   ├── select.liquid   # Dropdown select
│   ├── social-icons.liquid # Social media links
│   ├── textarea.liquid # Text area input
│   ├── toast.liquid    # Toast notification
│   └── ... (26+ snippets total)
└── templates/          # JSON template files
    ├── 404.json
    ├── article.json
    ├── blog.json
    ├── cart.json
    ├── collection.json
    ├── customers
    │   ├── account.json
    │   ├── activate_account.json
    │   ├── addresses.json
    │   ├── login.json
    │   ├── order.json
    │   └── register.json
    ├── gift_card.json
    ├── index.json
    ├── list-collections.json
    ├── page.about.json
    ├── page.contact.json
    ├── page.faq.json
    ├── page.json
    ├── password.json
    ├── product.json
    └── search.json
```

## File Types Explained

### Liquid Files (`.liquid`)

Shopify template files that combine HTML with Liquid templating language.

**Example:**
```liquid
{% comment %} sections/hero.liquid {% endcomment %}
<div class="hero">
  <h1>{{ section.settings.headline }}</h1>
  <p>{{ section.settings.description }}</p>
  <a href="{{ section.settings.button_url }}" class="button">
    {{ section.settings.button_label }}
  </a>
</div>

{% schema %}
{
  "name": "Hero",
  "settings": [
    {
      "type": "text",
      "id": "headline",
      "label": "Headline"
    }
  ]
}
{% endschema %}
```

### JSON Templates

Define which sections appear on each page type and in what order.

**Example:**
```json
{
  "sections": {
    "hero": {
      "type": "hero",
      "settings": {
        "headline": "Welcome to Warforge"
      }
    },
    "featured-products": {
      "type": "featured-products",
      "settings": {
        "limit": 8
      }
    }
  },
  "order": ["hero", "featured-products"]
}
```

### Schema JSON

Configuration blocks inside section files that define editable settings.

**Example:**
```json
{% schema %}
{
  "name": "Featured Products",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Heading",
      "default": "Featured Products"
    },
    {
      "type": "range",
      "id": "limit",
      "min": 2,
      "max": 12,
      "step": 2,
      "label": "Products",
      "default": 8
    }
  ],
  "presets": [
    {
      "name": "Featured Products"
    }
  ]
}
{% endschema %}
```

## How Files Relate

### Template → Sections → Snippets

```
templates/index.json
  └── sections/hero.liquid
      └── snippets/button.liquid
  └── sections/featured-products.liquid
      └── snippets/product-card.liquid
  └── sections/newsletter.liquid
      └── snippets/input.liquid
```

### Layout Wraps Everything

```
layout/theme.liquid
  └── {{ content_for_header }}
  └── {{ content_for_layout }} (all template sections render here)
  └── Footer snippets
```

## Related Documentation

- [Sections](./sections) — Complete section reference
- [Snippets](./snippets) — Complete snippet reference
- [Templates](./templates) — Template configuration guide
