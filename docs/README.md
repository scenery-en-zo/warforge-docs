# Warforge Theme Documentation

Complete documentation for customizing the Warforge Shopify theme - designed for premium tabletop gaming supply stores.

## 📚 Quick Overview

The Warforge theme provides a professional, dark-themed e-commerce experience with WebGL 3D effects, optimized for selling miniature bases, terrain pieces, paints, and tools for tabletop gamers.

## 🎯 What's Included

### Components (20+ UI Elements)
- Buttons, badges, icons, inputs, textareas, checkboxes, radios
- Alerts, toasts, cookie banners
- All with on-brand styling matching Scenery en Zo theme

### Sections (30+ Layout Components)
- Header, footer, hero sections (with WebGL effects)
- Featured products, new arrivals, bestsellers
- Newsletter signup, feature blocks
- Product grids, galleries, reviews

### Templates (8 Page Templates)
- Homepage, collection grid, product detail
- Blog/article pages, static page template
- Cart, checkout, customer account pages

### Advanced Features
- WebGL/Three.js 3D effects (floating dice, ember particles)
- Product metafields system
- Performance optimization built-in
- SEO-ready structure

## 🚀 Getting Started

1. **Install the theme** in your Shopify store
2. **Configure settings** via theme editor
3. **Set up navigation** with Shopify menus
4. **Add content pages** (About, Contact, Shipping, Privacy)
5. **Add products and collections**
6. **Customize sections** to match your brand

## 📖 Documentation Structure

```
docs/
├── introduction.md              # Theme overview
├── installation.md              # Setup guide
├── navigation.md                # Navigation systems
├── components/                  # UI element docs
│   ├── buttons.md
│   ├── badges.md
│   ├── icons.md
│   ├── inputs.md
│   └── ... (15 more)
├── sections/                    # Layout component docs
│   ├── main-layout.md
│   ├── header.md
│   ├── footer.md
│   ├── hero.md
│   └── ... (20+ more)
├── snippets/                   # Reusable code blocks
│   ├── breadcrumbs.md
│   ├── pagination.md
│   └── ... (10+ more)
├── templates/                  # Page layout docs
├── pages/                      # Content page docs
├── advanced/                   # Technical guides
│   ├── ```liquid-filters.md
│   ├── metafields.md
│   ├── webgl-effects.md
│   └── performance.md
└── SUMMARY_PAGES/             # Quick reference lists
    ├── components.md
    ├── sections-summary.md
    ├── snippets-summary.md
    └── pages-summary.md
```
## 🎨 Design System

### Colors (On-Brand)
- Primary: `#F97316` (Orange accent)
- Secondary: `#F8FAFC` (Light text)
- Background: `#0A0E16` → `#1A2033` → `#2C3B52`
- Success: `#22C55E`, Warning: `#F59E0B`

### Typography
- Headings: Cinzel (serif)
- Body: Inter (sans-serif)
- Monospace: JetBrains Mono

### Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 48, 64

## 🛠️ Key Files to Know

| File | Purpose |
|------|---------|
| `config/settings_schema.json` | Theme editor settings |
| `config/settings_data.json` | Default values |
| `layout/theme.```liquid` | Main layout wrapper |
| `sections/header.```liquid` | Header section |
| `sections/footer.```liquid` | Footer section |
| `assets/theme.css` | Theme styles |
| `assets/theme.js` | Theme JavaScript |

## 🔧 Common Tasks

### Add a New Section

1. Create file in `sections/` directory
2. Use existing sections as reference
3. Call from layout with `{% section 'your-section' %}`

### Create a Reusable Snippet

1. Create file in `snippets/` directory
2. Define parameters at top of file
3. Include in sections or templates

### Customize Product Card

```liquid
```liquid
```
  product: product,
  show_rating: true,
  show_quick_add: true
%&#125;```
```

## 📱 Responsive Design

The theme is fully responsive with breakpoints at:
- Mobile: ≤768px
- Tablet: ≤1024px
- Desktop: >1024px

## 🚀 Performance Features

- Lazy loading for images
- Code-splitting for heavy scripts
- WebGL effects load after critical content
- Optimized asset delivery

## 🔐 Security Best Practices

- Sanitize all user inputs
- Use Shopify's built-in escaping
- Avoid inline event handlers
- Validate form submissions server-side

## 📝 License

The Warforge theme is provided as-is for educational purposes. For commercial use, please contact Scenery en Zo directly.

## 💬 Support

For issues or questions:
1. Check the documentation first
2. Review Shopify's theme docs
3. Contact support@scenery-en-zo.com

## 🌐 Live Demo

View the live theme at: https://scenery-en-zo.myshopify.com

## 📄 Shopify Resources

- [Shopify Theme Docs](https://shopify.dev/themes)
- [Liquid Language Guide](https://shopify.dev/docs/themes/```liquid)
- [Storefront API Reference](https://shopify.dev/docs/api/storefront)
- [Shopify Help Center](https://help.shopify.com/)

---

**Built with ❤️ for tabletop gaming enthusiasts**

