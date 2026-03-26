---
id: pages-account
title: Account Page
sidebar_label: "Account Page"
---

# Account Page Template

The account page displays customer account information including orders, addresses, and profile settings.

## Visual Examples

<div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  {/* Account Header */}
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px'}}>
    <h1 style={{fontFamily: "Cinzel, serif", fontSize: '36px', color: '#F8FAFC', margin: '0'}}>My Account</h1>
 </div>
  
  {/* Account Navigation */}
  <nav style={{display: 'flex', gap: '8px', borderBottom: '1px solid #3B4A61', paddingBottom: '24px', marginBottom: '32px'}}>
    <a href="/account/orders" class="account-nav account-nav--active" style={{color: '#F8FAFC', textDecoration: 'none', fontSize: '14px'}}>My Orders</a>
    <a href="/account/addresses" class="account-nav" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '14px'}}>Addresses</a>
    <a href="/account/profile" class="account-nav" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '14px'}}>Profile</a>
    <a href="/account/login" class="account-nav" style={{color: '#94A3B8', textDecoration: 'none', fontSize: '14px'}}>Sign Out</a>
  </nav>
  
  {/* Orders Section */}
  <div id="orders-section">
    <div style={{backgroundColor: '#2C3B52', borderRadius: '12px', padding: '24px', marginBottom: '16px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
        <div>
          <h3 style={{fontFamily: "Cinzel, serif", fontSize: '16px', color: '#F8FAFC', margin: '0'}}>Order</h3>
          <p style={{color: '#94A3B8', fontSize: '13px', margin: '4px 0 0 0'}}>created at</p>
        </div>
        <span class="order-status order-status--" style={{padding: '6px 12px', borderRadius: '4px', fontSize: '12px'}}>
          order status
        </span>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: '1px solid #3B4A61'}}>
        <span style={{color: '#94A3B8', fontSize: '14px'}}>Total</span>
        <span style={{color: '#F8FAFC', fontSize: '16px'}}>subtotal price</span>
      </div>
    </div>
  </div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
  {/* Profile Section */}
  <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px', textAlign: 'center'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', color: '#F8FAFC', margin: '12px 0 4px 0'}}>Profile</h4>
    <p style={{color: '#94A3B8', fontSize: '12px'}}>Edit profile information</p>
  </div>
  
  {/* Addresses Section */}
  <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px', textAlign: 'center'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', color: '#F8FAFC', margin: '12px 0 4px 0'}}>Addresses</h4>
    <p style={{color: '#94A3B8', fontSize: '12px'}}>Manage shipping addresses</p>
  </div>
  
  {/* Payment Methods */}
  <div style={{backgroundColor: '#2C3B52', borderRadius: '8px', padding: '16px', textAlign: 'center'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '13px', color: '#F8FAFC', margin: '12px 0 4px 0'}}>Payment</h4>
    <p style={{color: '#94A3B8', fontSize: '12px'}}>Manage payment methods</p>
  </div>
</div>

## Template Usage

The account page uses Shopify's customer account template:

In `templates/customer-account.liquid`

## Account Sections

### Orders Section

Displays customer's order history:

```liquid
&#123;% for order in customer.orders %&#125;
  <div class="order-card">
    <h3>&#123;&#123; order.name &#125;&#125;</h3>
    <span class="status-&#123;&#123; order.status &#125;&#125;">&#123;&#123; order.status &#125;&#125;</span>
    <a href="&#123;&#123; order.customer_url &#125;&#125;">View Order</a>
  </div>
&#123;% endfor %&#125;
```
### Addresses Section

Manages shipping addresses:

```liquid
<div class="addresses-section">
  &#123;% for address in customer.addresses %&#125;
    <div class="address-card">
      <h4>&#123;&#123; address.first_name &#125;&#125; &#123;&#123; address.last_name &#125;&#125;</h4>
      <p>&#123;&#123; address.company &#125;&#125;</p>
      <p>&#123;&#123; address.address1 &#125;&#125;</p>
      <a href="&#123;&#123; address.edit_url &#125;&#125;">Edit</a>
    </div>
  &#123;% endfor %&#125;

  &#123;% render 'button',
    label: 'Add Address',
    href: ./pages-account/addresses/new',
    style: 'secondary'
  %&#125;
</div>
```
### Profile Section

Edits profile information:

```liquid
<form action=./pages-account/profile" method="post">
  <input type="text" name="customer[first_name]" value="&#123;&#123; customer.first_name &#125;&#125;" required />
  <input type="text" name="customer[last_name]" value="&#123;&#123; customer.last_name &#125;&#125;" required />
  <input type="email" name="customer[email]" value="&#123;&#123; customer.email &#125;&#125;" required />
  &#123;% render 'button', label: 'Save', type: 'submit', style: 'primary' %&#125;
</form>
```
## Related Documentation

- [Static Pages](../customization) — Creating static pages in Shopify
- [Modals](../modals) — Account modals and drawers
