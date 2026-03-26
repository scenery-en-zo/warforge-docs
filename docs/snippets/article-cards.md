---
id: snippets-article-cards
title: Article Cards
sidebar_label: 'Article Cards'
---

# Article Card Snippet

**File:** `snippets/article-card.liquid`

The article card component displays blog posts in a card format with image, metadata, title, and excerpt.

## Usage

```liquid
{% for article in blog.articles %}
  {% render 'article-card',
    article: article,
    is_featured: forloop.first
  %}
{% endfor %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `article` | Object | Required | Shopify article object |
| `is_featured` | Boolean | `false` | Enable featured layout |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.article-card` | Main card container |
| `.article-card--featured` | Featured article modifier |
| `.article-card__link` | Full card clickable link |
| `.article-card__media` | Image container |
| `.article-card__image` | Article image |
| `.article-card__tag` | Tag pill (clickable) |
| `.article-card__badge` | Featured badge |
| `.article-card__content` | Content wrapper |
| `.article-card__meta` | Date/author/read time |
| `.article-card__title` | Article title |
| `.article-card__excerpt` | Article excerpt |
| `.article-card__footer` | Footer with read more |
| `.article-card__read-more` | Read more link |

## Features

- ✅ Full card clickability
- ✅ Featured article layout (larger, side-by-side)
- ✅ Tag links (positioned outside main link)
- ✅ Hover effects (lift, border, image zoom)
- ✅ Responsive images with lazy loading
- ✅ Metadata display (date, author, read time)
- ✅ Placeholder for articles without images

## Related

- [Blog Template](./templates-templates-templates-blog) - Blog listing page
- [Article Template](./templates-templates-templates-article) - Single article page
- [Badges](./snippets-snippets-badges) - Featured badge styling
