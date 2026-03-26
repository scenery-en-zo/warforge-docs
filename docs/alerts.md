---
id: alerts
title: Alerts
sidebar_label: 'Alerts'
---

# Alerts

The alert component provides visual feedback and notifications to users, including success messages, warnings, errors, and informational notices. Alerts are used for form validation, promotional banners, order confirmations, and other important communications.

## Visual Examples

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px'}}>
  <div style={{backgroundColor: 'rgba(34, 197, 94, 0.1)', borderLeft: '4px solid #22C55E', padding: '16px', borderRadius: '8px'}}>
    <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <div>
        <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', margin: '0 0 4px 0', color: '#22C55E'}}>Order Confirmed</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '13px', lineHeight: '1.5'}}>Your order has been successfully placed. You will receive a confirmation email shortly.</p>
      </div>
    </div>
  </div>
  
  <div style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #F59E0B', padding: '16px', borderRadius: '8px'}}>
    <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <div>
        <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', margin: '0 0 4px 0', color: '#F59E0B'}}>Low Stock Warning</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '13px', lineHeight: '1.5'}}>Only 3 items left in stock! Consider adding to cart before they sell out.</p>
      </div>
    </div>
  </div>
  
  <div style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #EF4444', padding: '16px', borderRadius: '8px'}}>
    <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
      <div>
        <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', margin: '0 0 4px 0', color: '#EF4444'}}>Payment Declined</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '13px', lineHeight: '1.5'}}>Your payment was declined. Please try a different payment method or contact support.</p>
      </div>
    </div>
  </div>
  
  <div style={{backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3B82F6', padding: '16px', borderRadius: '8px'}}>
    <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
      <div>
        <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', margin: '0 0 4px 0', color: '#3B82F6'}}>Free Shipping</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '13px', lineHeight: '1.5'}}>You have qualified for free shipping! Orders over €100 qualify for complimentary delivery.</p>
      </div>
    </div>
  </div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <div style={{backgroundColor: 'transparent', borderLeft: '4px solid #F97316', padding: '12px 16px', borderRadius: '8px'}}>
    <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', margin: '0', color: '#F97316'}}>Weekend Sale</h4>
  </div>
  
  <div style={{backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3B82F6', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
    <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
      <div>
        <h4 style={{fontFamily: 'Cinzel, serif', fontSize: '14px', margin: '0 0 4px 0', color: '#3B82F6'}}>New Products Arrived</h4>
        <p style={{margin: '0', color: '#94A3B8', fontSize: '13px', lineHeight: '1.5'}}>Check out our latest arrivals in the Miniatures collection.</p>
      </div>
    </div>
    <button style={{background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px', fontSize: '16px'}}>×</button>
  </div>
</div>

## Component Overview

Alerts provide visual feedback for various scenarios:

- **Success** — Order confirmation, payment success, item added to cart
- **Warning** — Low stock, shipping deadline, price increase notice
- **Error** — Payment declined, form validation errors, checkout failures
- **Info** — Free shipping notification, promotional announcements, policy updates

## Alert Types

### Success Alerts

Used for positive outcomes:

```liquid
{% render 'alert', 
  title: 'Order Confirmed',
  message: 'Your order has been successfully placed.',
  type: 'success'
%}
```

### Warning Alerts

Used for cautionary messages:

```liquid
{% render 'alert', 
  title: 'Low Stock Warning',
  message: 'Only 3 items left in stock!',
  type: 'warning'
%}
```

### Error Alerts

Used for error conditions:

```liquid
{% render 'alert', 
  title: 'Payment Declined',
  message: 'Your payment was declined. Please try a different method.',
  type: 'error'
%}
```

### Info Alerts

Used for informational messages:

```liquid
{% render 'alert', 
  title: 'Free Shipping',
  message: 'You qualify for free shipping on orders over €100!',
  type: 'info'
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | String | Required | Alert heading |
| `message` | String | — | Alert body text |
| `type` | Select | `info` | Alert variant: `success`, `warning`, `error`, `info`, `primary` |
| `icon` | String | Auto | Icon to display (auto-selected based on type) |
| `closable` | Boolean | `false` | Shows close button for dismissible alerts |

## Usage Examples

### Order Confirmation Alert

```liquid
{% render 'alert', 
  title: 'Order Confirmed',
  message: 'Your order has been successfully placed. You will receive a confirmation email shortly.',
  type: 'success'
%}
```

### Payment Error Alert

```liquid
{% render 'alert', 
  title: 'Payment Failed',
  message: 'The payment could not be processed. Please verify your card details and try again.',
  type: 'error'
%}
```

### Promotional Banner Alert

```liquid
{% render 'alert', 
  title: 'Weekend Sale',
  message: '',
  type: 'primary'
%}
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.alert` | Base alert container |
| `.alert--success` | Green success state |
| `.alert--warning` | Orange warning state |
| `.alert--error` | Red error state |
| `.alert--info` | Blue info state |
| `.alert--primary` | Orange primary state (no background) |
| `.alert__close` | Close button styling |

## Accessibility

- All alerts have proper heading structure
- Success/error states use appropriate ARIA roles
- Dismissible alerts can be closed with Escape key or close button
- Screen readers announce alert type and message correctly
- Focus management for dismissible alerts

## Related Components

- [Buttons](./buttons) — Close buttons for dismissible alerts
- [Icons](./icons) — Icon indicators for alert types
