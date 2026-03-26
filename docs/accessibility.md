---
id: accessibility
title: Accessibility
sidebar_position: 9
---

# Accessibility

The theme targets **WCAG 2.1 Level AAA** compliance for color contrast, and WCAG 2.1 Level AA for all other criteria. This page documents the specific decisions made and the rationale behind them.

:::info WCAG references
- [WCAG 2.1 Color Contrast (AA) — 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WCAG 2.1 Enhanced Contrast (AAA) — 1.4.6](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)
- [WCAG 2.1 Label in Name — 2.5.3](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
:::

---

## Color contrast

### The challenge

The theme uses a dark background palette with an orange accent color. Finding an orange that:
1. **Looks genuinely orange** (not yellow, not amber)
2. **Meets WCAG AAA contrast** (7:1 ratio) against dark backgrounds

...is mathematically difficult. Orange gets its luminance from its red and green channels; increasing luminance to hit 7:1 inevitably shifts the hue toward yellow.

### The solution: shift the background scale

Instead of lightening the orange until it meets AAA, we **darkened the background scale**:

| Variable | Old value | New value | Change |
|---|---|---|---|
| `--bg-900` (page bg) | `#1a1f2b` | `#131720` | Darker |
| `--bg-800` (cards) | `#252c3b` | `#1a1f2b` | Darker (now the old bg-900) |

And changed the accent to a true, saturated orange:

| Variable | Old value | New value |
|---|---|---|
| `--accent-500` | `#ff6b00` | `#ff8b00` |

Result: `#ff8b00` on `#1a1f2b` = **7.02:1 contrast** — passing AAA.

### Key contrast ratios (verified)

| Foreground | Background | Ratio | Standard |
|---|---|---|---|
| `#ff8b00` (accent) | `#1a1f2b` (bg-800) | **7.02:1** | AAA ✓ |
| `#ff8b00` (accent) | `#131720` (bg-900) | **7.64:1** | AAA ✓ |
| `#ff8b00` (accent) | `#0a0e16` (bg-950) | **8.23:1** | AAA ✓ |
| `#0a0e16` (btn text) | `#ff8b00` (orange btn) | **8.23:1** | AAA ✓ |
| `#ffffff` (white) | `#1a1f2b` (bg-800) | **16.47:1** | AAA ✓ |
| `#cbd5e1` (secondary) | `#1a1f2b` (bg-800) | **11.10:1** | AAA ✓ |
| `#2ecc71` (price green) | `#1a1f2b` (bg-800) | **7.84:1** | AAA ✓ |
| `#dde5ee` (feature text) | `#3e4a5d` (bg-700) | **7.05:1** | AAA ✓ |
| `#94a3b8` (disabled) | `#0a0e16` (bg-950) | **7.53:1** | AAA ✓ |

### Verifying contrast yourself

You can calculate WCAG contrast ratios with this Node.js snippet:

```javascript
function luminance(hex) {
  const r = parseInt(hex.slice(1,3), 16) / 255;
  const g = parseInt(hex.slice(3,5), 16) / 255;
  const b = parseInt(hex.slice(5,7), 16) / 255;
  const toLinear = c => c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
  return 0.2126*toLinear(r) + 0.7152*toLinear(g) + 0.0722*toLinear(b);
}

function contrast(hex1, hex2) {
  const l1 = luminance(hex1), l2 = luminance(hex2);
  return ((Math.max(l1,l2)+0.05) / (Math.min(l1,l2)+0.05)).toFixed(2);
}

console.log(contrast('#ff8b00', '#1a1f2b')); // 7.02
```
**WCAG thresholds:**
- AA normal text: **4.5:1**
- AA large text (≥18px or ≥14px bold): **3:1**
- AAA normal text: **7:1**
- AAA large text: **4.5:1**

---

## `label-content-name-mismatch` (WCAG 2.5.3)

### The issue

Product cards and article cards used to have `aria-label="{{ product.title }}"` on the wrapping link element. The WCAG 2.5.3 criterion requires that when an element has an accessible name (from `aria-label`), the visible text must be *contained in* that name.

The product card link contains visible text like "Miniatures • SKU: 123 • Barbarian Chieftain • €12,99 • Add to Cart" — but the `aria-label` was only `"Barbarian Chieftain"`. The visible text was not a subset of the label, causing a mismatch.

### The fix

**Removed `aria-label` from all card links.** The link now derives its accessible name from its visible text content, which is correct and compliant.

For cards with **two links** to the same URL (image link + content link):
- The image link gets `aria-hidden="true" tabindex="-1"` — screen readers skip it entirely
- The content link has no `aria-label` — screen readers read its visible text

**Affected files:**
- `snippets/product-card.```liquid` — `.product-card__content-link` and `.product-card__media-link`
- `snippets/article-card.```liquid` — `.article-card__link`
- `snippets/article-card-large.```liquid` — `.article-card-large__link`
- `snippets/article-card-masonry.```liquid` — `.article-card-masonry__link`
- `snippets/blog-preview-card.```liquid` — `.blog-preview__link`

---

## Privacy banner (Shopify shadow DOM)

The Shopify privacy consent banner (`#shopify-pc__*`) renders inside a **shadow DOM** — a self-contained DOM tree that is isolated from the page's CSS. External stylesheets cannot reach inside it.

### What we can control

Shopify exposes a set of CSS custom properties that penetrate the shadow boundary:

```css
:root {
  --shopify-privacy-banner-background-color: #1a1f2b;
  --shopify-privacy-banner-text-color: #ffffff;
  --shopify-privacy-banner-primary-button-background-color: #ff8b00;
  --shopify-privacy-banner-primary-button-text-color: #0a0e16;
  --shopify-privacy-banner-secondary-button-background-color: #131720;
  --shopify-privacy-banner-secondary-button-text-color: #ffffff;
}
```
These are set in `snippets/css-variables.```liquid`.

### Shadow DOM injection

`layout/theme.```liquid` contains a MutationObserver that watches for the privacy banner element being added to the DOM. When found, it injects a `<style>` element directly into the shadow root to override button colors:

```javascript
const applyToShadow = (el) => {
  if (el.shadowRoot) {
    const style = document.createElement('style');
    style.textContent = `
      .button, button { 
        background-color: #ff8b00 !important; 
        color: #0a0e16 !important; 
      }
      a, .link { color: #ff8b00 !important; }
    `;
    el.shadowRoot.appendChild(style);
  }
};
```
### The `#shopify-pc__banner__body-policy-link` limitation

The policy link inside the banner is styled by Shopify's own CSS, and Shopify does not expose a CSS custom property for its color. Our shadow DOM injection targets buttons and general links, which catches most elements including this link. However, if the link class name changes in a future Shopify update, the override may stop working.

This is a **Shopify platform limitation** — there is nothing more we can do beyond what's already in place.

---

## Font sizes for small text

WCAG large text rules (3:1 AA / 4.5:1 AAA) apply to text ≥18px or ≥14px bold. For smaller text, the stricter ratios (4.5:1 AA / 7:1 AAA) apply.

**Minimum font sizes** in the theme:

| Element | Font size | Meets |
|---|---|---|
| `.badge--sm` | `11px` | Covered by the very high contrast ratios (8.23:1) |
| `.badge--md` | `12px` | |
| `.article__tag` | `11px` | dark text on orange bg = 8.23:1 |
| `.blog-preview__date-badge .month` | `11px` | |
| `.breadcrumb-current` | `12px` | 7.02:1 on bg-800 |
| `.bio-link` | `12px` | 7.02:1 on bg-800 |

---

## Skip to content link

A visually hidden skip link is included in `layout/theme.```liquid`:

```html
<a class="skip-to-content-link visually-hidden" href="#MainContent">
  Skip to content
</a>
```
It becomes visible on focus (using `:focus-visible`), allowing keyboard users to skip the navigation.

---

## Focus visible styles

All interactive elements have a visible focus ring defined globally:

```css
*:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--bg-900), 0 0 0 4px var(--accent-500);
}
```
This creates a two-layer ring: inner dark ring for separation, outer orange ring for visibility. The `:focus-visible` pseudo-class only triggers for keyboard navigation (not mouse clicks), avoiding visual clutter for mouse users.

---

## Motion preferences

The Three.js hero and ambient scene effects are automatically disabled for users with `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  .hero__fx-canvas {
    display: none;
  }
}
```
In JavaScript:
```javascript
const isReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (isReducedMotion()) return; // skip all animation
```
---

## iFrame titles

`layout/theme.```liquid` includes a script that automatically adds `title` attributes to any `<iframe>` elements that are missing one:

```javascript
document.querySelectorAll('iframe:not([title])').forEach(iframe => {
  iframe.setAttribute('title', iframe.id || iframe.name || 'Content frame');
});
```
This runs on `DOMContentLoaded` and again after 1.5 seconds (to catch dynamically added iframes from third-party apps).

