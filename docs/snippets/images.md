---
id: snippets-images
title: Images
sidebar_label: Images
---

# Image Snippet

**File:** `snippets/image.liquid`

The image snippet renders responsive images with optional linking and aspect ratio cropping.

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
