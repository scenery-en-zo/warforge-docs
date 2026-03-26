---
id: snippets-images
title: Images
sidebar_label: Images
---

# Image Snippet

**File:** `snippets/image.liquid`

Responsive images with aspect ratio cropping.

## Visual Example

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', padding: '24px', backgroundColor: 'var(--bg-900)', borderRadius: '12px'}}>
  <div className="image">
    <div style={{aspectRatio: '4/3', backgroundColor: 'var(--bg-800)', borderRadius: 'var(--radius-md)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: '40px', height: '40px', backgroundColor: 'var(--bg-700)', borderRadius: '4px'}}></div>
    </div>
  </div>
  <div className="image">
    <div style={{aspectRatio: '16/9', backgroundColor: 'var(--bg-800)', borderRadius: 'var(--radius-md)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: '40px', height: '40px', backgroundColor: 'var(--bg-700)', borderRadius: '4px'}}></div>
    </div>
  </div>
</div>

## Usage

```liquid
{% render 'image', image: product.featured_image %}
```

## Related

- [Product Cards](./snippets-product-cards) - Product images
- [Article Cards](./snippets-article-cards) - Blog images
