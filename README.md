# Warforge Theme Documentation

This is the official documentation for the **Warforge** Shopify theme, built by [Scenery en Zo](https://scenery-en-zo.myshopify.com/).

## 🎯 What is the Warforge Theme?

Warforge is a premium Shopify 2.0 theme designed specifically for tabletop gaming, wargaming, and hobby supply stores. It features:

- **Dark mode by default** — A rich, atmospheric design perfect for RPG and gaming aesthetics
- **WebGL 3D effects** — Floating dice and ember particles powered by Three.js
- **Advanced filtering** — Faceted navigation with support for custom metafields
- **Responsive design** — Optimized for all devices with mobile-first architecture
- **Multilingual support** — Built-in Dutch, English, and German translations

## 📚 Documentation Structure

### Core Reference Pages

- **[Overview](/)** — Introduction to the theme and its features
- **[Architecture](/architecture)** — Theme file structure and how components relate
- **[Design System](/design-system)** — Complete component library with visual examples
- **[Sections](/sections)** — All 40+ sections with configuration options
- **[Snippets](/snippets)** — Reusable Liquid components and usage patterns

### Guide Pages

- **[Templates](/templates)** — Page layout definitions and JSON templates
- **[Navigation & Menus](/navigation)** — Header, footer, and navigation setup
- **[Product Cards](/product-cards)** — Product grid variants and customization
- **[Accessibility](/accessibility)** — WCAG compliance and best practices
- **[How to Customize](/customization)** — Theme editor walkthrough

## 🚀 Getting Started

### For Developers

1. **Clone the theme** from your Shopify admin → Online Store → Themes → Edit code
2. **Review the architecture** in [`docs/architecture.md`](docs/architecture.md)
3. **Explore the design system** in [`docs/design-system.md`](docs/design-system.md)
4. **Customize sections** via Online Store → Themes → Customize

### For Merchants

1. **Open Theme Editor** — Click "Customize" in your Shopify admin
2. **Add/remove sections** — Drag and drop to reorder homepage sections
3. **Configure settings** — Use the right panel to adjust colors, fonts, layouts
4. **Edit navigation** — Online Store → Navigation to manage menus

## 🎨 Design System Quick Reference

### Colors

```css
/* Primary accent (orange) */
--accent-orange: #F97316;

/* Backgrounds */
--bg-primary: #131720;      /* Main dark background */
--bg-secondary: #1A2033;    /* Surface cards/sections */
--bg-tertiary: #0A0E16;     /* Footer/navbar */

/* Text */
--text-primary: #F8FAFC;    /* White/light gray */
--text-secondary: #94A3B8;  /* Muted text */
--text-tertiary: #64748B;   /* Subtle text */
```

### Typography

```css
/* Headings (Cinzel serif) */
h1 { font-size: 2.5rem; }      /* 40px */
h2 { font-size: 2rem; }        /* 32px */
h3 { font-size: 1.5rem; }      /* 24px */

/* Body (Inter sans-serif) */
body { font-family: 'Inter', sans-serif; }
```

### Spacing

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
```

## 🛠️ Technical Stack

### Frontend

- **Liquid** — Shopify's templating language
- **HTML5/CSS3** — Semantic markup with CSS custom properties
- **JavaScript (ES6+)** — Client-side interactions
- **Three.js** — WebGL 3D effects for hero scenes

### Dependencies

- **Shopify Online Store 2.0** — App blocks, JSON templates, isolated scopes
- **Prism.js** — Code syntax highlighting

## 📖 Contributing

This documentation is maintained by the Scenery en Zo team. To report issues or suggest improvements:

1. Check existing issues on GitHub
2. Create a new issue with reproduction steps
3. Submit pull requests for documentation updates

## 🔗 Useful Links

- **Live Store**: https://scenery-en-zo.myshopify.com/
- **Shopify Theme Docs**: https://shopify.dev/docs/storefronts/themes
- **Liquid Reference**: https://shopify.dev/docs/api/liquid

## 📄 License

The Warforge theme is licensed under the Shopify Terms of Service. Documentation is provided as-is for reference purposes.

---

**Built with ❤️ by Scenery en Zo** | [Visit our store](https://scenery-en-zo.myshopify.com/)
