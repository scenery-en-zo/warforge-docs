---
id: sections
title: Sections
sidebar_label: "Sections"
sidebar_position: 5
---

# Sections

This page documents every section in the Warforge theme, including what each does and how to configure it via the Theme Editor.

## What are Sections?

Sections are self-contained page components that can be added, removed, and reordered via the Theme Editor. Each section file contains HTML/Liquid markup, CSS, JavaScript, and a `{% schema %}` JSON block that defines the settings merchants can change.

---

## Layout Sections (main-\*)

These sections define the overall layout of specific page types. They're automatically loaded based on the template JSON configuration.

### `main-product.```liquid`

The main product page layout that combines multiple feature sections into a cohesive product detail page.

**What it does:**

- Renders hero image with zoom effect
- Product title and price
- Variant selector (color, size options)
- Add to cart button
- Product description
- Meta information (SKU, weight, dimensions)
- Related products
- Reviews section

**Configuration:**
No direct configuration — sections are added/removed via Theme Editor.

---

### `main-collection.```liquid`

Collection (shop/category) page layout with filters and product grid.

**What it does:**

- Collection header with title and description
- Filter toolbar on left sidebar
- Product grid display
- Pagination controls

**Configuration:**
No direct configuration — sections are added/removed via Theme Editor.

---

### `main-article.```liquid`

Blog post layout with content, comments, and related articles.

**What it does:**

- Article title and metadata (author, date, tags)
- Featured image
- Content body
- Table of contents (if enabled)
- Comments section
- Share buttons

---

### `main-blog.```liquid`

Blog listing page layout with article cards.

**What it does:**

- Blog header
- Article card grid
- Pagination or infinite scroll

---

### `cart.```liquid`

Cart page layout with cart items and checkout CTA.

**What it does:**

- Cart item list with quantities
- Coupon code field
- Subtotal, shipping, tax calculations
- Checkout button

---

### `customer-account.```liquid`

Customer account dashboard layout.

**What it does:**

- Account navigation (orders, addresses, profile)
- Recent orders
- Account settings

---

### `customer-addresses.```liquid`

Customer address management page.

**What it does:**

- Address list
- Add new address form
- Edit/delete existing addresses

---

### `customer-login.```liquid`

Login page layout.

**What it does:**

- Login form with email/password
- "Forgot password" link
- Register account link

---

### `customer-order.```liquid`

Order details page layout.

**What it does:**

- Order items list
- Shipping address
- Payment method
- Order status
- Track order link

---

### `customer-register.```liquid`

Registration form layout.

**What it does:**

- Registration form with email/password
- Terms of service checkbox
- Privacy policy link

---

## Feature Sections (standalone)

These sections can be added to any page via the Theme Editor and provide specific functionality or content.

### `hero.```liquid`

Full-width hero section with image, title, subtitle, and CTA button.

<div style={{backgroundColor: '#162033', borderRadius: '14px', padding: '48px', margin: '24px 0'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px'}}>
    <div>
      <h2 style={{fontFamily: "Cinzel, serif", fontSize: '36px', margin: '0 0 8px 0'}}>Welcome to Warforge</h2>
      <p style={{color: '#94A3B8', margin: '0'}}>Premium tabletop hobby supplies for wargaming and RPG</p>
    </div>
    <button style={{backgroundColor: '#F97316', color: 'white', padding: '14px 28px', fontWeight: '600', border: 'none', borderRadius: '10px', cursor: 'pointer'}}>Shop Now</button>
  </div>
</div>

**Schema settings:**

- **Background image** — Image picker for hero background
- **Title** — Text input for heading
- **Subtitle** — Text area for description
- **Button text** — Text input for CTA label
- **Button link** — URL input for button destination
- **Show overlay** — Toggle to add dark overlay

---

### `featured-collections.```liquid`

Grid of featured collections with images and titles.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
  <div style={{backgroundColor: '#2C3B52', borderRadius: '10px', padding: '16px', textAlign: 'center'}}>
    <div style={{aspectRatio: '4/3', backgroundColor: '#1E293B', borderRadius: '8px', marginBottom: '12px'}}></div>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '16px'}}>Miniatures</h4>
  </div>
  <div style={{backgroundColor: '#2C3B52', borderRadius: '10px', padding: '16px', textAlign: 'center'}}>
    <div style={{aspectRatio: '4/3', backgroundColor: '#1E293B', borderRadius: '8px', marginBottom: '12px'}}></div>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '16px'}}>Terrain</h4>
  </div>
  <div style={{backgroundColor: '#2C3B52', borderRadius: '10px', padding: '16px', textAlign: 'center'}}>
    <div style={{aspectRatio: '4/3', backgroundColor: '#1E293B', borderRadius: '8px', marginBottom: '12px'}}></div>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '16px'}}>Paints</h4>
  </div>
