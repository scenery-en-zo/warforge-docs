---
id: advanced-advanced-advanced-liquid-filters
title: Liquid Filters
sidebar_label: "Liquid Filters"
---

# Advanced Liquid Filters

This guide covers advanced Shopify Liquid filters for customizing the Warforge theme's output and functionality.

## Common Filter Categories

### String Filters

| Filter | Description | Example | Output |
| ------ | ----------- | ------- | ------ |
| `downcase` | Convert to lowercase | `"WARFORGE" \| downcase` | `"warforge"` |
| `upcase` | Convert to uppercase | `"warforge" \| upcase` | `"WARFORGE"` |
| `strip_html` | Remove HTML tags | `<p>Text</p> \| strip_html` | `"Text"` |
| `split: delim` | Split into array | `"a,b,c" \| split: ','` | `["a", "b", "c"]` |
| `join: delim` | Join array with delimiter | `["a", "b", "c"] \| join: ', '` | `"a, b, c"` |
| `slice: start, length` | Extract substring | `"Hello" \| slice: 1, 4` | `"ello"` |

### Array Filters

| Filter | Description | Example | Output |
| ------ | ----------- | ------- | ------ |
| `first` | Get first element | `[1,2,3] \| first` | `1` |
| `last` | Get last element | `[1,2,3] \| last` | `3` |
| `size` | Get array length | `[1,2,3] \| size` | `3` |
| `map: param` | Map over array | `[1,2,3] \| map: '_'` | `["_", "_", "_"]` |
| `where: param` | Filter array elements | `[{a:1}, {a:2}] \| where: 'a > 1'` | `[{a:2}]` |
| `concat: arr` | Concatenate arrays | `[1,2] \| concat: [3,4]` | `[1,2,3,4]` |

### Object Filters

| Filter | Description | Example | Output |
| ------ | ----------- | ------- | ------ |
| `default: value` | Return value if empty | `"" \| default: "N/A"` | `"N/A"` |
| `handle` | Convert to URL-friendly slug | `"Hello World" \| handle` | `"hello-world"` |
| `escape` | HTML-escape string | `<script> \| escape` | `&lt;script&gt;` |
| `remove: key` | Remove object key | `{"a":1, "b":2} \| remove: 'a'` | `{"b":2}` |

### Date Filters

| Filter | Description | Example | Output |
| ------ | ----------- | ------- | ------ |
| `date: format` | Format date | `"2024-01-15" \| date: '%B %d, %Y'` | `"January 15, 2024"` |
| `time: format` | Format time | `"14:30:00" \| time: '%H:%M'` | `"14:30"` |
| `date: format, offset` | Add timezone offset | `"2024-01-15" \| date: '%Y-%m-%d', 60` | UTC+1 |

### Product Filters

| Filter | Description | Example |
| ------ | ----------- | ------- |
| `product_option_value:` | Get option value | `{% for option in product.options_with_values %}{{ option.name }}{% endfor %}` |
| `image_url:` | Get image URL | `{% liquid product.featured_media \| image_url %}` |
| `image_id:` | Get image ID | `{% liquid product.featured_media \| image_id %}` |
| `price` | Get product price | `product.price` |
| `compare_at_price` | Get comparison price | `product.compare_at_price` |

### Collection Filters

| Filter | Description | Example |
| ------ | ----------- | ------- |
| `collection_image_url:` | Get collection image | `{% liquid collection.image \| image_url %}` |
| `size` | Get product count | `{% liquid collections.all \| size %}` |
| `sort_by:` | Sort products | `{% liquid collections.all \| where: 'handle contains miniatures' \| limit: 10 %}` |

## Custom Filter Example

Create custom filters in `snippets/`:

```liquid
{% comment %}
  Usage: {% render 'filter-price-range', min: 10, max: 100 %}
{% endcomment %}

<div class="price-filter" style="background-color: #2C3B52; padding: 16px; border-radius: 8px;">
  <label style="display: block; font-size: 13px; color: #94A3B8; margin-bottom: 8px;">Price Range</label>

  <div style="display: flex; gap: 8px;">
    <input type="number"
      name="filter_price_min"
      value="{{ min | default: 0 }}"
      placeholder="From"
      style="background-color: #1A2033; border: 1px solid #3B4A61; color: #F8FAFC; font-size: 13px; padding: 8px 12px; border-radius: 4px;">

    <span style="color: #94A3B8;">-</span>

    <input type="number"
      name="filter_price_max"
      value="{{ max | default: 200 }}"
      placeholder="To"
      style="background-color: #1A2033; border: 1px solid #3B4A61; color: #F8FAFC; font-size: 13px; padding: 8px 12px; border-radius: 4px;">
  </div>
</div>
```

## Metafield Filters

Access product metafields:

```liquid
<!-- Get custom metafield -->
{{ product.metafields.custom.material | default: 'Not specified' }}

<!-- Access nested metafield -->
{{ product.metafields.custom.dimensions.width }}
{{ product.metafields.custom.dimensions.height }}
{{ product.metafields.custom.dimensions.depth }}

<!-- Iterate over metafield array -->
{% for key, value in product.metafields.custom.tags %}
  <span class="badge badge--outline">{{ key }}</span>
{% endfor %}
```

## Dynamic Section Filters

Filter sections by data:

```liquid
<!-- Show specific sections based on page type -->
{% if template == 'product' %}
  {% section 'section-product-featured',
    product_id: product.id,
    limit: 4
  %}
{% endif %}

<!-- Conditionally render sections -->
{% if page.featured_section == 'true' %}
  {% section 'section-hero-webgl' %}
{% endif %}
```

## Related Documentation

- [Metafields](./advanced-metafields) — Working with product metafields
- [WebGL Effects](./advanced-webgl-effects) — Three.js effects setup
- [Performance](./advanced-performance) — Theme optimization tips
