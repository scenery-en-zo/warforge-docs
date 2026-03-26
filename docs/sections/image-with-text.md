---
id: sections-image-with-text
title: Image with Text
sidebar_label: Image with Text
---

# Image with Text Section

**File:** `sections/image-with-text.liquid`

The image with text section displays a split layout with image and text content.

## Visual Example

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', padding: '48px 24px', backgroundColor: 'var(--bg-900)', borderRadius: '12px', alignItems: 'center'}}>
  <div style={{aspectRatio: '4/3', backgroundColor: 'var(--bg-800)', borderRadius: 'var(--radius-lg)', overflow: 'hidden'}}>
    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <svg viewBox="0 0 24 24" style={{width: '80px', height: '80px', opacity: '0.3', fill: 'var(--bg-700)'}}>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
    </div>
  </div>
  <div>
    <h3 style={{fontFamily: 'var(--font-display)', color: 'white', marginBottom: '16px', fontSize: '28px'}}>Crafted for Perfection</h3>
    <p style={{color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px'}}>Our miniatures are designed with attention to detail and cast in high-quality resin for the best painting experience.</p>
    <button className="btn btn--primary" style={{padding: '12px 24px', backgroundColor: 'var(--accent-500)', color: 'var(--btn-primary-text)', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: '700', cursor: 'pointer'}}>Learn More</button>
  </div>
</div>

## Features

- ✅ Side-by-side layout
- ✅ Image on left/right option
- ✅ Text overlay option
- ✅ Button CTA
- ✅ Responsive stacking

## Related

- [Button](./snippets-buttons) - CTA button
- [Image](./snippets-images) - Image handling
