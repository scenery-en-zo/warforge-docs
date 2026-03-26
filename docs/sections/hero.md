---
id: sections-hero
title: Hero
sidebar_label: Hero
---

# Hero Section

**File:** `sections/hero.liquid`

Full-width hero with background image, floating dice, and dual buttons.

## Visual Preview

<div style={{background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 600\'%3E%3Crect fill=\'%231a1e28\' width=\'1200\' height=\'600\'/%3E%3C/svg%3E")', backgroundSize: 'cover', borderRadius: 'var(--radius-lg)', padding: '100px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', border: '1px solid var(--bg-700)', minHeight: '400px'}}>
  <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>
    <svg viewBox="0 0 100 100" style={{position: 'absolute', top: '20%', left: '15%', width: '60px', height: '60px', opacity: '0.3', stroke: 'var(--accent-500)', strokeWidth: '1', fill: 'none'}}>
      <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"></polygon>
    </svg>
    <svg viewBox="0 0 100 100" style={{position: 'absolute', top: '30%', right: '20%', width: '50px', height: '50px', opacity: '0.3', stroke: 'var(--accent-500)', strokeWidth: '1', fill: 'none'}}>
      <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"></polygon>
    </svg>
    <div style={{position: 'absolute', top: '60%', left: '10%', width: '3px', height: '3px', background: 'var(--accent-500)', borderRadius: '50%'}}></div>
    <div style={{position: 'absolute', top: '40%', right: '30%', width: '2px', height: '2px', background: 'var(--accent-500)', borderRadius: '50%'}}></div>
  </div>
  <h1 style={{fontFamily: 'var(--font-display)', fontSize: '48px', marginBottom: '24px', color: 'white', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase'}}>Welcome to Warforge</h1>
  <p style={{fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6'}}>Premium miniatures and terrain for tabletop gaming</p>
  <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
    <button className="btn btn--primary btn--lg" style={{display: 'inline-flex', height: '48px', padding: '0 32px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase'}}>Shop Now</button>
    <button className="btn btn--secondary btn--lg" style={{display: 'inline-flex', height: '48px', padding: '0 32px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', backgroundColor: 'var(--bg-700)', color: 'white', border: '1px solid var(--bg-600)'}}>Create Account</button>
  </div>
</div>

## JavaScript Note

Live site uses Three.js for floating particle effects. Preview shows static representation.

## Features

- Full-width background image
- Floating geometric dice shapes
- Dual button layout
- Parallax scrolling

## Related

- [Button](./snippets-buttons) - CTA buttons
