---
id: pages-cart
title: Cart Page
sidebar_label: "Cart Page"
---

# Cart Page Template

The cart page displays shopping cart items with quantity adjusters, price totals, and checkout button.

## Visual Examples

<div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  {/* Cart Page Header */}
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px'}}>
    <h1 style={{fontFamily: "Cinzel, serif", fontSize: '36px', color: '#F8FAFC', margin: '0'}}>Shopping Cart</h1>
  </div>
  
  {/* Cart Items */}
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px'}}>
    {/* Left: Cart Items */}
    <div>
      <div style={{display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#2C3B52', borderRadius: '12px', marginBottom: '16px'}}>
        {/* Product Image */}
        <img 
          src="{{ item.image | image_url: width: 200 }}" 
          alt="{{ item.title }}"
          style={{width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px'}}/>
        {/* Product Details */}
        <div style={{flex: '1'}}>
          <h3 style={{fontFamily: "Cinzel, serif", fontSize: '16px', color: '#F8FAFC', margin: '0 0 4px 0'}}>item title</h3>
          <p style={{color: '#94A3B8', fontSize: '13px', lineHeight: '1.5', margin: '0 0 8px 0'}}>item variant title</p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
            <span style={{color: '#F8FAFC', fontSize: '16px'}}>line price</span>
            {/* Quantity Selector */}
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#F8FAFC', fontSize: '14px', minWidth: '32px', textAlign: 'center'}}>item quantity</span>
            </div>
          </div>
          {/* Remove Button */}
        </div>
      </div>
    </div>
    {/* Right: Cart Summary */}
    <div style={{backgroundColor: '#2C3B52', borderRadius: '12px', padding: '24px'}}>
      <h3 style={{fontFamily: "Cinzel, serif", fontSize: '18px', color: '#F8FAFC', marginBottom: '20px'}}>Cart Summary</h3>
      {/* Subtotal */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #3B4A61'}}>
        <span style={{color: '#94A3B8', fontSize: '14px'}}>Subtotal</span>
        <span style={{color: '#F8FAFC', fontSize: '14px'}}>cart total price</span>
      </div>
      {/* Discounts */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #3B4A61'}}>
        <span style={{color: '#94A3B8', fontSize: '14px'}}>Discount</span>
        <span style={{color: '#22C55E', fontSize: '14px'}}>- cart total discount</span>
      </div>
      {/* Shipping */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #3B4A61'}}>
        <span style={{color: '#94A3B8', fontSize: '14px'}}>Shipping</span>
        <span style={{color: '#F8FAFC', fontSize: '14px'}}>cart shipping price</span>
      </div>
      {/* Total */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', marginTop: '16px'}}>
        <span style={{color: '#F8FAFC', fontSize: '18px', fontWeight: '500'}}>Total</span>
        <span style={{color: '#F8FAFC', fontSize: '20px', fontWeight: '500'}}>cart total price</span>
      </div>
      {/* Free Shipping Notice */}
      <p style={{color: '#22C55E', fontSize: '13px', marginTop: '16px'}}>✓ Free shipping applied!</p>
      {/* Checkout Button */}
      <div style={{marginTop: '24px'}}>
      </div>
      {/* Guest Checkout Notice */}
      <p style={{color: '#64748B', fontSize: '12px', marginTop: '16px'}}>
        Or continue shopping to add more items
      </p>
    </div>
  </div>
</div>

## Template Usage

The cart page uses Shopify's built-in cart template:

```liquid

```liquid
{% comment %} Cart template example {% endcomment %}
<div class="cart-page">
  <h1>Shopping Cart</h1>
  {% for item in cart.items %}
    <div class="cart-item">
      <img src="{{ item.image | image_url: width: 200 }}" alt="{{ item.title }}" />
      <h3>{{ item.title }}</h3>
      <span>{{ item.final_line_price }}</span>
    </div>
  {% endfor %}
</div>
```


```liquid
{% comment %} Cart template example {% endcomment %}
<div class="cart-page">
  <h1>Shopping Cart</h1>
  {% for item in cart.items %}
    <div class="cart-item">
      <img src="{{ item.image | image_url: width: 200 }}" alt="{{ item.title }}" />
      <h3>{{ item.title }}</h3>
      <span>{{ item.final_line_price }}</span>
    </div>
  {% endfor %}
</div>
```

