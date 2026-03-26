---
id: design-system
title: Design System
sidebar_label: 'Design System'
sidebar_position: 2
---

# Design System

This document defines the complete visual language for the Warforge theme, including colors, typography, spacing, components, and patterns.

## Color System

### Background Scale

| Token    | Hex     | Usage                    |
|----------|---------|--------------------------|
| `bg-900` | #0F172A | Page background          |
| `bg-800` | #162033 | Section blocks           |
| `bg-700` | #1E293B | Cards, elevated panels   |
| `bg-600` | #243247 | Form inputs, hover states|
| `bg-500` | #2C3B52 | Secondary surfaces       |

### Accent (Brand Orange)

| Token         | Hex                  | Usage              |
|---------------|----------------------|--------------------|
| `accent-500`  | #F97316              | Primary CTA        |
| `accent-600`  | #EA580C              | Hover state        |
| `accent-700`  | #C2410C              | Active/Pressed     |
| `accent-glow` | rgba(249,115,22,.35) | Focus ring         |

### Semantic Colors

| Type    | Hex     | Usage            |
|---------|---------|------------------|
| Success | #22C55E | Confirmations    |
| Warning | #F59E0B | Alerts, badges   |
| Error   | #EF4444 | Error states     |
| Info    | #3B82F6 | Notices          |

### Text Hierarchy

| Token          | Hex     | Usage                    |
|----------------|---------|--------------------------|
| `text-primary` | #F8FAFC | Headings, primary text   |
| `text-secondary` | #CBD5E1 | Body text                |
| `text-muted`   | #94A3B8 | Secondary labels         |
| `text-disabled` | #64748B | Disabled states          |

---

## Typography System

### Font Families

```css
/* Headings (Serif Display) */
font-family: "Cinzel", "Playfair Display", Georgia, serif;

/* Body (Sans-Serif) */
font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Monospace */
font-family: 'Fira Code', 'JetBrains Mono', Consolas, monospace;
```

### Heading Sizes

| Level | Size   | Line Height | Letter Spacing |
|-------|--------|-------------|----------------|
| H1    | 40px   | 1.2         | 0.04em         |
| H2    | 32px   | 1.25        | 0.04em         |
| H3    | 24px   | 1.3         | 0.03em         |
| H4    | 20px   | 1.35        | 0.02em         |

### Body Text Sizes

| Size   | Font Size | Line Height | Use Case              |
|--------|-----------|-------------|-----------------------|
| Large  | 20px      | 1.6         | Lead paragraphs       |
| Base   | 16px      | 1.6         | Body text             |
| Small  | 14px      | 1.5         | Captions, metadata    |
| Micro  | 12px      | 1.4         | Labels, helper text   |

---

## Spacing System (8px Grid)

All layout spacing normalized to this grid:

| Token   | Value | Usage Examples                    |
|---------|-------|-----------------------------------|
| `space-1` | 4px   | Tight padding, small gaps         |
| `space-2` | 8px   | Button vertical padding           |
| `space-3` | 12px  | Icon spacing, small margins       |
| `space-4` | 16px  | Section padding, card gaps        |
| `space-5` | 24px  | Card internal padding             |
| `space-6` | 32px  | Section spacing, grid gutters     |
| `space-7` | 40px  | Hero sections, feature blocks     |
| `space-8` | 48px  | Page margins, container padding   |

---

## Radius System

| Token     | Value | Component                    |
|-----------|-------|------------------------------|
| `radius-sm` | 6px   | Badges, small icons          |
| `radius-md` | 10px  | Buttons, inputs              |
| `radius-lg` | 14px  | Cards, panels                |
| `radius-xl` | 20px  | Modals, popovers             |

---

## Elevation / Shadows

### Base Card

```css
box-shadow: 0 4px 10px rgba(0,0,0,0.25);
```

### Hover Card

```css
box-shadow: 0 8px 20px rgba(0,0,0,0.4);
transform: translateY(-2px);
transition: all 150ms;
```

---

## Button System

### Primary Button (CTA)

```liquid
<button class="button button--primary">
  Add to Cart
</button>
```

