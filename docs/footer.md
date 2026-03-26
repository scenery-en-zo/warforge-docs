---
id: footer
title: Footer Section
sidebar_label: 'Footer'
---

# Footer Section

The footer section contains secondary navigation, links to important pages, social media icons, newsletter signup, and copyright information.

## Visual Examples

<div style={{backgroundColor: '#0A0E16', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginBottom: '32px'}}>
    <div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', marginBottom: '16px'}}>About</h5>
      <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
        <li style={{marginBottom: '8px'}}><a href="/pages/about" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>About Us</a></li>
        <li style={{marginBottom: '8px'}}><a href="/pages/contact" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Contact</a></li>
        <li style={{marginBottom: '8px'}}><a href="/pages/shipping" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Shipping</a></li>
        <li><a href="/pages/returns" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Returns</a></li>
      </ul>
    </div>
    
    <div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', marginBottom: '16px'}}>Shop</h5>
      <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
        <li style={{marginBottom: '8px'}}><a href="/collections/miniatures" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Miniatures</a></li>
        <li style={{marginBottom: '8px'}}><a href="/collections/terrain" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Terrain</a></li>
        <li style={{marginBottom: '8px'}}><a href="/collections/paints" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Paints & Brushes</a></li>
        <li><a href="/collections/tools" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Tools</a></li>
      </ul>
    </div>
    
    <div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', marginBottom: '16px'}}>Support</h5>
      <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
        <li style={{marginBottom: '8px'}}><a href="/pages/faq" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>FAQ</a></li>
        <li style={{marginBottom: '8px'}}><a href="/pages/size-guide" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Size Guide</a></li>
        <li style={{marginBottom: '8px'}}><a href="/pages/care-instructions" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Care Instructions</a></li>
        <li><a href="/pages/warranty" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '13px'}}>Warranty</a></li>
      </ul>
    </div>
    
    <div>
      <h5 style={{fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#F8FAFC', marginBottom: '16px'}}>Newsletter</h5>
      <p style={{color: '#94A3B8', fontSize: '13px', marginBottom: '12px'}}>Subscribe for updates and exclusive offers</p>
      <div style={{display: 'flex', gap: '8px'}}>
        <input type="email" placeholder="Your email" style={{flex: '1', backgroundColor: '#1A2033', border: '1px solid #3B4A61', borderRadius: '4px', padding: '8px', color: '#F8FAFC', fontSize: '13px'}}/>
        <button style={{backgroundColor: '#F97316', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', fontWeight: '600', cursor: 'pointer', fontSize: '13px'}}>Subscribe</button>
      </div>
    </div>
  </div>
  
  <div style={{borderTop: '1px solid #1E293B', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <p style={{color: '#64748B', fontSize: '12px', margin: '0'}}>© 2024 Warforge Theme. All rights reserved.</p>
    <div style={{display: 'flex', gap: '16px'}}>
      <a href="#" style={{color: '#64748B', textDecoration: 'none', fontSize: '12px'}}>Privacy Policy</a>
      <a href="#" style={{color: '#64748B', textDecoration: 'none', fontSize: '12px'}}>Terms of Service</a>
    </div>
  </div>
</div>

## Component Overview

The footer section includes:

- **Navigation columns** — Links to important pages
- **Newsletter signup** — Email subscription form
- **Social media links** — Social platform icons
- **Copyright notice** — Legal information
- **Payment icons** — Accepted payment methods

## Usage

```liquid
{% section 'footer' %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `show_newsletter` | Boolean | `true` | Show newsletter signup |
| `show_social` | Boolean | `true` | Show social media links |
| `columns` | Number | `4` | Number of link columns |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.footer` | Footer container |
| `.footer__grid` | Link columns grid |
| `.footer__column` | Individual column |
| `.footer__title` | Column heading |
| `.footer__links` | Link list |
| `.footer__bottom` | Bottom bar |

## Related Components

- [Newsletter](./newsletter) — Newsletter signup form
- [Navigation](./navigation) — Navigation links
- [Icons](./icons) — Social media icons
