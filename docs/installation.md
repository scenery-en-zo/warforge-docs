---
id: installation
title: Installation & Setup
sidebar_label: 'Installation'
---

# Installation & Setup Guide

This guide covers installing and setting up the Warforge theme for your Shopify store.

## Prerequisites

- Shopify store (Basic plan or higher)
- Basic understanding of Shopify admin
- Access to theme editor

## Step 1: Install the Theme

### Via Theme Store

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Add theme"** button
3. Search for **"Warforge"** in the theme store
4. Click **"Add"** next to Warforge theme
5. Click **"Publish"** after installation

### Via ZIP File

1. Download the theme ZIP from GitHub or source
2. Go to **Online Store → Themes**
3. Click **"..."** → **"Add theme"** → **"Upload ZIP file"**
4. Select the downloaded ZIP file
5. Click **"Upload"** and then **"Publish"**

## Step 2: Configure Theme Settings

### Access Theme Editor

1. Go to **Online Store → Themes**
2. Click **"Customize"** on your theme
3. Use the left sidebar to select sections

### Basic Settings

In the theme editor, configure:

- **Header Section**: Upload logo, set menu
- **Footer Section**: Configure links and newsletter
- **Color Scheme**: Choose accent colors
- **Typography**: Adjust font sizes (optional)

## Step 3: Set Up Navigation

### Main Menu

1. Go to **Shopify Admin → Online Store → Navigation**
2. Click **"Main menu"**
3. Add your top-level navigation items:
   - Home
   - Miniatures
   - Terrain & Scenery
   - Paints & Brushes
   - Tools
   - About Us
   - Contact

### Structured Dropdowns

For rich dropdown menus (Miniatures, Terrain, etc.):

1. Add menu item with handle matching the key:
   - `miniatures` → renders miniatures dropdown
   - `terrain-scenery` → renders terrain dropdown
   - `paints` → renders paints dropdown
   - etc.

See [Navigation](./navigation) for details on structured dropdowns.

## Step 4: Add Content Pages

### About Us Page

1. Go to **Online Store → Pages**
2. Click **"Add page"**
3. Title: "About Us"
4. Template: Select "page-template" or leave blank
5. Add content about your company
6. Click **"Save"**

### Contact Page

1. Create new page titled "Contact Us"
2. Use the contact form section in theme editor
3. Or add custom contact information

### Shipping Policy Page

1. Create new page titled "Shipping Information"
2. Add shipping policies and delivery times
3. Set as required page in Shopify settings

### Privacy Policy Page

1. Create new page titled "Privacy Policy"
2. Add GDPR/compliance information
3. Link from footer

## Step 5: Configure Products

### Add Your First Product

1. Go to **Shopify Admin → Products**
2. Click **"Add product"**
3. Fill in details:
   - Title
   - Description
   - Price
   - Images (upload high-quality photos)
   - Variants (size, color if applicable)
4. Add metafields if using custom data

### Product Metafields

For advanced product data:

1. Go to **Shopify Admin → Products**
2. Click **"..."** → **"Edit metafields"**
3. Add custom fields like:
   - Material type
   - Rarity level
   - Dimensions
   - Tags

## Step 6: Configure Collections

### Create Collection

1. Go to **Shopify Admin → Collections**
2. Click **"Create collection"**
3. Name your collection (e.g., "Miniature Bases")
4. Choose source: Manual or Automatic
5. Add products to collection

### Featured Collections

In theme editor:

1. Navigate to homepage
2. Edit **Featured Products** section
3. Select collections to showcase

## Step 7: Set Up Blog (Optional)

### Enable Blog

1. Go to **Shopify Admin → Online Store → Navigation**
2. Add blog link to menu if desired
3. Go to **Blog Posts** to create posts

### Create First Blog Post

1. Go to **Online Store → Blog Posts**
2. Click **"Add blog post"**
3. Title and content about tabletop gaming
4. Publish or schedule

## Step 8: Test the Theme

### Check on Different Devices

- Desktop browser
- Tablet (resize window)
- Mobile phone

### Test Key Functions

- Add products to cart
- Complete checkout process
- View order confirmation
- Access customer account pages
- Use search functionality

### Verify SEO Settings

1. Go to **Online Store → Preferences**
2. Set default SEO settings:
   - Page title format
   - Meta description format
   - Canonical URLs

## Step 9: Optimize Performance

### Image Optimization

- Compress images before upload (use TinyPNG or similar)
- Use WebP format where possible
- Keep product images under 2MB
- Use responsive images for galleries

### Code Optimization

- Minify CSS and JS in theme settings
- Remove unused code from custom files
- Use lazy loading for images

## Troubleshooting

### Theme Not Appearing

1. Refresh browser cache (Ctrl+F5)
2. Clear Shopify cache
3. Check file permissions if using SSH

### Section Not Showing

1. Check section is enabled in theme editor
2. Verify correct template is assigned to page
3. Review Liquid syntax for errors

### JavaScript Errors

1. Open browser console (F12)
2. Look for red error messages
3. Clear browser cache
4. Check for conflicting apps/scripts

## Next Steps

After installation:

1. [Customize Sections](./sections-summary) — Reorder and edit sections
2. [Add Components](../design-system) — Use UI components
3. [Create Pages](./pages-about) — Build content pages
4. [Set Up Metafields](./advanced-metafields) — Add custom product data

## Support Resources

- [Shopify Help Center](https://help.shopify.com/)
- [Liquid Documentation](https://shopify.dev/docs/themes/```liquid)
- [Theme Codebase](https://github.com/anomalyco/opencode)

---

<div style={{backgroundColor: '#2C3B52', borderRadius: '12px', padding: '24px', marginTop: '32px'}}>
  <h3 style={{fontFamily: "Cinzel, serif", fontSize: '18px', color: '#F8FAFC', marginBottom: '12px'}}>Ready to Customize?</h3>
  <p style={{color: '#94A3B8', fontSize: '14px', lineHeight: '1.6', margin: '0 0 16px 0'}}>Now that your theme is installed, start customizing!</p>
  
  
<!-- Liquid example -->'button', 
    label: 'View Components',
    href: '../design-system',
    style: 'primary'
  %}```
</div>

