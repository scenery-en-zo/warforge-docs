---
id: layout-index
title: Layout Overview
sidebar_label: 'Overview'
---

# Layout

Layout files are the master templates that wrap all pages. They define the HTML structure and include global elements like header, footer, and scripts.

## Available Layouts

- [Theme](./layout-theme) - Main theme layout (`theme.liquid`)
- Password - Password page layout (`password.liquid`)

## Structure

```html
<!doctype html>
<html lang="{{ request.locale.iso_code }}">
  <head>
    <!-- Meta tags, CSS, etc. -->
    {{ content_for_header }}
  </head>
  <body>
    {% section 'header' %}
    <main id="MainContent">
      {{ content_for_layout }}
    </main>
    {% section 'footer' %}
  </body>
</html>
```

## Key Elements

| Element | Purpose |
|---------|---------|
| `content_for_header` | Shopify admin injection |
| `content_for_layout` | Page content |
| `section` | Include sections |
| `render` | Include snippets |

## Related

- [Templates](./templates-index) - Page templates
- [Sections](./sections-index) - Page sections