**States:**
- **Default**: Background `accent-500` (#F97316)
- **Hover**: Background `accent-600` (#EA580C)
- **Active**: Background `accent-700` (#C2410C), scale 0.98

### Secondary Button (Outline)

```liquid
<button class="button button--secondary">
  Learn More
</button>
```

**States:**
- **Default**: Transparent background, slate border
- **Hover**: Background becomes `bg-600` (#243247)

### Ghost Button

```liquid
<button class="button button--ghost">
  Edit
</button>
```

**States:**
- **Default**: Muted text, transparent background
- **Hover**: Text color becomes `accent-500` (#F97316)

---

## Card System

### Product Card

```liquid
<div class="product-card">
  <div class="product-card__media">
    <img src="{{ product.featured_image }}" alt="{{ product.title }}" />
  </div>
  <span class="product-card__category">Miniatures</span>
  <h3 class="product-card__title">Battlefield Resin Skulls</h3>
  <div class="product-card__price">
    <span class="price">€24,95</span>
    <button class="button button--primary">Add to Cart</button>
  </div>
</div>
```

**Structure:**
1. Image (4:3 aspect ratio)
2. Category label (small, uppercase)
3. Title (serif, prominent)
4. Price (accent color)
5. Action button (bottom-right)

### Blog Card

```liquid
<div class="blog-card">
  <div class="blog-card__media">
    <img src="{{ article.image }}" alt="{{ article.title }}" />
  </div>
  <span class="blog-card__category">Projects</span>
  <h3 class="blog-card__title">Painting Factory Floor Bases</h3>
  <p class="blog-card__excerpt">On request I painted factory floor bases...</p>
  <div class="blog-card__footer">
    <span class="blog-card__date">Feb 26 • 5 min read</span>
    <a href="{{ article.url }}" class="blog-card__link">Read more →</a>
  </div>
</div>
```

---

## Form System

### Input Field

```liquid
<div class="form-field">
  <label class="form-label" for="email">Email address</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    class="form-input"
    placeholder="Enter your email"
  />
</div>
```

**States:**
- **Default**: Background `bg-600`, border `bg-500`
- **Focus**: Border `accent-500`, shadow `accent-glow`
- **Error**: Border `#EF4444`

### Checkbox

```liquid
<label class="checkbox">
  <input type="checkbox" name="newsletter" class="checkbox__input" />
  <span class="checkbox__label">Subscribe to newsletter</span>
</label>
```

---

## Component Library

### Badge

```liquid
<span class="badge badge--warning">Miniature</span>
<span class="badge badge--success">New Arrival</span>
<span class="badge badge--error">Out of Stock</span>
```

### Breadcrumbs

```liquid
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <a href="/" class="breadcrumbs__link">Home</a>
  <span class="breadcrumbs__separator">/</span>
  <a href="/collections/miniatures" class="breadcrumbs__link">Miniatures</a>
  <span class="breadcrumbs__separator">/</span>
  <span class="breadcrumbs__current" aria-current="page">Battlefield Skulls</span>
</nav>
```

### Pagination

```liquid
<nav class="pagination" aria-label="Pagination">
  <a href="?page=1" class="pagination__link pagination__link--prev">‹ Prev</a>
  <a href="?page=1" class="pagination__link pagination__link--active">1</a>
  <a href="?page=2" class="pagination__link">2</a>
  <a href="?page=3" class="pagination__link">3</a>
  <a href="?page=2" class="pagination__link pagination__link--next">Next ›</a>
</nav>
```

---

## Layout Grid

### Container Settings

```css
max-width: 1280px;
padding: 0 var(--space-6); /* 32px horizontal */
```

### Standard Two-Column Layout

- Left content: 70% (approximately 900px at max width)
- Right sidebar: 30% (approximately 380px at max width)
- Gap: 32px (`space-6`)

Mobile: Single column, cards stacked vertically

---

## Interaction System

### Transitions

```css
transition: all 150ms cubic-bezier(.4,0,.2,1);
```

### Hover Lift Effect

Applied to cards, buttons, and product tiles:

```css
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}
```

### Focus States

- Primary focus ring: `accent-glow` (3px offset)
- Tab order maintained for keyboard navigation

---

## Responsive Breakpoints

| Breakpoint | Width   | Usage                    |
|------------|---------|--------------------------|
| Mobile     | < 768px | Single column layout     |
| Tablet     | 768px - 1024px | Two columns, stacked cards |
| Desktop    | > 1024px | Full two-column grid     |

---

## CSS Variables Reference

```css
:root {
  /* Background Scale */
  --bg-900: #0F172A;
  --bg-800: #162033;
  --bg-700: #1E293B;
  --bg-600: #243247;
  --bg-500: #2C3B52;

  /* Accent */
  --accent-500: #F97316;
  --accent-600: #EA580C;
  --accent-700: #C2410C;
  --accent-glow: rgba(249,115,22,.35);

  /* Text */
  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-muted: #94A3B8;
  --text-disabled: #64748B;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 40px;
  --space-8: 48px;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;

  /* Typography */
  --font-heading: "Cinzel, serif";
  --font-body: Inter, system-sans-serif;
  --font-mono: 'Fira Code', monospace;

  /* Shadows */
  --shadow-base: 0 4px 10px rgba(0,0,0,0.25);
  --shadow-hover: 0 8px 20px rgba(0,0,0,0.4);
}
```

---

## Component Documentation Links

| Component | Documentation File |
|-----------|-------------------|
| Buttons | [Buttons](./buttons) |
| Cards | [Product Cards](../snippets/snippets-product-cards) |
| Inputs | [Inputs](./inputs) |
| Badges | [Badges](./badges) |
| Breadcrumbs | [Breadcrumbs](./breadcrumbs) |
