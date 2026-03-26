---
id: toasts
title: Toasts
sidebar_label: 'Toasts'
---

# Toasts

The toast component provides non-blocking notifications that appear temporarily in a corner of the screen. Toasts are used for add-to-cart confirmations, wishlist additions, and other lightweight feedback messages.

## Visual Examples

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <!-- Success Toast -->
  <div class="toast toast--success" style={{position: 'fixed', top: '24px', right: '24px', backgroundColor: '#0F172A', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', borderLeft: '4px solid #22C55E', minWidth: '300px'}}>
    <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
      
<!-- Liquid example -->'icon', name: 'check', size: 'md', variant: 'success' %}```
      <div>
        <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', margin: '0 0 4px 0', color: '#22C55E'}}>✓ Added to Cart</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '12px', lineHeight: '1.4'}}>Battlefield Skulls - 60mm Base Oval</p>
      </div>
    </div>
  </div>
  
  <!-- Warning Toast -->
  <div class="toast toast--warning" style={{position: 'fixed', top: '24px', right: '24px', backgroundColor: '#0F172A', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', borderLeft: '4px solid #F59E0B', minWidth: '300px'}}>
    <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
      
<!-- Liquid example -->'icon', name: 'star', size: 'md', variant: 'warning' %}```
      <div>
        <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', margin: '0 0 4px 0', color: '#F59E0B'}}>⚠ Low Stock</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '12px', lineHeight: '1.4'}}>Only 2 items left in stock!</p>
      </div>
    </div>
  </div>
  
  <!-- Info Toast -->
  <div class="toast toast--info" style={{position: 'fixed', top: '24px', right: '24px', backgroundColor: '#0F172A', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', borderLeft: '4px solid #3B82F6', minWidth: '300px'}}>
    <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
      
<!-- Liquid example -->'icon', name: 'info', size: 'md', variant: 'primary' %}```
      <div>
        <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', margin: '0 0 4px 0', color: '#3B82F6'}}>ℹ Free Shipping</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '12px', lineHeight: '1.4'}}>You qualify for free shipping!</p>
      </div>
    </div>
  </div>
  
  <!-- Error Toast -->
  <div class="toast toast--error" style={{position: 'fixed', top: '24px', right: '24px', backgroundColor: '#0F172A', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', borderLeft: '4px solid #EF4444', minWidth: '300px'}}>
    <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
      
<!-- Liquid example -->'icon', name: 'close', size: 'md', variant: 'error' %}```
      <div>
        <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', margin: '0 0 4px 0', color: '#EF4444'}}>✕ Error</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '12px', lineHeight: '1.4'}}>Payment method declined. Please try again.</p>
      </div>
    </div>
  </div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
  <!-- Bottom Right Toast -->
  <div class="toast toast--success" style={{position: 'fixed', bottom: '24px', right: '24px', backgroundColor: '#0F172A', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', borderLeft: '4px solid #22C55E', minWidth: '300px'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      
<!-- Liquid example -->'icon', name: 'check', size: 'md', variant: 'success' %}```
      <div>
        <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', margin: '0', color: '#22C55E'}}>✓ Added to Wishlist</h4>
      </div>
    </div>
  </div>
  
  <!-- Bottom Left Toast -->
  <div class="toast toast--success" style={{position: 'fixed', bottom: '24px', left: '24px', backgroundColor: '#0F172A', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', borderLeft: '4px solid #22C55E', minWidth: '300px'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      
<!-- Liquid example -->'icon', name: 'check', size: 'md', variant: 'success' %}```
      <div>
        <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', margin: '0', color: '#22C55E'}}>✓ Newsletter Subscribed</h4>
      </div>
    </div>
  </div>
  
  <!-- Center Toast -->
  <div class="toast toast--success" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#0F172A', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', borderLeft: '4px solid #22C55E', minWidth: '300px'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      
<!-- Liquid example -->'icon', name: 'check', size: 'md', variant: 'success' %}```
      <div>
        <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', margin: '0', color: '#22C55E'}}>✓ Checkout Complete</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '12px', lineHeight: '1.4'}}>Thank you for your order!</p>
      </div>
    </div>
  </div>
</div>

## Component Overview

Toasts provide lightweight, non-blocking feedback:

- **Add to cart** — Confirmation when products are added
- **Wishlist** — Notification when items are favorited
- **Newsletter signup** — Success message for subscriptions
- **Payment confirmation** — Brief checkout success notice
- **Shipping update** — Free shipping qualification notice

## Toast Types

### Success Toasts

Used for positive actions:

```liquid
```liquid
```
  type: 'success',
  title: 'Added to Cart',
  message: 'Battlefield Skulls - 60mm Base Oval'
%&#125;```
```

### Warning Toasts

Used for cautionary messages:

```
<!-- Liquid example -->'toast', 
  type: 'warning',
  title: 'Low Stock',
  message: 'Only 2 items left in stock!'
%&#125;```
```
### Error Toasts

Used for error conditions:

```
```<!-- Liquid example -->'toast', 
  type: 'error',
  title: 'Payment Declined',
  message: 'Please try a different payment method.'
%&#125;```
```

### Info Toasts

Used for informational messages:

``````liquid
<!-- Liquid example -->'toast', 
  type: 'info',
  title: 'Free Shipping',
  message: 'You qualify for free shipping!'
%&#125;```
```
## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | Select | `success` | Toast variant: `success`, `warning`, `error`, `info` |
| `title` | String | Required | Toast heading |
| `message` | String | — | Toast body text (optional) |
| `position` | Select | `top-right` | Toast position: `top-right`, `bottom-right`, `bottom-left`, `center` |
| `duration` | Number | 5000 | Toast visibility duration in milliseconds |

## Usage Examples

### Add to Cart Toast

```liquid
```liquid
```
  type: 'success',
  title: 'Added to Cart',
  message: 'Battlefield Skulls - 60mm Base Oval'
%&#125;```
```

### Wishlist Toast

```
<!-- Liquid example -->'toast', 
  type: 'success',
  title: 'Added to Wishlist',
  message: ''
%&#125;```
```
### Newsletter Signup Toast

```
```<!-- Liquid example -->'toast', 
  type: 'success',
  title: 'Newsletter Subscribed',
  message: 'Thank you for subscribing!'
%&#125;```
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.toast` | Base toast container |
| `.toast--success` | Green success state |
| `.toast--warning` | Orange warning state |
| `.toast--error` | Red error state |
| `.toast--info` | Blue info state |

## Accessibility

- Toasts are announced to screen readers via aria-live region
- Auto-dismiss after specified duration
- Can be manually dismissed (if closable variant used)
- Focus not trapped (non-modal)
- Screen readers announce toast type and message

## Related Components

- [Alerts](./alerts) — Alerts are more permanent; toasts are temporary
- [Buttons](./buttons) — Close buttons for dismissible toasts

