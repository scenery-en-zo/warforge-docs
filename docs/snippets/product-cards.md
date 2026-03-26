---
id: snippets-product-cards
title: Product Cards
sidebar_label: 'Product Cards'
sidebar_position: 8
---

# Product Card Component

The product card is the primary component for displaying products. It features the dark theme with orange accents, hover effects, and proper accessibility from the actual Warforge theme.

## Live Examples

<div class="product-card-demo">

<div class="product-card" data-product-card>
  <div class="product-card__media">
    <div class="product-card__placeholder-container">
      <svg class="product-card__placeholder" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
    </div>
    <div class="product-card__badges">
      <span class="badge badge--accent badge--sm">-20%</span>
    </div>
  </div>
  
  <div class="product-card__content">
    <div class="product-card__header">
      <div class="product-card__meta-top">
        <span class="product-card__category">Miniatures</span>
        <span class="product-card__sku">SKU: WFG-001</span>
      </div>
      <h3 class="product-card__title">Battlefield Resin Skulls</h3>
    </div>
    
    <div class="product-card__body">
      <div class="product-card__price">
        <span class="price-current">€24,95</span>
        <span class="price-old">€31,95</span>
      </div>
    </div>
    
    <div class="product-card__footer">
      <form class="product-card__form">
        <button type="button" class="btn btn--primary product-card__btn">
          <span class="btn__content">
            <span class="btn__icon-wrapper">
              <svg class="icon" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </span>
            <span class="btn__text">Add to Cart</span>
          </span>
        </button>
      </form>
    </div>
  </div>
</div>

<div class="product-card" data-product-card style={{opacity: 0.8}}>
  <div class="product-card__media">
    <div class="product-card__placeholder-container" style={{opacity: 0.5}}>
      <svg class="product-card__placeholder" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
    </div>
  </div>
  
  <div class="product-card__content">
    <div class="product-card__header">
      <div class="product-card__meta-top">
        <span class="product-card__category">Paints</span>
        <span class="product-card__sku">SKU: WFG-002</span>
      </div>
      <h3 class="product-card__title">Professional Paint Set</h3>
    </div>
    
    <div class="product-card__body">
      <div class="product-card__price">
        <span class="price-current">€34,95</span>
      </div>
    </div>
    
    <div class="product-card__footer">
      <form class="product-card__form">
        <button type="button" class="btn btn--primary product-card__btn" disabled>
          <span class="btn__content">
            <span class="btn__icon-wrapper">
              <svg class="icon" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
            <span class="btn__text">Sold Out</span>
          </span>
        </button>
      </form>
    </div>
  </div>
</div>

</div>

**Try it:** Hover over the cards to see the border change to orange, the card lift up, and the title turn white. The button also changes color on hover and presses down when clicked.

## Component Usage

```liquid
{% render 'product-card',
  product: product,
  image_loading: 'lazy',
  image_fetchpriority: 'auto',
  image_decoding: 'async',
  image_width: 320,
  image_widths: '120,160,180,200,220,260,320',
  image_sizes: '(max-width: 992px) 205px, (min-width: 1500px) 205px, (min-width: 1200px) 16vw, (min-width: 992px) 20vw, (min-width: 768px) 28vw, 42vw'
%}
```

## Key Features

### Visual Design
- ✅ Dark theme background (`#1a1f2b`)
- ✅ 2px border around entire card
- ✅ Seamless unibody design (no image border)
- ✅ Orange accent on hover
- ✅ Badge in top-right corner
- ✅ Category label (white, uppercase)
- ✅ Orange product title (Cinzel font)
- ✅ Green price with strikethrough for sale

### Interactive States
- ✅ Hover: Border turns orange, card lifts, image zooms
- ✅ Active: Button presses down (scale 0.98)
- ✅ Focus: Visible ring for keyboard navigation
- ✅ Sold Out: Disabled button with X icon

## CSS Classes

| Class | Description |
|-------|-------------|
| `.product-card` | Main card container |
| `.product-card__media` | Image zone (1:1 aspect ratio) |
| `.product-card__placeholder-container` | Placeholder wrapper |
| `.product-card__badges` | Badge container (top-right) |
| `.product-card__content` | Content wrapper |
| `.product-card__header` | Header with category/title |
| `.product-card__meta-top` | Category and SKU row |
| `.product-card__category` | Category label |
| `.product-card__sku` | SKU text |
| `.product-card__title` | Product title |
| `.product-card__body` | Body with price |
| `.product-card__price` | Price container |
| `.price-current` | Current price (green) |
| `.price-old` | Compare-at price |
| `.product-card__footer` | Footer with button |
| `.product-card__form` | Add to cart form |
| `.product-card__btn` | Add to cart button |

## Button States

The button uses the `.btn` classes from Warforge:

| State | Class | Effect |
|-------|-------|--------|
| Default | `.btn--primary` | Orange background |
| Hover | `.btn--primary:hover` | Darker orange |
| Active | `.btn--primary:active` | Pressed down (scale 0.98) |
| Focus | `.btn:focus-visible` | Orange ring |
| Disabled | `.btn:disabled` | Gray, not clickable |

## Badge Styling

```liquid
{% render 'badge',
  text: '-20%',
  variant: 'accent',
  size: 'sm'
%}
```

**Position:** Top-right corner of image area
**Style:** Orange background, dark text, uppercase

## Color Variables

```css
--bg-950: #0a0e16  /* Hover background */
--bg-900: #131720  /* Page background */
--bg-800: #1a1f2b  /* Card background */
--bg-700: #3e4a5d  /* Placeholder gradient */
--bg-600: #4a5a73  /* Card border */
--accent-500: #ff8b00  /* Orange accent */
--accent-600: #e67a00  /* Button hover */
--accent-700: #cc6a00  /* Button active */
--price-color: #2ecc71  /* Green price */
--btn-primary-text: #0a0e16  /* Text on orange */
```

## Accessibility

- ✅ Semantic HTML structure
- ✅ Proper focus states
- ✅ Keyboard navigation
- ✅ Screen reader friendly
- ✅ High contrast ratios
- ✅ Clear sold out indication

## Performance

Images use responsive loading:

```liquid
image_loading: 'eager'  /* First 4 products */
image_loading: 'lazy'   /* Rest */

image_widths: '120,160,180,200,220,260,320'
```

## Related Components

- [Buttons](./components/buttons) — Button component
- [Icons](./components/icons) — Icon library
- [Badges](./components/badges) — Badge component