</div>

**Schema settings:**

- **Collections to feature** — Select multiple collections from dropdown
- **Layout** — Grid columns: 2, 3, or 4
- **Show titles** — Toggle for collection titles

---

### `featured-products.```liquid`

Curated product grid for highlighting specific items.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px'}}>
  <div style={{backgroundColor: '#2C3B52', borderRadius: '10px', padding: '16px', textAlign: 'center'}}>
    <div style={{aspectRatio: '4/3', backgroundColor: '#1E293B', borderRadius: '8px', marginBottom: '12px'}}></div>
    <h5 style={{fontFamily: "Cinzel, serif", fontSize: '14px'}}>Featured Product</h5>
  </div>
  <div style={{backgroundColor: '#2C3B52', borderRadius: '10px', padding: '16px', textAlign: 'center'}}>
    <div style={{aspectRatio: '4/3', backgroundColor: '#1E293B', borderRadius: '8px', marginBottom: '12px'}}></div>
    <h5 style={{fontFamily: "Cinzel, serif", fontSize: '14px'}}>Featured Product</h5>
  </div>
  <div style={{backgroundColor: '#2C3B52', borderRadius: '10px', padding: '16px', textAlign: 'center'}}>
    <div style={{aspectRatio: '4/3', backgroundColor: '#1E293B', borderRadius: '8px', marginBottom: '12px'}}></div>
    <h5 style={{fontFamily: "Cinzel, serif", fontSize: '14px'}}>Featured Product</h5>
  </div>
  <div style={{backgroundColor: '#2C3B52', borderRadius: '10px', padding: '16px', textAlign: 'center'}}>
    <div style={{aspectRatio: '4/3', backgroundColor: '#1E293B', borderRadius: '8px', marginBottom: '12px'}}></div>
    <h5 style={{fontFamily: "Cinzel, serif", fontSize: '14px'}}>Featured Product</h5>
  </div>
</div>

**Schema settings:**

- **Products to feature** — Select products from dropdown (up to 20)
- **Layout** — Grid columns: 2, 3, or 4
- **Show prices** — Toggle for displaying prices

---

### `new-arrivals.```liquid`

Recently added products section.

**Schema settings:**

- **Number of products** — Range slider (6-20)
- **Layout** — Grid columns: 2, 3, or 4
- **Show badges** — Toggle for new arrival badges

---

### `popular-tags.```liquid`

Tag cloud filter for browsing products by category.

