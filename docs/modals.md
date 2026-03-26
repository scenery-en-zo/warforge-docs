---
id: modals
title: Modals
sidebar_label: 'Modals'
---

# Modals

The modal component displays overlay dialogs for focused interactions without leaving the current page. Modals are used for cart drawers, quick views, login forms, and other contextual overlays.

## Visual Examples

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <div style={{backgroundColor: '#1A2033', borderRadius: '12px', padding: '24px', border: '1px solid #2C3B52'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
      <h3 style={{fontFamily: 'Cinzel, serif', fontSize: '18px', margin: '0'}}>Shopping Cart</h3>
      <button style={{background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px'}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    
    <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px', marginBottom: '12px'}}>
      <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
        <div style={{width: '60px', height: '60px', backgroundColor: '#3B4A61', borderRadius: '8px'}}></div>
        <div style={{flex: '1'}}>
          <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', margin: '0'}}>Battlefield Skulls</h4>
          <p style={{fontSize: '12px', color: '#94A3B8', margin: '4px 0'}}>60mm Base Oval</p>
        </div>
        <span style={{color: '#F8FAFC'}}>€24.99</span>
      </div>
    </div>
    
    <button style={{width: '100%', backgroundColor: 'transparent', color: '#94A3B8', border: '1px solid #3B4A61', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>Continue Shopping</button>
  </div>
  
  <div style={{backgroundColor: '#1A2033', borderRadius: '12px', padding: '24px', border: '1px solid #2C3B52'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
      <h3 style={{fontFamily: 'Cinzel, serif', fontSize: '18px', margin: '0'}}>Quick View</h3>
      <button style={{background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px'}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
      <div style={{aspectRatio: '1', backgroundColor: '#2C3B52', borderRadius: '8px'}}></div>
      <div>
        <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '16px', margin: '0 0 8px 0', color: '#F8FAFC'}}>Product Title</h4>
        <p style={{fontSize: '14px', color: '#94A3B8', marginBottom: '16px'}}>Product description goes here.</p>
        <span style={{fontSize: '18px', color: '#F97316', fontWeight: '600'}}>€24.99</span>
        <button style={{width: '100%', backgroundColor: '#F97316', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', marginTop: '16px'}}>Add to Cart</button>
      </div>
    </div>
  </div>
</div>

## Component Overview

Modals are used for:

- **Cart Drawer** — Slide-out shopping cart
- **Quick View** — Product preview without page navigation
- **Login/Register** — Authentication forms
- **Newsletter** — Email signup popup
- **Image Gallery** — Lightbox image viewer

## Usage

```liquid
{% render 'modal',
  id: 'modal-id',
  title: 'Modal Title',
  show_close: true,
  overlay: true
%}
  <!-- Modal content -->
{% endrender %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | String | Required | Unique modal identifier |
| `title` | String | — | Modal heading |
| `show_close` | Boolean | `true` | Show close button |
| `overlay` | Boolean | `true` | Show dark overlay |
| `size` | Select | `medium` | Size: `small`, `medium`, `large`, `full` |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.modal` | Modal container |
| `.modal__overlay` | Dark background overlay |
| `.modal__content` | Content wrapper |
| `.modal__header` | Header with title |
| `.modal__body` | Main content area |
| `.modal__footer` | Footer actions |
| `.modal__close` | Close button |

## Accessibility

- Modals trap focus while open
- Close on Escape key press
- Overlay click closes modal (configurable)
- Proper ARIA roles and labels
- Body scroll disabled when open

## Related Components

- [Buttons](./buttons) — Modal action buttons
- [Icons](./icons) — Close icon
- [Cart Drawer](../modals) — Cart modal variant
