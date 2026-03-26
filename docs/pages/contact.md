---
id: pages-contact
title: Contact Page
sidebar_label: "Contact Page"
---

# Contact Page Template

The contact page template displays a contact form with fields for name, email, subject, and message.

## Visual Examples

<div style={{backgroundColor: '#1A2033', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  <p>Have a question about our products or need support? We'd love to hear from you! Fill out the form below and we'll get back to you within 24-48 hours.</p>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      <span style={{color: '#94A3B8', fontSize: '14px'}}>info@scenery-en-zo.com</span>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      <span style={{color: '#94A3B8', fontSize: '14px'}}>+32 123 456 789</span>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      <span style={{color: '#94A3B8', fontSize: '14px'}}>Belgium</span>
    </div>
  </div>
</div>

<div style={{backgroundColor: '#2C3B52', borderRadius: '12px', padding: '32px 24px'}}>
  <form action="/contact_post" method="post" id="contact-form">
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px'}}>
    </div>
    <div style={{marginTop: '24px'}}>
    </div>
    <div style={{marginTop: '24px'}}>
    </div>
    <div style={{marginTop: '32px', textAlign: 'right'}}>
    </div>
  </form>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '32px'}}>
  <div style={{textAlign: 'center', padding: '24px'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '14px', color: '#F8FAFC', marginBottom: '16px'}}>Follow Us</h4>
    <div style={{display: 'flex', justifyContent: 'center', gap: '16px'}}>
    </div>
  </div>
  
  <div style={{textAlign: 'center', padding: '24px'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '14px', color: '#F8FAFC', marginBottom: '16px'}}>Business Hours</h4>
    <div style={{color: '#94A3B8', fontSize: '13px', lineHeight: '1.8'}}>
      <div>Mon - Fri: 9:00 - 17:00</div>
      <div>Sat - Sun: Closed</div>
    </div>
  </div>
  
  <div style={{textAlign: 'center', padding: '24px'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '14px', color: '#F8FAFC', marginBottom: '16px'}}>Shipping</h4>
    <div style={{color: '#94A3B8', fontSize: '13px', lineHeight: '1.8'}}>
      <div>Free shipping on €100+ orders</div>
      <div>2-5 business days delivery</div>
    </div>
  </div>
</div>

## Template Usage

The contact page uses the standard page template with custom content:

## Template Usage

The contact page uses a standard page template.


## Template Usage

The contact page uses a standard page template.



```json
{
  "contact_form": {
    "enabled": true,
    "subject_prefix": "Warforge Inquiry"
  }
}
```


```json
{
  "contact_form": {
    "enabled": true,
    "subject_prefix": "Warforge Inquiry"
  }
}
```

