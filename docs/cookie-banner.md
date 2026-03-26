---
id: cookie-banner
title: Cookie Banner
sidebar_label: 'Cookie Banner'
---

# Cookie Banner

The cookie banner is a consent modal that appears on first visit to inform users about cookie usage and obtain consent for tracking and analytics cookies.

## Visual Examples

<div style={{position: 'fixed', bottom: '24px', left: '24px', right: '24px', backgroundColor: '#1A2033', borderRadius: '12px', padding: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', zIndex: '9999', maxWidth: '800px', margin: '0 auto'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap'}}>
    <div style={{flex: '1', minWidth: '300px'}}>
      <h3 style={{fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#F8FAFC', margin: '0 0 8px 0'}}>We Use Cookies</h3>
      <p style={{color: '#94A3B8', fontSize: '13px', lineHeight: '1.6', margin: '0 0 16px 0'}}>
        We use cookies and similar technologies to enhance your experience, analyze traffic, and personalize content. By continuing to browse this site, you agree to our <a href="/pages/privacy" style={{color: '#F97316', textDecoration: 'underline'}}>Privacy Policy</a>.
      </p>
      <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
        <span style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '6px 12px', borderRadius: '6px', color: '#F97316', fontSize: '12px'}}>Analytics</span>
        <span style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '6px 12px', borderRadius: '6px', color: '#F97316', fontSize: '12px'}}>Essential</span>
        <span style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '6px 12px', borderRadius: '6px', color: '#F97316', fontSize: '12px'}}>Preferences</span>
      </div>
    </div>
    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
      <button style={{backgroundColor: 'transparent', color: '#94A3B8', border: '1px solid #3B4A61', padding: '10px 20px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>Reject All</button>
      <button style={{backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>Accept All</button>
    </div>
  </div>
</div>

<div style={{height: '100px'}}></div>

## Component Overview

The cookie banner is a consent modal that appears on first site visit:

- **Consent Message** — Explains cookie usage
- **Cookie Categories** — Lists types of cookies used
- **Accept All Button** — Accept all cookies (primary action)
- **Reject All Button** — Reject non-essential cookies
- **Privacy Policy Link** — Link to full privacy policy

## Usage

The cookie banner is automatically rendered by the theme's script:

```liquid
{% render 'cookie-banner' %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `show` | Boolean | `true` | Whether to show banner |
| `policy_url` | URL | `/pages/privacy` | Privacy policy page URL |

## Accessibility

- Cookie banner is announced via aria-modal="true"
- Accept/Reject buttons have proper labels
- Privacy policy link is keyboard accessible
- Screen readers announce cookie categories
- Focus trapped within banner while open

## Related Components

- [Modals](./modals) — Cookie banner uses modal patterns
- [Buttons](./buttons) — Accept/Reject action buttons
