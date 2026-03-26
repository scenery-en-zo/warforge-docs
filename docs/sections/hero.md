---
id: sections-hero
title: Hero
sidebar_label: 'Hero'
---

# Hero Section

**File:** `sections/hero.liquid`

The hero section renders a full-width hero banner with optional 3D particle effects, background images, and layered content.

## Visual Example

<div style="background:linear-gradient(135deg,#1a1e28,#0a0e16);border-radius:var(--radius-lg);padding:80px 40px;text-align:center;position:relative;overflow:hidden;border:1px solid var(--bg-700);">
  <div style="position:absolute;inset:0;opacity:0.3;">
    <div style="position:absolute;top:20%;left:30%;width:4px;height:4px;background:#ff8b00;border-radius:50%;animation:pulse 2s infinite;"></div>
    <div style="position:absolute;top:40%;left:60%;width:3px;height:3px;background:#ff8b00;border-radius:50%;animation:pulse 3s infinite;"></div>
    <div style="position:absolute;top:60%;left:40%;width:2px;height:2px;background:#ff8b00;border-radius:50%;animation:pulse 2.5s infinite;"></div>
  </div>
  <h1 style="font-family:var(--font-display);font-size:48px;margin-bottom:16px;color:white;">Welcome to Warforge</h1>
  <p style="font-size:18px;color:var(--text-secondary);max-width:600px;margin:0 auto 32px;">Premium miniatures and terrain for tabletop gaming</p>
  <a href="#" class="btn btn--primary btn--lg" style="display:inline-flex;height:52px;padding:0 24px;font-size:14px;">Shop Now</a>
</div>

## Features

- ✅ Full-width hero banner
- ✅ 3D particle effects (Three.js)
- ✅ Background image support
- ✅ Separate mobile background option
- ✅ Parallax scrolling effect
- ✅ Multiple effect modes (embers, snow, etc.)
- ✅ Adjustable intensity settings
- ✅ Template-specific variants

## Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `background_image` | Image | - | Desktop background |
| `mobile_background_image` | Image | - | Mobile background |
| `enable_3d_fx` | Boolean | `true` | Enable particle effects |
| `fx_mode` | Select | `embers` | Effect type |
| `fx_intensity` | Range | `60` | Particle density |
| `fx_parallax` | Boolean | `true` | Parallax scroll |
| `fx_mobile_quality` | Select | `off` | Mobile performance |
| `heading` | String | - | Hero title |
| `subheading` | String | - | Hero subtitle |
| `button_text` | String | - | CTA button text |
| `button_url` | URL | - | CTA destination |

## Data Attributes

The hero uses data attributes for JavaScript configuration:

```html
<div
  class="hero"
  data-hero-three="true"
  data-hero-effect="embers"
  data-hero-intensity="60"
  data-hero-parallax="true"
  data-hero-mobile-quality="off"
  data-hero-variant="home"
  data-three-module-url="/cdn/shopify.com/.../three.module.min.js"
>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.hero` | Main hero container |
| `.hero__background` | Background image layer |
| `.hero__bg-image` | Background img element |
| `.hero__fx-canvas` | Three.js canvas |
| `.hero__content` | Content wrapper |
| `.hero__inner` | Inner flex container |
| `.hero__text-content` | Text content area |
| `.hero__heading` | Hero title |
| `.hero__subheading` | Hero subtitle |
| `.hero__button` | CTA button wrapper |

## Related

- [Button](./snippets-buttons) - CTA button
- [Image](./snippets-images) - Background images
