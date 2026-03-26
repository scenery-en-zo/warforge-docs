---
id: pages-summary
title: All Page Types
sidebar_label: 'All Page Types'
---

# All Page Types Summary

This page lists all available page types in the Warforge theme with brief descriptions.

## Static Pages

### About Us

The about us page displays company information, mission, values, and team.

- **File:** `pages/about.md`
- **Template:** `templates/page-template.```liquid`
- **Sections:** About hero, mission/vision/values blocks, team members

**Usage:**
```markdown
---
title: About Us
layout: about
---

# Our Story

Warforge was founded in 2024...
```
### Contact

The contact page displays a contact form with fields for name, email, and message.

- **File:** `pages/contact.md`
- **Template:** `templates/page-template.```liquid`
- **Sections:** Contact form, social links, business hours

**Usage:**
```markdown
---
title: Contact Us
layout: contact
---

# Get in Touch

Have a question about our products...
```
### Shipping Info

The shipping information page displays delivery options and policies.

- **File:** `pages/shipping.md`
- **Template:** `templates/page-template.```liquid`
- **Sections:** Shipping methods, delivery times, international shipping

**Usage:**
```markdown
---
title: Shipping Information
layout: shipping
---

# Our Shipping Policy

We offer free shipping on orders over €100...
```
### Returns & Refunds

The returns page displays the return policy and process.

- **File:** `pages/returns.md`
- **Template:** `templates/page-template.```liquid`
- **Sections:** Return policy, refund process, FAQ

**Usage:**
```markdown
---
title: Returns & Refunds
layout: returns
---

# Our Return Policy

We accept returns within 30 days of delivery...
```
### FAQs

The FAQ page displays frequently asked questions and answers.

- **File:** `pages/faqs.md`
- **Template:** `templates/page-template.```liquid`
- **Sections:** FAQ accordion, contact for more help

**Usage:**
```markdown
---
title: Frequently Asked Questions
layout: faqs
---

# FAQs

Common questions about our products...
```
### Privacy Policy

The privacy policy page displays GDPR compliance information.

- **File:** `pages/privacy.md`
- **Template:** `templates/page-template.```liquid`
- **Sections:** Data collection, cookie policy, contact

**Usage:**
```markdown
---
title: Privacy Policy
layout: privacy
---

# Privacy Policy

Your privacy is important to us...
```
### Terms of Service

The terms page displays terms and conditions.

- **File:** `pages/terms.md`
- **Template:** `templates/page-template.```liquid`
- **Sections:** Terms, conditions, legal notice

**Usage:**
```markdown
---
title: Terms of Service
layout: terms
---

# Terms & Conditions

By using this site you agree to...
```
## Dynamic Pages (Shopify Built-in)

### Account Pages

| Page | URL | Template | Description |
|------|-----|----------|-------------|
| My Account | `/account` | `customer-account.```liquid` | Customer account dashboard |
| Orders | `/account/orders` | `customer-orders.```liquid` | Order history |
| Addresses | `/account/addresses` | `customer-addresses.```liquid` | Shipping addresses |
| Profile | `/account/profile` | `customer-profile.```liquid` | Profile settings |
| Login | `/account/login` | `login.```liquid` | Customer login form |

### Cart & Checkout

| Page | URL | Template | Description |
|------|-----|----------|-------------|
| Shopping Cart | `/cart` | `cart.```liquid` | Cart with items and checkout |
| Checkout | `/checkout` | `checkout.```liquid` | Payment and shipping |
| Order Status | `/orders/[id]` | `order-status.```liquid` | Order tracking |

### Collection Pages

| Page | URL | Template | Description |
|------|-----|----------|-------------|
| Collection Grid | `/collections/all` | `list-collections-grid.```liquid` | All collections grid |
| Single Collection | `/collections/[handle]` | `collection-template.```liquid` | Individual collection page |

### Product Pages

| Page | URL | Template | Description |
|------|-----|----------|-------------|
| Product Detail | `/products/[handle]` | `product-template.```liquid` | Individual product page |

### Blog Pages

| Page | URL | Template | Description |
|------|-----|----------|-------------|
| Blog Index | `/blog` | `list-blogs.```liquid` | Blog index page |
| Single Article | `/blog/[handle]` | `article-template.```liquid` | Individual blog post |

## Custom Page Types

### Newsletter Signup Landing

A dedicated landing page for newsletter signup:

- **File:** `pages/newsletter.md`
- **Template:** `templates/page-template.```liquid`
- **Sections:** Hero with signup form, benefits list

**Usage:**
```markdown
---
title: Join Our Newsletter
layout: newsletter-landing
---

# Stay Updated

Subscribe to our newsletter for exclusive deals...
```
### Size Guide Landing

A dedicated size guide page:

- **File:** `pages/size-guide.md`
- **Template:** `templates/page-template.```liquid`
- **Sections:** Size chart, measurement guide

**Usage:**
```markdown
---
title: Size Guide
layout: size-guide
---

# Size Guide

Find your perfect fit...
```
## Related Documentation

- [Page Templates](./templates) — Template files overview
- [Sections](./sections-summary) — All sections list
- [Snippets](./snippets-summary) — All snippets list