<div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
  <span class="badge badge--miniature" style={{backgroundColor: '#2C3B52', color: '#94A3B8', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer'}}>Miniatures</span>
  <span class="badge badge--miniature" style={{backgroundColor: '#2C3B52', color: '#94A3B8', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer'}}>Terrain</span>
  <span class="badge badge--miniature" style={{backgroundColor: '#2C3B52', color: '#94A3B8', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer'}}>Paints</span>
  <span class="badge badge--miniature" style={{backgroundColor: '#2C3B52', color: '#94A3B8', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer'}}>Tools</span>
  <span class="badge badge--miniature" style={{backgroundColor: '#2C3B52', color: '#94A3B8', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer'}}>Bases</span>
  <span class="badge badge--miniature" style={{backgroundColor: '#2C3B52', color: '#94A3B8', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer'}}>Materials</span>
</div>

**Schema settings:**

- **Show tag cloud** — Toggle to enable/disable section
- **Number of tags** — Range slider (5-20)
- **Layout** — Grid columns: 3 or 4

---

### `newsletter.```liquid`

Email signup form for newsletter subscription.

<div style={{backgroundColor: '#162033', borderRadius: '14px', padding: '24px'}}>
  <h3 style={{fontFamily: "Cinzel, serif", fontSize: '24px', marginBottom: '8px'}}>Join our newsletter</h3>
  <p style={{color: '#94A3B8', fontSize: '14px', marginBottom: '16px'}}>Get the latest tutorials, product announcements, and exclusive discounts.</p>
  <form style={{display: 'flex', gap: '8px'}}>
    <input type="email" placeholder="Enter your email" style={{flex: '1', backgroundColor: '#2C3B52', border: '1px solid #2C3B52', borderRadius: '8px', padding: '10px 14px', color: '#F8FAFC'}}/>
    <button type="submit" style={{backgroundColor: '#F97316', color: 'white', padding: '10px 20px', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Subscribe</button>
  </form>
</div>

**Schema settings:**

- **Section title** — Text input for heading
- **Description** — Text area for description text
- **Button text** — Text input for subscribe button
- **Link to privacy policy** — URL for privacy policy link

---

### `features.```liquid`

Icon + text feature blocks (free shipping, quality products, etc.).

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
  <div style={{backgroundColor: '#162033', borderRadius: '14px', padding: '24px', textAlign: 'center'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '16px', margin: '16px 0 8px 0'}}>Free Shipping</h4>
    <p style={{color: '#94A3B8', fontSize: '13px'}}>On orders over €100</p>
  </div>
  <div style={{backgroundColor: '#162033', borderRadius: '14px', padding: '24px', textAlign: 'center'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '16px', margin: '16px 0 8px 0'}}>Premium Quality</h4>
    <p style={{color: '#94A3B8', fontSize: '13px'}}>Top brands only</p>
  </div>
  <div style={{backgroundColor: '#162033', borderRadius: '14px', padding: '24px', textAlign: 'center'}}>
    <h4 style={{fontFamily: "Cinzel, serif", fontSize: '16px', margin: '16px 0 8px 0'}}>Fast Delivery</h4>
    <p style={{color: '#94A3B8', fontSize: '13px'}}>From our warehouse</p>
  </div>
</div>

**Schema settings:**

- **Feature blocks** — Add multiple feature blocks with icons, titles, and descriptions
- **Layout** — Grid columns: 2 or 3

---

### `blog-preview.```liquid`

Blog article preview cards for the homepage.

<div style={{backgroundColor: '#162033', borderRadius: '14px', padding: '24px'}}>
  <div style={{aspectRatio: '4/3', backgroundColor: '#2C3B52', borderRadius: '8px', marginBottom: '12px'}}></div>
  <span style={{fontSize: '10px', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Projects</span>
  <h3 style={{fontFamily: "Cinzel, serif", fontSize: '18px', margin: '8px 0'}}>HET MAKEN VAN EEN 120MM LEISTEEN BASE OVAAL</h3>
  <p style={{color: '#94A3B8', fontSize: '14px', lineHeight: '1.6', marginBottom: '12px'}}>Als aanvulling op de diverse leisteen bases, heb ik de vraag gekregen v...</p>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <span style={{fontSize: '12px', color: '#64748B'}}>Feb 26 • Peter Scholtes</span>
    <a href="#" style={{color: '#F97316', fontWeight: '600', textDecoration: 'none'}}>Read more →</a>
  </div>
</div>

**Schema settings:**

- **Number of articles** — Range slider (4-8)
- **Layout** — Grid columns: 2 or 3
- **Card style** — Compact, standard, or large

---

### `footer-group.```liquid`

Footer section with multiple columns of links and information.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px'}}>
  <div>
    <h5 style={{fontFamily: "Cinzel, serif", fontSize: '14px', textTransform: 'uppercase'}}>Shop</h5>
    <ul style={{listStyle: 'none', padding: '0', marginTop: '12px'}}>
      <li style={{marginBottom: '8px'}}><a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>Home</a></li>
      <li style={{marginBottom: '8px'}}><a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>Miniatures</a></li>
      <li style={{marginBottom: '8px'}}><a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>Terrain</a></li>
    </ul>
  </div>
  <div>
    <h5 style={{fontFamily: "Cinzel, serif", fontSize: '14px', textTransform: 'uppercase'}}>Legal</h5>
    <ul style={{listStyle: 'none', padding: '0', marginTop: '12px'}}>
      <li style={{marginBottom: '8px'}}><a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>Privacy Policy</a></li>
      <li style={{marginBottom: '8px'}}><a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>Terms of Service</a></li>
    </ul>
  </div>
  <div>
    <h5 style={{fontFamily: "Cinzel, serif", fontSize: '14px', textTransform: 'uppercase'}}>Contact</h5>
    <p style={{color: '#94A3B8', fontSize: '13px', marginBottom: '8px'}}>Hobbylaan 123<br/>Creatieve Stad, Nederland</p>
    <p style={{color: '#94A3B8', fontSize: '13px'}}>info@sceneryenzo.nl</p>
  </div>
  <div>
    <h5 style={{fontFamily: "Cinzel, serif", fontSize: '14px', textTransform: 'uppercase'}}>Newsletter</h5>
    <input type="email" placeholder="Email" style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #2C3B52', borderRadius: '8px', padding: '8px 12px', color: '#F8FAFC', marginBottom: '8px'}}/>
    <button style={{backgroundColor: '#F97316', color: 'white', padding: '8px 16px', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Subscribe</button>
  </div>
</div>

**Schema settings:**

- **Footer columns** — Configure number and content of footer sections
- **Social media links** — Add Facebook, Instagram, YouTube, etc.

---

## Page-Specific Sections

These sections are rendered on specific page types based on their template configuration.

### `collection-header.```liquid`

Collection page header with title, description, and meta information.

**Schema settings:**

- **Title** — Text input for collection title
- **Description** — Text area for collection description
- **Show meta info** — Toggle for SKU, product count, etc.

---

### `collection-toolbar.```liquid`

Collection page filter toolbar with category and brand filters.

**Schema settings:**

- **Show parent collection filter** — Toggle for hierarchical filtering
- **Show subcategories** — Toggle for showing child categories
- **Filter layout** — Grid columns for filter buttons

---

### `collections.```liquid`

Collections listing page (all collections view).

**Schema settings:**

- **Layout** — Grid: 3 or 4 columns
- **Show collection descriptions** — Toggle for displaying descriptions

---

### `product-main.```liquid`

Product detail page main content area with image gallery and details.

**Schema settings:**

- **Image layout** — Grid vs slider layout
- **Show zoom** — Toggle for image zoom on hover
- **Show comparisons** — Toggle for comparing products

---

### `product-details.```liquid`

Product details tab (additional information, specifications, etc.).

**Schema settings:**

- **Tab title** — Text input for tab heading
- **Description** — Text area for additional product information

---

### `related-products.```liquid`

Related products section at the bottom of product pages.

**Schema settings:**

- **Number of products** — Range slider (4-8)
- **Layout** — Grid columns: 2, 3, or 4

---

### `image-with-text.```liquid`

Image + text layout for various purposes (about sections, features, etc.).

<div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
  <div style={{flex: '1'}}>
    <div style={{aspectRatio: '4/3', backgroundColor: '#2C3B52', borderRadius: '10px'}}></div>
  </div>
  <div style={{flex: '1'}}>
    <h3 style={{fontFamily: "Cinzel, serif", fontSize: '24px', marginBottom: '12px'}}>About Our Mission</h3>
    <p style={{color: '#94A3B8', lineHeight: '1.6', marginBottom: '16px'}}>We are dedicated to providing high-quality materials to help you build your dream battlefield.</p>
    <a href="#" style={{color: '#F97316', fontWeight: '600', textDecoration: 'none'}}>Learn more →</a>
  </div>
</div>

**Schema settings:**

- **Image** — Image picker for section image
- **Title** — Text input for heading
- **Description** — Text area for description
- **Button text** — Text input for CTA label
- **Button link** — URL for button destination
- **Alignment** — Left, center, or right alignment

---

### `promo-block.```liquid`

Promotional block for announcements, sales, or featured content.

<div style={{backgroundColor: '#162033', borderRadius: '14px', padding: '24px', textAlign: 'center'}}>
  <h3 style={{fontFamily: "Cinzel, serif", fontSize: '24px', marginBottom: '8px'}}>WEEKLY SPECIALS</h3>
  <p style={{color: '#94A3B8', fontSize: '14px', marginBottom: '16px'}}>Discover amazing deals on our latest arrivals</p>
  <a href="#" style={{backgroundColor: '#F97316', color: 'white', padding: '12px 24px', fontWeight: '600', border: 'none', borderRadius: '8px', textDecoration: 'none'}}>Shop Deals →</a>
</div>

**Schema settings:**

- **Title** — Text input for promotional heading
- **Description** — Text area for description
- **Button text** — Text input for CTA label
- **Button link** — URL for button destination
- **Background image** — Image picker for background (optional)

---

## Learn More

- [Shopify Sections reference](https://shopify.dev/docs/storefronts/themes/architecture/sections)
- [Section schema guide](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema)
- [Theme editor guide](https://shopify.dev/docs/storefronts/themes/tools/online-editor)
