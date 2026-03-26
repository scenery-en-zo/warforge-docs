---
id: snippets-article-cards
title: Article Cards
sidebar_label: Article Cards
---

# Article Card Snippet

**File:** `snippets/article-card.liquid`

Blog post cards as displayed on the home page.

## Visual Example

<div className="article-card-demo">
  <article className="article-card">
    <a href="#" className="article-card__link">
      <div className="article-card__media">
        <div className="article-card__placeholder">
          <div style={{width: '40px', height: '40px', backgroundColor: 'var(--bg-800)', borderRadius: '4px'}}></div>
        </div>
      </div>
      <div className="article-card__content">
        <div className="article-card__meta">
          <span className="article-meta__item">
            <svg className="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Mar 15, 2026
          </span>
          <span className="article-meta__item">
            <svg className="icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            John Doe
          </span>
        </div>
        <h3 className="article-card__title">Painting Miniatures: A Beginner's Guide</h3>
        <p className="article-card__excerpt">Learn the fundamentals of miniature painting with this comprehensive guide.</p>
        <div className="article-card__footer">
          <span className="article-card__read-more">
            READ MORE
            <svg className="icon" viewBox="0 0 24 24" style={{width: '14px', height: '14px', marginLeft: '4px', transform: 'rotate(-45deg)'}}><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
          </span>
        </div>
      </div>
    </a>
  </article>
</div>

## Usage

```liquid
{% for article in blog.articles %}
  {% render 'article-card', article: article %}
{% endfor %}
```

## Features

- Large image area with placeholder
- Metadata with calendar/user icons
- Title in white
- Excerpt in grey
- "READ MORE" with arrow icon

## Related

- [Blog Template](./templates-blog) - Blog listing
