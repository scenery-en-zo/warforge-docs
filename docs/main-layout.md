---
id: main-layout
title: Main Layout Sections
sidebar_label: 'Main Layout'
---

# Main Layout Sections

The main layout sections define the overall page structure for different page types in the Warforge theme. These are the primary container sections that wrap content and set up the page skeleton.

## Visual Examples

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px'}}>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', marginBottom: '12px', color: '#F8FAFC'}}>Homepage</h4>
    <p style={{color: '#94A3B8', fontSize: '12px', lineHeight: '1.6'}}>Main layout section for the homepage with hero, features, and content sections.</p>
  </div>
  
  <div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px'}}>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', marginBottom: '12px', color: '#F8FAFC'}}>Collection Page</h4>
    <p style={{color: '#94A3B8', fontSize: '12px', lineHeight: '1.6'}}>Layout for product collections with filters, grid, and pagination.</p>
  </div>
  
  <div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px'}}>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', marginBottom: '12px', color: '#F8FAFC'}}>Product Page</h4>
    <p style={{color: '#94A3B8', fontSize: '12px', lineHeight: '1.6'}}>Layout for individual product pages with image gallery and details.</p>
  </div>
  
  <div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px'}}>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', marginBottom: '12px', color: '#F8FAFC'}}>Blog Post</h4>
    <p style={{color: '#94A3B8', fontSize: '12px', lineHeight: '1.6'}}>Layout for blog articles with content and related posts.</p>
  </div>
</div>

## Component Overview

Main layout sections are the primary containers that define page structure:

- **main-home** — Homepage layout
- **main-collection** — Collection/listing pages
- **main-product** — Product detail pages  
- **main-article** — Blog/article pages
- **main-page** — Static pages (about, contact, etc.)

## Layout Sections

### main-home (Homepage)

Used for the homepage with hero sections, features, and content blocks.

```liquid
{% section 'main-home' %}
```

**Contains:**
- Hero section (WebGL effects)
- Feature blocks (shipping, quality, delivery)
- Featured products carousel
- Newsletter signup
- Footer

### main-collection (Collection Pages)

Used for all collection and category pages.

```liquid
{% section 'main-collection' %}
```

**Contains:**
- Collection header (title, description)
- Filter toolbar (category/brand filters)
- Product grid
- Pagination footer
- Related products

### main-product (Product Pages)

Used for individual product detail pages.

```liquid
{% section 'main-product' %}
```

**Contains:**
- Image gallery with zoom
- Product title and price
- Variant selectors (size, color)
- Quantity selector
- Add to cart button
- Product description
- Reviews section
- Related products

### main-article (Blog/Article Pages)

Used for blog posts and articles.

```liquid
{% section 'main-article' %}
```

**Contains:**
- Article header (title, date, author)
- Article content
- Image gallery
- Related articles
- Comments section

### main-page (Static Pages)

Used for static pages like About, Contact, FAQ.

```liquid
{% section 'main-page' %}
```

**Contains:**
- Page header
- Page content
- Call-to-action blocks
- Footer

## Parameters

Main layout sections generally do not have parameters as they are structural containers. However, they can include child sections that are configurable:

### Featured Products Section

```liquid
{% render 'section-featured-products', 
  limit: 4,
  sort_by: 'best-selling'
%}
```

### Newsletter Section

```liquid
{% render 'section-newsletter', 
  form_action: '/pages/newsletter',
  show_header: true
%}
```

## Related Sections

- [Hero](./hero) — Hero section with WebGL effects
- [Featured Products](./featured-products) — Product carousel
- [Newsletter](./newsletter) — Email signup form
- [Features](./features) — Feature blocks (shipping, quality, etc.)
