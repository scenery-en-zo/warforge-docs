---
id: advanced-advanced-advanced-performance
title: Performance
sidebar_label: 'Performance'
---

# Performance Optimization

This guide covers performance best practices for the Warforge theme, including image optimization, code splitting, and resource management.

## Image Optimization

### Recommended Image Sizes

| Type | Max Width | Format | Quality |
|------|-----------|--------|---------|
| Product images | 2048px | WebP/AVIF | 90-95% |
| Collection banners | 2400px | WebP/AVIF | 85-90% |
| Hero backgrounds | Fixed aspect ratio | WebP/AVIF | 80-85% |
| Icons | 32x32, 64x64, 128x128 | SVG | N/A |

### Liquid Image Optimization

```liquid
<img 
  src="{{ product.featured_media | image_url: width: 600, height: 600 }}"
  alt="{{ product.title | escape }}"
  loading="lazy"
>

<!-- Responsive images -->
<picture>
  <source 
    type="image/avif" 
    srcset="{{ product.featured_media | image_url: width: 750, format: 'avif' }}"
  >
  <source 
    type="image/webp" 
    srcset="{{ product.featured_media | image_url: width: 750, format: 'webp' }}"
  >
  <img 
    src="{{ product.featured_media | image_url: width: 750 }}"
    alt="{{ product.title | escape }}"
  >
</picture>
```

### Lazy Loading

```liquid
<!-- Native lazy loading -->
<img 
  src="{{ blog.article.image | image_url: width: 600 }}"
  alt="{{ blog.article.title | escape }}"
  loading="lazy"
>

<!-- With placeholder -->
<div class="image-container">
  <img 
    data-src="{{ product.featured_media | image_url: width: 600 }}"
    alt="{{ product.title | escape }}"
    class="lazy-load"
  >
</div>
```

## Code Splitting

### Dynamic Imports

```javascript
// Load heavy scripts only when needed
const CartDrawer = () => import('/cart-drawer.js').then(module => module.CartDrawer);

const QuickViewModal = () => import('/quick-view-modal.js').then(module => module.QuickViewModal);

// Initialize on button click instead of page load
document.querySelector('.quick-view-btn').addEventListener('click', () => {
  CartDrawer().then(drawer => drawer.init());
});
```

### WebGL Effects Loading

```javascript
// Load WebGL effects after DOM ready
window.addEventListener('load', () => {
  setTimeout(() => {
    import('/hero-webgl.js').then(module => module.initWebGLEffects());
  }, 500); // Delay to allow critical content to render
});
```

## Resource Management

### Critical CSS

Extract critical CSS for above-the-fold content:

```liquid
<!-- In layout/theme.liquid -->
<link rel="preload" href="{{ 'critical.css' | asset_url }}" as="style">
<link rel="stylesheet" href="{{ 'theme.css' | asset_url }}" media="print" onload="this.media='all'">
```

### Font Loading

Preload critical fonts:

```liquid
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet">
```

## Performance Monitoring

### Key Metrics to Track

- **First Contentful Paint (FCP)** — Should be < 1.8s
- **Largest Contentful Paint (LCP)** — Should be < 2.5s
- **Cumulative Layout Shift (CLS)** — Should be < 0.1
- **Time to Interactive (TTI)** — Should be < 3.8s

### Shopify Analytics Setup

```liquid
<!-- In layout/theme.liquid -->
<script>
  window.dataLayer = window.dataLayer || [];
  
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-XXXXXXXXXX', {
    page_path: location.pathname,
    send_page_view: true
  });
</script>
```

## Common Performance Issues

### Avoid These Patterns

```liquid
<!-- ❌ Inline styles with dynamic images -->
<div style="background-image: url('{{ product.featured_media | image_url }}'); width: 100%; height: 600px;">
  
<!-- ✅ Use CSS classes -->
<div class="product-hero" style="background-image: url('{{ product.featured_media | image_url: width: 1200 }}')">
```

### Optimize These Areas

```javascript
// ✅ Throttle scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    // Handle scroll
  }, 100);
});

// ✅ Use requestAnimationFrame for animations
let animationFrame;
function animate() {
  update();
  animationFrame = requestAnimationFrame(animate);
}

// ✅ Throttle expensive operations
function throttle(fn, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```

## Related Documentation

- [Liquid Filters](./advanced-liquid-filters) — Efficient filtering techniques
- [Metafields](./advanced-metafields) — Optimized metafield usage
