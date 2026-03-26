---
id: introduction
title: Introduction
sidebar_label: 'Introduction'
hide_title: true
---

# Warforge Theme Documentation

Welcome to the complete documentation for the Warforge Shopify theme! This documentation is designed to help you customize and extend your online store with a professional tabletop gaming supply brand.

## Quick Start Guide

### 1. Understanding the Structure

The Warforge theme follows Shopify's Liquid templating system:

```
theme/
├── assets/          # CSS, JS, images
├── config/          # Settings files
├── layouts/         # Layout templates
├── sections/        # Reusable sections
├── snippets/        # Small code blocks
└── templates/       # Page templates
```
### 2. Key Files to Know

| File | Purpose |
|------|---------|
| `config/settings_schema.json` | Theme settings editor |
| `config/settings_data.json` | Default setting values |
| `layout/theme.```liquid` | Main layout wrapper |
| `assets/theme.css` | Theme styles |
| `assets/theme.js` | Theme JavaScript |

### 3. Customization Workflow

1. **Edit Settings** — Use Shopify's theme editor for colors, fonts, images
2. **Modify Sections** — Reorder/replace sections in ```liquid files
3. **Add Snippets** — Create reusable code blocks
4. **Create Pages** — Add content via Shopify admin

## Documentation Structure

This documentation is organized into the following sections:

### Components

Individual UI elements and their usage:

- [Buttons](./buttons) — Button component with variants
- [Badges](./badges) — Badge labels and tags
- [Icons](./icons) — SVG icon library
- [Inputs](./inputs) — Form input fields
- [Textareas](./textareas) — Multi-line text inputs
- [Checkboxes](./checkboxes) — Checkbox controls
- [Radios](./radios) — Radio button groups
- [Alerts](./alerts) — Alert messages
- [Toasts](./toasts) — Toast notifications

### Sections

Page sections and layout components:

- [Main Layout](./main-layout) — Page structure sections
- [Header](./header) — Site header navigation
- [Footer](./footer) — Site footer links
- [Hero](./hero) — Hero section with WebGL
- [Featured Products](./featured-products) — Product carousels
- [Newsletter](./newsletter) — Email signup forms
- [Features](./features) — Feature blocks

### Snippets

Reusable code blocks:

- [Breadcrumbs](./breadcrumbs) — Navigation breadcrumbs
- [Pagination](./pagination) — Product grid pagination
- [Cookie Banner](./cookie-banner) — Cookie consent modal
- [Sort Dropdown](./sort-dropdown) — Product sorting
- [Filters](./filters) — Product filtering
- [Cart Drawer](../modals) — Shopping cart drawer

### Templates

Page layout templates:

- [Homepage](./templates) — Index page structure
- [Collections](./templates) — Collection grid pages
- [Products](./templates) — Product detail pages
- [Blog](./templates) — Article/blog pages
- [Static Pages](./pages-about) — About, contact, etc.

### Page Types

Content page templates:

- [About Page](./pages-about) — Company information
- [Contact Page](./pages-contact) — Contact form
- [Cart Page](./page./pages-cart) — Shopping cart
- [Account Page](./page./pages-account) — Customer account

### Advanced Topics

Technical implementation guides:

- [Liquid Filters](./advanced-liquid-filters) — Liquid filter reference
- [Metafields](./advanced-metafields) — Custom data fields
- [WebGL Effects](./advanced-webgl-effects) — Three.js effects
- [Performance](./advanced-performance) — Optimization tips

## Getting Started

### Installing the Theme

1. Go to Shopify Admin → Online Store → Themes
2. Click "Add theme" → "Browse theme store"
3. Search for "Warforge"
4. Click "Add" and then "Publish"

### Using the Theme Editor

1. Go to Online Store → Themes → Customize
2. Use the left sidebar to select sections
3. Edit content in the right panel
4. Preview changes in real-time
5. Save when satisfied

### Adding Content Pages

1. Go to Online Store → Pages
2. Click "Add page"
3. Enter title and content
4. Select layout from template dropdown
5. Click "Save"

## Theme Features

### Design System

- **Typography**: Cinzel (serif), Inter (sans-serif)
- **Colors**: Dark theme with accent colors
- **Layout**: Responsive grid system
- **Animations**: Smooth transitions and WebGL effects

### Key Features

- ✅ WebGL 3D effects (floating dice, ember particles)
- ✅ Product image galleries with zoom
- ✅ Shopping cart drawer
- ✅ Quick view modals
- ✅ Customer account pages
- ✅ Blog integration
- ✅ SEO optimized
- ✅ Mobile responsive

### Performance

- Optimized images with lazy loading
- Code-splitting for heavy scripts
- WebGL effects load after critical content
- Minimal JavaScript footprint

## Support & Resources

### Documentation Links

- [Components](./design-system) — UI element reference
- [Sections](./sections-summary) — Section components
- [Snippets](./snippets-summary) — Snippet reference
- [Templates](./templates) — Template files
- [Page Types](./pages-summary) — Page templates
- [Advanced Topics](./advanced-liquid-filters) — Technical guides

### Shopify Resources

- [Shopify Theme Documentation](https://shopify.dev/themes)
- [Liquid Language Guide](https://shopify.dev/docs/themes/```liquid)
- [Storefront API](https://shopify.dev/docs/api/storefront)

### Getting Help

1. Check the documentation first
2. Review Shopify's theme docs
3. Contact support for technical issues
4. Report bugs on GitHub

## License & Credits

The Warforge theme is built with:

- **Shopify** — E-commerce platform
- **Three.js** — WebGL 3D graphics
- **GSAP** — Animation library
- **Font Awesome** — Icon library (via CDN)

---

<div style={{backgroundColor: '#2C3B52', borderRadius: '12px', padding: '24px', marginTop: '32px'}}>
  <h3 style={{fontFamily: "Cinzel, serif", fontSize: '18px', color: '#F8FAFC', marginBottom: '12px'}}>Ready to Customize?</h3>
  <p style={{color: '#94A3B8', fontSize: '14px', lineHeight: '1.6', margin: '0 0 16px 0'}}>Start by exploring the components and sections available in your theme.</p>
  
  
<!-- Liquid example -->'button', 
    label: 'View Components',
    href: './design-system',
    style: 'primary'
  %}```
</div>

