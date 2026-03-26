---
id: sections-footer
title: Footer
sidebar_label: Footer
---

# Footer Section

**File:** `sections/footer.liquid`

Site footer with brand, links, contact, and payment icons.

## Visual Preview

<div style={{backgroundColor: 'var(--bg-900)', padding: '48px 24px', borderTop: '1px solid var(--bg-700)'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', maxWidth: '1200px', margin: '0 auto'}}>
    <div>
      <div style={{fontFamily: 'var(--font-display)', fontSize: '24px', color: 'white', fontWeight: '700', marginBottom: '16px'}}>Scenery en Zo</div>
      <p style={{color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.6', marginBottom: '24px'}}>Your one-stop-shop for wargaming terrain. We provide high-quality materials to help you build the battlefield of your dreams.</p>
    </div>
    <div>
      <h4 style={{color: 'white', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '1px'}}>SHOP</h4>
      <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px'}}>Home</li>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px'}}>About Us</li>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px'}}>Contact</li>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px'}}>Miniatures</li>
      </ul>
    </div>
    <div>
      <h4 style={{color: 'white', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '1px'}}>LEGAL</h4>
      <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px'}}>Privacy Policy</li>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px'}}>Terms of Service</li>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px'}}>Shipping Policy</li>
      </ul>
    </div>
    <div>
      <h4 style={{color: 'white', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '1px'}}>CONTACT</h4>
      <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px'}}>
          <svg viewBox="0 0 24 24" style={{width: '14px', height: '14px', color: 'var(--accent-500)', fill: 'currentColor'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Hobbylaan 123, Creatieve Stad
        </li>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px'}}>
          <svg viewBox="0 0 24 24" style={{width: '14px', height: '14px', color: 'var(--accent-500)', fill: 'none', stroke: 'currentColor', strokeWidth: '2'}}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>
          info@sceneryenzo.nl
        </li>
        <li style={{padding: '8px 0', color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px'}}>
          <svg viewBox="0 0 24 24" style={{width: '14px', height: '14px', color: 'var(--accent-500)', fill: 'none', stroke: 'currentColor', strokeWidth: '2'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +31 6 12345678
        </li>
      </ul>
    </div>
  </div>
  <div style={{marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--bg-700)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '48px auto 0'}}>
    <div style={{color: 'var(--text-muted)', fontSize: '12px'}}>© 2026 Scenery en Zo. All rights reserved.</div>
    <div style={{display: 'flex', gap: '8px'}}>
      <div style={{width: '40px', height: '24px', backgroundColor: 'var(--bg-700)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: 'var(--text-muted)'}}>VISA</div>
      <div style={{width: '40px', height: '24px', backgroundColor: 'var(--bg-700)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: 'var(--text-muted)'}}>MC</div>
      <div style={{width: '40px', height: '24px', backgroundColor: 'var(--bg-700)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: 'var(--text-muted)'}}>PayPal</div>
    </div>
  </div>
</div>

## Structure

- 4 columns: Brand, Shop Links, Legal Links, Contact
- Contact info with icons (location, email, phone)
- Payment icons at bottom
- Copyright bar

## Related

- [Icons](./snippets-icons) - Contact icons
