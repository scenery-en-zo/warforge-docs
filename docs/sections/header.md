---
id: sections-header
title: Header
sidebar_label: 'Header'
---

# Header Section

**File:** `sections/header.liquid`

The header section renders the site header with top bar, main navigation, mobile menu, and localization.

## Structure

```
┌─────────────────────────────────────────┐
│  Top Bar                                │
│  ┌───────────────────────────────────┐  │
│  │ Free Shipping | Login | Cart (0) │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  Main Header                            │
│  ┌────── ┌────────────── ┌──────────┐  │
│  │ Logo │ Navigation    │ Icons    │  │
│  └────── └────────────── └──────────┘  │
└─────────────────────────────────────────┘
```

## Features

- ✅ Top bar with announcement and utility links
- ✅ Main navigation with mega menu support
- ✅ Mobile hamburger menu
- ✅ Language selector (multi-language)
- ✅ Cart icon with item count
- ✅ Customer account links
- ✅ Search functionality
- ✅ Sticky header option

## Blocks

The header section supports the following block types:

| Block Type | Description |
|------------|-------------|
| `logo` | Brand logo and name |
| `navigation` | Main menu with dropdowns |
| `icons` | Search, cart, user icons |
| `localization` | Language/currency selector |

## Settings

| Setting | Type | Description |
|---------|------|-------------|
| `menu` | Link List | Main navigation menu |
| `sticky` | Boolean | Enable sticky header |
| `show_announcement` | Boolean | Show top bar announcement |
| `announcement_text` | String | Free shipping text |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.header-wrapper` | Main header container |
| `.top-bar` | Top announcement bar |
| `.top-bar__inner` | Top bar flex container |
| `.top-bar__announcement` | Free shipping message |
| `.top-bar__utility` | Utility links area |
| `.top-bar__link` | Individual top bar link |
| `.main-header` | Main header area |
| `.main-header__inner` | Main header flex container |
| `.main-header__brand` | Logo area |
| `.main-header__navigation` | Nav menu area |
| `.main-header__icons` | Icon buttons area |
| `.header-logo` | Logo link |
| `.header-logo__media` | Logo image/text |
| `.mobile-menu-toggle` | Mobile hamburger button |
| `.search-backdrop` | Search overlay |
| `.language-selector` | Language dropdown |
| `.language-list` | Language options |

## Localization

The header includes built-in language switching:

```liquid
{%- if localization.available_languages.size > 1 -%}
  {%- form 'localization', id: 'HeaderLanguageForm' -%}
    <div class="language-selector">
      <button type="button" class="language-selector__btn">
        <span class="lang-flag-text">🇬🇧 English</span>
        {% render 'icon', name: 'chevron-down', size: 'sm' %}
      </button>
      <ul class="language-list">
        {% for language in localization.available_languages %}
          <li>
            <button data-value="{{ language.iso_code }}">
              {{ language.endonym_name }}
            </button>
          </li>
        {% endfor %}
      </ul>
    </div>
  {%- endform -%}
{%- endif -%}
```

## Related

- [Mega Menu](./snippets-mega-menu) - Dropdown navigation
- [Icons](./snippets-icons) - Header icons
- [Mobile Navigation](./navigation) - Mobile menu
