---
id: snippets-cookie-banner
title: Cookie Banner
sidebar_label: Cookie Banner
---

# Cookie Banner Snippet

**File:** `snippets/cookie-banner.liquid`

The cookie banner component renders a GDPR-compliant cookie consent banner with accept functionality.

## Usage

```liquid
{% render 'cookie-banner' %}
```

Place in your `theme.liquid` layout before the closing `</body>` tag.

## Features

- ✅ Slides up from bottom on page load
- ✅ LocalStorage persistence (doesn't show again after accept)
- ✅ Responsive design (stacks on mobile)
- ✅ Accessible with proper ARIA attributes
- ✅ Customizable cookie name
- ✅ Smooth CSS transitions

## JavaScript API

The component includes built-in JavaScript:

```javascript
// Cookie name used for localStorage
const cookieName = 'scenery_en_zo_cookies_accepted';

// Auto-initializes on DOMContentLoaded
// Re-initializes on Shopify section:load for theme editor
```

## Customization

Change the cookie name in the JavaScript:

```javascript
const cookieName = 'your_cookie_name';
```

Update the consent text via translation keys:

```liquid
'general.cookie_text'
'general.privacy_policy'
'general.accept'
```

## Related

- [Button](./snippets-buttons) - Accept button
- [Icons](./snippets-icons) - Star icon
