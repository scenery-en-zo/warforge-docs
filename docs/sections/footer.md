---
id: sections-footer
title: Footer
sidebar_label: 'Footer'
---

# Footer Section

**File:** `sections/footer.liquid`

The footer section renders the site footer with brand info, navigation links, contact details, and social media.

## Structure

```
┌─────────────────────────────────────────────┐
│  Footer                                     │
│  ┌─────────┬─────────┬─────────┬─────────┐  │
│  │ Brand   │ Links 1 │ Links 2 │ Contact │  │
│  │ + About │         │         │         │  │
│  └─────────┴─────────┴─────────┴─────────┘  │
│  ┌─────────────────────────────────────────┐│
│  │  Payment Icons | Social Media          ││
│  └─────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────┐│
│  │  Copyright | Privacy | Terms           ││
│  └─────────────────────────────────────────┘│
└─────────────────────────────────────────────┘
```

## Blocks

| Block Type | Description | Settings |
|------------|-------------|----------|
| `brand_info` | Logo, about text | `about_text` |
| `link_list` | Navigation menu | `heading`, `menu` |
| `contact` | Contact details | `heading`, `address`, `email`, `phone` |
| `text` | Custom HTML text | `heading`, `content` |
| `policies` | Policy links | Auto-generated |
| `social` | Social media links | Platform URLs |
| `payment` | Payment icons | Auto-detected |
| `newsletter` | Newsletter signup | `heading` |

## Usage

```liquid
{% section 'footer' %}
```

Configure blocks in the Shopify theme editor:

1. Add **Brand Info** block for logo and description
2. Add **Link List** blocks for navigation columns
3. Add **Contact** block for address, email, phone
4. Add **Newsletter** block for email signup

## CSS Classes

| Class | Description |
|-------|-------------|
| `.footer` | Main footer container |
| `.footer__inner` | Inner flex container |
| `.footer__column` | Column wrapper |
| `.footer__column--brand` | Brand column |
| `.footer__logo` | Logo link |
| `.footer__logo-image` | Logo image |
| `.footer__logo-text` | Text logo fallback |
| `.footer__about` | About text area |
| `.footer__heading` | Column heading |
| `.footer__links` | Link list |
| `.footer__contact` | Contact details list |
| `.footer__text` | Custom text area |
| `.footer__bottom` | Bottom bar |
| `.footer__copyright` | Copyright text |
| `.footer__policies` | Policy links |

## Related

- [Footer Group](./blocks-group) - Footer block grouping
- [Icons](./snippets-icons) - Contact icons
- [Input](./snippets-inputs) - Newsletter input
