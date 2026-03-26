---
id: snippets-article-cards
title: Article Cards
sidebar_label: 'Article Cards'
---

# Article Card Snippet

**File:** `snippets/article-card.liquid`

The article card component displays blog posts in a card format with image, metadata, title, and excerpt.

## Visual Example

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;">
  <article class="article-card">
    <a href="#" class="article-card__link">
      <div class="article-card__media">
        <div style="aspect-ratio:16/10;background:var(--bg-950);display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 24 24" style="width:60px;height:60px;opacity:0.3;fill:var(--bg-700);"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
        </div>
      </div>
      <div class="article-card__content">
        <div class="article-card__meta">
          <span class="article-meta__item">📅 Mar 15, 2026</span>
          <span class="article-meta__item">👤 John Doe</span>
          <span class="article-meta__item">⏱️ 5 min read</span>
        </div>
        <h3 class="article-card__title">Painting Miniatures: A Beginner's Guide</h3>
        <p class="article-card__excerpt">Learn the fundamentals of miniature painting with this comprehensive guide covering brushes, paints, and techniques.</p>
        <div class="article-card__footer">
          <span class="article-card__read-more">Read More <svg viewBox="0 0 24 24" style="width:16px;height:16px;"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none"/></svg></span>
        </div>
      </div>
    </article>
  </article>
</div>

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

- [Blog Template](./templates-blog) - Blog listing page
- [Article Template](./templates-article) - Single article page
- [Badges](./snippets-badges) - Featured badge styling
