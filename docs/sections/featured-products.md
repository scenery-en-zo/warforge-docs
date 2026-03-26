---
id: sections-featured-products
title: Featured Products
sidebar_label: Featured Products
---

# Featured Products Section

**File:** `sections/featured-products.liquid`

Product grid with proper Warforge product cards.

## Visual Preview

<div style={{padding: '48px 24px', backgroundColor: 'var(--bg-900)', borderRadius: '12px'}}>
  <h3 style={{fontFamily: 'var(--font-display)', color: 'white', marginBottom: '48px', textAlign: 'center', fontSize: '28px', fontWeight: '700', letterSpacing: '1px'}}>Featured Products</h3>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto'}}>
    {[1, 2, 3, 4].map(i => (
      <div key={i} className="product-card" style={{maxWidth: '220px', margin: '0 auto', width: '100%'}}>
        <div className="product-card__media" style={{backgroundColor: 'var(--bg-800)', aspectRatio: '3/4', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{width: '40px', height: '40px', backgroundColor: 'var(--bg-700)', borderRadius: '4px'}}></div>
        </div>
        <div className="product-card__content" style={{padding: '16px'}}>
          <div className="product-card__meta-top" style={{marginBottom: '8px'}}>
            <span className="product-card__category" style={{fontSize: '10px', color: 'white', textTransform: 'uppercase', fontWeight: '600'}}>MINIATURES</span>
          </div>
          <h3 className="product-card__title" style={{fontSize: '14px', color: 'var(--accent-500)', fontFamily: 'var(--font-display)', fontWeight: '600', marginBottom: '8px'}}>Product {i}</h3>
          <div className="product-card__price" style={{marginBottom: '16px'}}>
            <span className="price-current" style={{fontSize: '16px', fontWeight: '700', color: 'var(--price-color)'}}>€24,95</span>
          </div>
          <button className="btn btn--primary" style={{width: '100%', height: '40px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase'}}>Add to Cart</button>
        </div>
      </div>
    ))}
  </div>
</div>

## Features

- Vertical product cards (3:4 aspect ratio)
- Category label (uppercase)
- Orange product titles
- Green prices
- Orange "Add to Cart" button

## Related

- [Product Cards](./snippets-product-cards) - Product display
