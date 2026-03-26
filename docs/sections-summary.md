---
id: sections-summary
title: All Sections
sidebar_label: 'All Sections'
---

# All Sections Summary

This page lists all available sections in the Warforge theme with brief descriptions.

## Layout Sections

### Main Layout Sections

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `main-home` | Homepage layout structure | `{% section 'main-home' %}` |
| `main-collection` | Collection page layout | `{% section 'main-collection' %}` |
| `main-product` | Product detail layout | `{% section 'main-product' %}` |
| `main-article` | Blog/article layout | `{% section 'main-article' %}` |
| `main-page` | Static page layout | `{% section 'main-page' %}` |

### Header & Navigation

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `header` | Main header with nav and cart | `{% section 'header' %}` |
| `header-mobile` | Mobile header with hamburger | `{% section 'header-mobile' %}` |
| `navigation` | Main navigation menu | `{%!-- Liquid render example --%}'navigation' %}` |

### Hero & Featured Content

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `hero-webgl` | Hero with WebGL effects | `{% section 'hero-webgl' %}` |
| `hero-product` | Product showcase hero | `{% section 'hero-product', product_id: id %}` |
| `hero-text` | Text-only hero | `{% section 'hero-text' %}` |
| `featured-products` | Featured products carousel | `{% section 'featured-products' %}` |
| `new-arrivals` | New arrivals grid | `{% section 'new-arrivals' %}` |
| `bestsellers` | Bestsellers carousel | `{% section 'bestsellers' %}` |

### Feature Blocks

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `features` | Features grid (shipping, quality) | `{% section 'features' %}` |
| `features-alternating` | Alternating layout features | `{% section 'features-alternating' %}` |

### Newsletter & Engagement

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `newsletter` | Newsletter signup form | `{% section 'newsletter' %}` |
| `newsletter-benefits` | Newsletter with benefits list | `{% section 'newsletter-benefits' %}` |
| `newsletter-footer` | Compact footer newsletter | `{% section 'newsletter-footer' %}` |

### Footer

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `footer` | Full footer with all sections | `{% section 'footer' %}` |
| `footer-minimal` | Minimal footer | `{% section 'footer-minimal' %}` |
| `footer-payment` | Footer with payment icons | `{% section 'footer-payment' %}` |

## Product Sections

### Product Grid

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `product-grid-standard` | Standard product grid | `
<!-- Liquid example -->'section-product-grid', limit: 12 %}```` |
| `product-grid-compact` | Compact product grid | `
<!-- Liquid example -->'section-product-grid', compact: true %}```` |
| `product-grid-carousel` | Carousel product grid | `
<!-- Liquid example -->'section-product-grid', carousel: true %}```` |

### Product Details

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `product-details-gallery` | Image gallery section | `{%!-- Liquid render example --%}'section-product-gallery' %}` |
| `product-details-info` | Product info and pricing | `
<!-- Liquid example -->'section-product-info', product: product %}```` |
| `product-details-variants` | Variant selectors | `{%!-- Liquid render example --%}'section-product-variants' %}` |
| `product-details-addtocart` | Add to cart button | `{%!-- Liquid render example --%}'section-add-to-cart' %}` |

### Reviews & Social Proof

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `reviews-section` | Product reviews display | `
<!-- Liquid example -->'section-reviews', review_count: count %}```` |
| `reviews-rating-stars` | Star rating display | `
<!-- Liquid example -->'section-rating-stars', average_rating: 4.5 %}```` |
| `social-proof-trustpilot` | Trustpilot widget | `{%!-- Liquid render example --%}'section-trustpilot' %}` |

### Related Products

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `related-products-carousel` | Related products slider | `{%!-- Liquid render example --%}'section-related-products' %}` |
| `frequently-bought-together` | FBT bundle display | `{%!-- Liquid render example --%}'section-fbt' %}` |

## Collection Sections

### Collection Header

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `collection-header-simple` | Simple collection header | `{%!-- Liquid render example --%}'section-collection-header' %}` |
| `collection-header-hero` | Hero-style collection header | `{%!-- Liquid render example --%}'section-collection-hero' %}` |

### Collection Filter

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `collection-filter-sidebar` | Sidebar filter section | `{%!-- Liquid render example --%}'section-collection-filters' %}` |
| `collection-filter-toolbar` | Top toolbar filters | `{%!-- Liquid render example --%}'section-filter-toolbar' %}` |
| `collection-filter-mega-menu` | Mega menu filters | `{%!-- Liquid render example --%}'section-filter-mega-menu' %}` |

### Collection Footer

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `collection-footer-pagination` | Pagination footer | `{%!-- Liquid render example --%}'section-collection-footer' %}` |
| `collection-footer-related` | Related collections | `{%!-- Liquid render example --%}'section-related-collections' %}` |

## Blog Sections

### Article Header

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `article-header` | Article title and metadata | `
<!-- Liquid example -->'section-article-header', article: article %}```` |
| `article-hero-image` | Hero image for article | `{%!-- Liquid render example --%}'section-article-hero' %}` |

### Article Content

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `article-content` | Main article content | `{%!-- Liquid render example --%}'section-article-content' %}` |
| `article-gallery` | Image gallery in article | `{%!-- Liquid render example --%}'section-article-gallery' %}` |

### Article Footer

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `article-footer-related` | Related articles | `{%!-- Liquid render example --%}'section-related-articles' %}` |
| `article-footer-social-share` | Social share buttons | `{%!-- Liquid render example --%}'section-article-shares' %}` |

## Page Sections

### About Page

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `about-hero` | About page hero image | `{%!-- Liquid render example --%}'section-about-hero' %}` |
| `about-mission-vision-values` | Mission/vision/values blocks | `{%!-- Liquid render example --%}'section-about-mvvc' %}` |
| `about-team` | Team member cards | `{%!-- Liquid render example --%}'section-about-team' %}` |

### Contact Page

| Section | Description | Usage Example |
|---------|-------------|---------------|
| `contact-form` | Contact form | `{%!-- Liquid render example --%}'section-contact-form' %}` |
| `contact-info-blocks` | Info blocks (email, phone) | `{%!-- Liquid render example --%}'section-contact-info' %}` |
| `contact-social-links` | Social media links | `{%!-- Liquid render example --%}'section-contact-social' %}` |

## Related Documentation

- [Components](../design-system) — All component documentation
- [Snippets](./snippets) — All snippet documentation
- [Templates](./templates) — Template files overview

