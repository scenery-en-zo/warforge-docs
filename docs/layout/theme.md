---
id: layout-theme
title: Theme Layout
sidebar_label: 'Theme'
---

# Theme Layout

**File:** `layout/theme.liquid`

The theme layout is the master template that wraps all pages with the HTML structure, head elements, and global scripts.

## Structure

```html
<!doctype html>
<html lang="{{ request.locale.iso_code }}">
  <head>
    {% render 'css-variables' %}
    {{ 'critical.css' | asset_url | stylesheet_tag: preload: true }}
    {% render 'meta-tags' %}
    <link rel="icon" ...>
    {{ content_for_header }}
  </head>
  
  <body>
    <a href="#MainContent" class="skip-link">Skip to content</a>
    
    {% section 'header' %}
    
    <main id="MainContent">
      {{ content_for_layout }}
    </main>
    
    {% section 'footer' %}
    
    {% render 'cookie-banner' %}
  </body>
</html>
```

## Features

- ✅ HTML5 doctype with language attribute
- ✅ CSS variable injection from theme settings
- ✅ Critical CSS preloading
- ✅ Meta tags for SEO and social sharing
- ✅ Favicon and apple-touch-icon
- ✅ Shopify header injection (`content_for_header`)
- ✅ Skip to content link (accessibility)
- ✅ Privacy banner styling (WCAG AAA compliant)
- ✅ Mobile viewport optimization

## Head Elements

| Element | Purpose |
|---------|---------|
| `css-variables` | Theme design system variables |
| `critical.css` | Above-the-fold styles |
| `meta-tags` | SEO, Open Graph, Twitter Cards |
| `favicon` | Browser tab icon |
| `content_for_header` | Shopify admin bar, scripts |

## Privacy Banner

Custom styling for Shopify's privacy banner:

```css
:root, html, body, #shopify-privacy-banner {
  --shopify-privacy-banner-background-color: #1a1f2b !important;
  --shopify-privacy-banner-text-color: #ffffff !important;
  --shopify-privacy-banner-primary-button-background-color: #ff8b00 !important;
  --shopify-privacy-banner-primary-button-text-color: #0a0e16 !important;
}
```

## Accessibility

- Skip link for keyboard navigation
- Proper language attribute
- Semantic HTML structure
- ARIA landmarks

## Related

- [CSS Variables](./snippets-css-variables) - Design tokens
- [Meta Tags](./snippets-meta-tags) - SEO meta
- [Header Section](./sections-header) - Site header
- [Footer Section](./sections-footer) - Site footer
