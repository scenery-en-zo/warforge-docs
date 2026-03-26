---
id: sections-header
title: Header
sidebar_label: Header
---

# Header Section

**File:** `sections/header.liquid`

Site header with top bar, logo, search, and navigation.

## Visual Preview

<div style={{backgroundColor: 'var(--bg-950)', borderBottom: '2px solid var(--accent-500)'}}>
  <div style={{padding: '12px 24px', backgroundColor: 'var(--bg-900)', borderBottom: '1px solid var(--bg-700)'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto', fontSize: '12px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)'}}>
        <svg viewBox="0 0 24 24" style={{width: '16px', height: '16px', color: 'var(--accent-500)', fill: 'none', stroke: 'currentColor', strokeWidth: '2'}}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
        <span>Free shipping on orders over €100</span>
      </div>
      <div style={{display: 'flex', gap: '24px', color: 'var(--text-secondary)'}}>
        <span>Login</span>
        <span>Create Account</span>
        <span>Cart (0)</span>
      </div>
    </div>
  </div>
  <div style={{padding: '24px', backgroundColor: 'var(--bg-900)'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto'}}>
      <div style={{textAlign: 'center'}}>
        <div style={{fontFamily: 'var(--font-display)', fontSize: '24px', color: 'white', fontWeight: '700'}}>Scenery en Zo</div>
        <div style={{fontSize: '12px', color: 'var(--text-secondary)'}}>Originaliteit door creativiteit</div>
      </div>
      <div style={{flex: '1', maxWidth: '500px', margin: '0 48px'}}>
        <div style={{position: 'relative'}}>
          <input type="text" placeholder="Search..." style={{width: '100%', padding: '12px 16px 12px 40px', backgroundColor: 'var(--bg-800)', border: '1px solid var(--bg-700)', borderRadius: 'var(--radius-md)', color: 'white'}} />
          <svg viewBox="0 0 24 24" style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: 'var(--text-muted)'}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
      </div>
    </div>
  </div>
  <nav style={{backgroundColor: 'var(--bg-800', borderTop: '1px solid var(--bg-700)'}}>
    <ul style={{display: 'flex', listStyle: 'none', padding: '0', margin: '0', maxWidth: '1400px', margin: '0 auto'}}>
      <li style={{padding: '16px 24px', color: 'white', backgroundColor: 'var(--accent-500)', fontWeight: '600'}}>Home</li>
      <li style={{padding: '16px 24px', color: 'var(--text-secondary)'}}>About Us</li>
      <li style={{padding: '16px 24px', color: 'var(--text-secondary)'}}>Contact</li>
      <li style={{padding: '16px 24px', color: 'var(--text-secondary)'}}>Miniatures</li>
    </ul>
  </nav>
</div>

## Structure

- Top bar: Shipping announcement with truck icon
- Main header: Logo, search bar
- Navigation: Horizontal menu

## Related

- [Icons](./snippets-icons) - Icons
- [Navigation](./navigation) - Menu structure
