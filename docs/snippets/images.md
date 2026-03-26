---
id: snippets-images
title: Images
sidebar_label: 'Images'
---

# Image Snippet

**File:** `snippets/image.liquid`

The image snippet renders responsive images with optional linking and aspect ratio cropping.

## Visual Example

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;">
  <div class="image">
    <div style="aspect-ratio:4/3;background:var(--bg-950);border-radius:var(--radius-md);overflow:hidden;">
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
        <svg viewBox="0 0 24 24" style="width:64px;height:64px;opacity:0.3;fill:var(--bg-700);"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21" stroke="var(--bg-600)" stroke-width="2" fill="none"/></svg>
      </div>
    </div>
  </div>
  <a href="#" class="image">
    <div style="aspect-ratio:16/9;background:var(--bg-950);border-radius:var(--radius-md);overflow:hidden;">
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
        <svg viewBox="0 0 24 24" style="width:64px;height:64px;opacity:0.3;fill:var(--bg-700);"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21" stroke="var(--bg-600)" stroke-width="2" fill="none"/></svg>
      </div>
    </div>
  </a>
</div>

## Usage

```liquid
{# Basic image #}
{% render 'image', image: product.featured_image %}

{# Linked image #}
{% render 'image', image: product.featured_image, url: product.url %}

{# Cropped image with specific dimensions #}
{% render 'image',
  image: product.featured_image,
  url: product.url,
  width: 1200,
  height: 800,
  crop: 'center',
  class: 'product__image'
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `image` | Object | Required | Shopify image object |
| `url` | String | - | Optional destination URL |
| `class` | String | - | Additional CSS classes |
| `width` | Number | Image width | Max resolution width |
| `height` | Number | Image height | Max resolution height |
| `crop` | String | - | Crop position (center, top, bottom, left, right) |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.image` | Image wrapper (div or a tag) |

## Features

- ✅ Responsive image with `image_url` filter
- ✅ Optional link wrapper
- ✅ Aspect ratio cropping
- ✅ Lazy loading support
- ✅ Automatic srcset generation

## Related

- [Product Cards](./snippets-product-cards) - Product images
- [Article Cards](./snippets-article-cards) - Blog post images
