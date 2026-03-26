---
id: snippets-cookie-banner
title: Cookie Banner
sidebar_label: Cookie Banner
---

# Cookie Banner Snippet

**File:** `snippets/cookie-banner.liquid`

GDPR cookie consent banner matching Shopify's styling.

## Visual Example

<div className="cookie-banner">
  <div className="cookie-banner__inner">
    <div className="cookie-banner__content">
      <svg className="cookie-banner__icon" viewBox="0 0 24 24" style={{width: '16px', height: '16px', fill: 'var(--accent-500)', marginRight: '12px'}}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"></polygon>
      </svg>
      <p className="cookie-banner__text">
        We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies.
      </p>
    </div>
    <button className="cookie-banner__button">ACCEPT</button>
  </div>
</div>

## Usage

```liquid
{% render 'cookie-banner' %}
```

## Features

- Orange star icon
- Orange top border
- Orange ACCEPT button
- Inline (not fixed to bottom)

## Related

- [Button](./snippets-buttons) - Button styling
