---
id: sections-newsletter
title: Newsletter
sidebar_label: Newsletter
---

# Newsletter Section

**File:** `sections/newsletter.liquid`

Email subscription with envelope icon and centered layout.

## Visual Example

<div style={{padding: '48px 24px', backgroundColor: 'var(--bg-800)', borderRadius: 'var(--radius-lg)', textAlign: 'center', maxWidth: '700px', margin: '24px auto', border: '1px solid var(--bg-700)'}}>
  <svg viewBox="0 0 24 24" style={{width: '32px', height: '32px', color: 'var(--accent-500)', marginBottom: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: '2'}}>
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="M22 6l-10 7L2 6"></path>
  </svg>
  <h3 style={{fontFamily: 'var(--font-display)', color: 'white', marginBottom: '16px', fontSize: '24px', fontWeight: '700', letterSpacing: '1px'}}>Join the Warforge Newsletter</h3>
  <p style={{color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6', fontSize: '14px'}}>Get exclusive offers and new product announcements.</p>
  <form style={{display: 'flex', gap: '12px', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center'}}>
    <input type="email" placeholder="Enter your email" className="input-control" style={{flex: '1', minWidth: '250px', backgroundColor: 'var(--bg-900)', border: '1px solid var(--bg-700)', borderRadius: 'var(--radius-md)', padding: '12px 16px', color: 'white', height: '44px', fontSize: '14px'}} />
    <button type="submit" className="btn btn--primary" style={{padding: '12px 24px', backgroundColor: 'var(--accent-500)', color: 'var(--btn-primary-text)', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: '700', cursor: 'pointer', height: '44px', fontSize: '13px', textTransform: 'uppercase'}}>Subscribe</button>
  </form>
</div>

## Features

- Orange envelope icon at top
- Centered layout
- Cinzel font for heading
- Inline form with orange button

## Related

- [Input](./snippets-inputs) - Email input
- [Button](./snippets-buttons) - Submit button
