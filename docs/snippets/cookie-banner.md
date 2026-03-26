---
id: snippets-cookie-banner
title: Cookie Banner
sidebar_label: 'Cookie Banner'
---

# Cookie Banner Snippet

**File:** `snippets/cookie-banner.liquid`

The cookie banner component renders a GDPR-compliant cookie consent banner with accept functionality.

## Visual Example

<div class="cookie-banner is-visible" style="position:fixed;bottom:0;left:0;right:0;background:var(--bg-800);border-top:2px solid var(--accent-500);padding:16px 0;z-index:2000;box-shadow:0 -10px 40px rgba(0,0,0,0.6);">
  <div style="display:flex;justify-content:space-between;align-items:center;gap:24px;max-width:1200px;margin:0 auto;padding:0 24px;">
    <div style="display:flex;align-items:center;gap:16px;flex:1;">
      <svg style="width:20px;height:20px;color:var(--accent-500);" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"></polygon></svg>
      <p style="font-size:14px;color:var(--text-secondary);margin:0;">We use cookies to improve your experience on our battlefield. By continuing to browse, you agree to our use of cookies. <a href="/pages/privacy-policy" style="color:var(--accent-500);">Privacy Policy</a></p>
    </div>
    <div>
      <button class="btn btn--primary btn--sm" style="height:36px;padding:0 16px;font-size:12px;">Accept</button>
    </div>
  </div>
</div>

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
