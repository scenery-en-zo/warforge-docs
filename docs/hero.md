---
id: hero
title: Hero Section
sidebar_label: 'Hero'
---

# Hero Section

The hero section is the prominent top section of the homepage featuring WebGL 3D effects (floating dice, ember particles), product showcases, and call-to-action buttons.

## Visual Examples

<div style={{background: 'linear-gradient(180deg, #1A2033 0%, #0A0E16 100%)', borderRadius: '8px', padding: '48px', marginBottom: '24px', position: 'relative', overflow: 'hidden', minHeight: '300px'}}>
  <div style={{position: 'relative', zIndex: '1'}}>
    <h1 style={{fontFamily: 'Cinzel, serif', fontSize: '48px', color: '#F8FAFC', margin: '0 0 16px 0', lineHeight: '1.1'}}>Premium Tabletop Gaming Supplies</h1>
    <p style={{color: '#94A3B8', fontSize: '18px', lineHeight: '1.6', margin: '0 0 24px 0', maxWidth: '500px'}}>Discover our curated collection of miniature bases, terrain pieces, paints, and tools for your tabletop gaming setup.</p>
    <div style={{display: 'flex', gap: '16px'}}>
      <button style={{backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', padding: '14px 28px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '16px'}}>Shop Now</button>
      <button style={{backgroundColor: 'transparent', color: '#F8FAFC', border: '1px solid #3B4A61', padding: '14px 28px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '16px'}}>View Collections</button>
    </div>
  </div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px'}}>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', marginBottom: '12px'}}>Hero with Product</h4>
    <p style={{color: '#94A3B8', fontSize: '12px', lineHeight: '1.6'}}>Hero section showcasing a featured product with add-to-cart button.</p>
  </div>
  
  <div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px'}}>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', marginBottom: '12px'}}>Hero with Text</h4>
    <p style={{color: '#94A3B8', fontSize: '12px', lineHeight: '1.6'}}>Simple hero section with headline and description only.</p>
  </div>
  
  <div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px'}}>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', marginBottom: '12px'}}>Hero with Video</h4>
    <p style={{color: '#94A3B8', fontSize: '12px', lineHeight: '1.6'}}>Hero section with background video loop.</p>
  </div>
  
  <div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px'}}>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', marginBottom: '12px'}}>Full Width Hero</h4>
    <p style={{color: '#94A3B8', fontSize: '12px', lineHeight: '1.6'}}>Full-width hero spanning entire page width.</p>
  </div>
</div>

## Component Overview

The hero section makes a strong first impression with:

- **WebGL Effects** — Floating dice, ember particles (Three.js powered)
- **Product Showcase** — Featured product or collection highlight
- **Headline** — Compelling value proposition
- **Call-to-Action Buttons** — Primary and secondary CTAs
- **Background Options** — Static image, video, or WebGL canvas

## Hero Types

### Standard Hero with WebGL

Full hero with animated dice particles:

```liquid
{% section 'hero-webgl' %}
```

**Elements:**
- WebGL canvas with floating dice
- Headline and description
- Primary CTA button
- Secondary CTA button

### Product Showcase Hero

Hero featuring a specific product:

```liquid
{% section 'hero-product', 
   product_id: '67890' 
%}
```

**Elements:**
- Product image (with zoom)
- Product title and price
- Short description
- Add to cart button

### Text Only Hero

Simple hero with text and buttons:

```liquid
{% section 'hero-text', 
  headline: 'Welcome to Warforge',
  description: 'Premium tabletop gaming supplies.',
  show_video: false
%}
```

### Video Background Hero

Hero with background video loop:

```liquid
{% section 'hero-video', 
  video_url: '/videos/ember-loop.mp4'
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | Select | `webgl` | Hero type: `webgl`, `product`, `text`, `video` |
| `headline` | String | — | Headline text (for text-only heroes) |
| `description` | String | — | Description text (for text-only heroes) |
| `product_id` | String | — | Product ID for product showcase heroes |
| `show_video` | Boolean | `false` | Enable video background |
| `video_url` | URL | — | Video file path for video backgrounds |

## Usage Examples

### Standard WebGL Hero

```liquid
{% render 'section-hero', 
  type: 'webgl',
  headline: 'Premium Tabletop Gaming Supplies',
  description: 'Discover our curated collection of miniature bases, terrain pieces, paints, and tools.',
  primary_button: { label: 'Shop Now', href: '/collections/all' },
  secondary_button: { label: 'View Collections', href: '/collections' }
%}
```

### Product Showcase Hero

```liquid
{% render 'section-hero', 
  type: 'product',
  product_id: '67890',
  show_webgl: true
%}
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.hero` | Hero container |
| `.hero__webgl-canvas` | WebGL effects canvas |
| `.hero__video-background` | Video background element |
| `.hero__content` | Hero content wrapper |
| `.hero__button--primary` | Primary CTA button |
| `.hero__button--secondary` | Secondary CTA button |

## Accessibility

- WebGL canvas has aria-hidden="true" (decorative)
- Video backgrounds include audio controls or are muted
- All buttons have proper labels and focus states
- Screen readers announce hero content correctly
- Keyboard navigation supported on all interactive elements

## Related Sections

- [Header](./header) — Header section above hero
- [Featured Products](./featured-products) — Products below hero
- [Newsletter](./newsletter) — Newsletter signup after hero
