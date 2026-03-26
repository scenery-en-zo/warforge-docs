---
id: features
title: Features Section
sidebar_label: 'Features'
---

# Features Section

The features section displays benefit blocks highlighting key selling points like free shipping, quality guarantees, and delivery information.

## Visual Examples

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px'}}>
  <div style={{textAlign: 'center', padding: '32px 24px', backgroundColor: '#2C3B52', borderRadius: '12px'}}>
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" style={{margin: '0 auto 16px'}}>
      <rect x="1" y="3" width="15" height="13"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#F8FAFC', margin: '0 0 8px 0'}}>Free Shipping</h4>
    <p style={{color: '#94A3B8', fontSize: '13px', lineHeight: '1.6', margin: '0'}}>On all orders over €100</p>
  </div>
  
  <div style={{textAlign: 'center', padding: '32px 24px', backgroundColor: '#2C3B52', borderRadius: '12px'}}>
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" style={{margin: '0 auto 16px'}}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#F8FAFC', margin: '0 0 8px 0'}}>Quality Guaranteed</h4>
    <p style={{color: '#94A3B8', fontSize: '13px', lineHeight: '1.6', margin: '0'}}>Premium materials, always</p>
  </div>
  
  <div style={{textAlign: 'center', padding: '32px 24px', backgroundColor: '#2C3B52', borderRadius: '12px'}}>
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" style={{margin: '0 auto 16px'}}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#F8FAFC', margin: '0 0 8px 0'}}>Fast Delivery</h4>
    <p style={{color: '#94A3B8', fontSize: '13px', lineHeight: '1.6', margin: '0'}}>2-5 business days</p>
  </div>
</div>

## Component Overview

Features section highlights:

- **Free Shipping** — Threshold-based free shipping
- **Quality Guarantee** — Product quality assurance
- **Fast Delivery** — Quick shipping times
- **Secure Payment** — Payment security badges
- **Customer Support** — Support availability

## Usage

```liquid
{% section 'features',
  features: section.settings.features,
  columns: 3
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `features` | Array | — | Feature blocks to display |
| `columns` | Number | `3` | Number of columns on desktop |
| `show_icons` | Boolean | `true` | Show feature icons |
| `icon_style` | Select | `outline` | Icon style: `outline`, `filled`, `duotone` |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.features` | Section container |
| `.features__grid` | Features grid |
| `.features__item` | Individual feature |
| `.features__icon` | Icon wrapper |
| `.features__title` | Feature title |
| `.features__description` | Feature description |

## Related Components

- [Icons](./icons) — Feature icons
- [Sections](./sections) — Section configuration
- [Hero](./hero) — Hero section above features
