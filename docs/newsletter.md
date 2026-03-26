---
id: newsletter
title: Newsletter Section
sidebar_label: 'Newsletter'
---

# Newsletter Section

The newsletter section provides an email signup form for customers to subscribe to updates, promotions, and new product announcements.

## Visual Examples

<div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  <div style={{textAlign: 'center'}}>
    <h3 style={{fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#F8FAFC', marginBottom: '12px'}}>Subscribe to Our Newsletter</h3>
    <p style={{color: '#94A3B8', fontSize: '15px', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto 24px'}}>Get exclusive deals, new product announcements, and tabletop gaming tips delivered to your inbox.</p>
    
    <div style={{maxWidth: '400px', margin: '0 auto', display: 'flex', gap: '8px'}}>
      <input type="email" placeholder="Enter your email address" style={{flex: '1', backgroundColor: '#2C3B52', border: '1px solid #3B4A61', borderRadius: '6px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px'}}/>
      <button style={{backgroundColor: '#F97316', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>Subscribe</button>
    </div>
    
    <p style={{color: '#64748B', fontSize: '12px', marginTop: '16px'}}>We respect your privacy. Unsubscribe at any time.</p>
  </div>
</div>

## Component Overview

The newsletter section is used for:

- **Homepage** — Email list building
- **Footer** — Persistent signup opportunity
- **Exit Intent** — Last-chance popup before leaving
- **Post-Purchase** — Signup after checkout

## Usage

```liquid
{% section 'newsletter',
  title: 'Subscribe to Our Newsletter',
  description: 'Get exclusive deals and updates',
  show_description: true
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | String | `Subscribe` | Section heading |
| `description` | String | — | Description text |
| `show_description` | Boolean | `true` | Show description |
| `placeholder` | String | `Enter your email` | Input placeholder |
| `button_label` | String | `Subscribe` | Submit button text |
| `show_privacy` | Boolean | `true` | Show privacy notice |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.newsletter` | Section container |
| `.newsletter__content` | Content wrapper |
| `.newsletter__title` | Section heading |
| `.newsletter__description` | Description text |
| `.newsletter__form` | Form wrapper |
| `.newsletter__input` | Email input |
| `.newsletter__button` | Submit button |
| `.newsletter__privacy` | Privacy notice |

## Accessibility

- Form has proper labels
- Input has appropriate type (`email`)
- Submit button has clear label
- Error messages announced to screen readers
- Keyboard navigation supported

## Related Components

- [Inputs](./inputs) — Email input field
- [Buttons](./buttons) — Submit button
- [Footer](./footer) — Footer newsletter integration
