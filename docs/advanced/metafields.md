---
id: advanced-metafields
title: Metafields
sidebar_label: 'Metafields'
---

# Metafields

Metafields allow you to store additional information for Shopify resources like products, collections, customers, and orders. The Warforge theme uses metafields extensively for custom product data.

## Common Metafield Use Cases

### Product Metafields

| Namespace | Key | Type | Description |
|-----------|-----|------|-------------|
| `custom` | `material` | Single line text | Product material (resin, metal, plastic) |
| `custom` | `scale` | Single line text | Scale (28mm, 32mm, 1:64, etc.) |
| `custom` | `dimensions` | List of dimension | Width, height, depth in mm |
| `custom` | `skill_level` | Single line text | Beginner, Intermediate, Advanced |
| `custom` | `paint_recommendations` | List of product | Recommended paint colors |
| `custom` | `compatibility` | List of text | Compatible product lines |

### Collection Metafields

| Namespace | Key | Type | Description |
|-----------|-----|------|-------------|
| `custom` | `featured_image` | File reference | Custom collection banner |
| `custom` | `description_short` | Multi-line text | Short description for grids |
| `custom` | `icon` | Single line text | Collection icon name |

## Accessing Metafields in Liquid

### Product Metafields

```liquid
{% comment %} Single text field {% endcomment %}
{{ product.metafields.custom.material }}

{% comment %} With fallback {% endcomment %}
{{ product.metafields.custom.material | default: 'Not specified' }}

{% comment %} Dimension list {% endcomment %}
{{ product.metafields.custom.dimensions.width }}
{{ product.metafields.custom.dimensions.height }}
{{ product.metafields.custom.dimensions.depth }}

{% comment %} Iterate over list {% endcomment %}
{% for paint in product.metafields.custom.paint_recommendations %}
  <span class="paint-badge">{{ paint.title }}</span>
{% endfor %}
```

### Collection Metafields

```liquid
{% comment %} Collection banner image {% endcomment %}
{% if collection.metafields.custom.featured_image %}
  <img src="{{ collection.metafields.custom.featured_image | image_url: width: 1200 }}" 
       alt="{{ collection.title }}" />
{% endif %}

{% comment %} Short description {% endcomment %}
<p class="collection-short-desc">
  {{ collection.metafields.custom.description_short }}
</p>
```

## Displaying Metafields in Product Cards

```liquid
<div class="product-card">
  <!-- Standard product info -->
  <h3>{{ product.title }}</h3>
  <span class="price">{{ product.price }}</span>
  
  <!-- Custom metafields -->
  {% if product.metafields.custom.material %}
    <span class="product-meta">
      Material: {{ product.metafields.custom.material }}
    </span>
  {% endif %}
  
  {% if product.metafields.custom.scale %}
    <span class="product-meta">
      Scale: {{ product.metafields.custom.scale }}
    </span>
  {% endif %}
  
  {% if product.metafields.custom.skill_level %}
    <span class="badge badge--{{ product.metafields.custom.skill_level | handleize }}">
      {{ product.metafields.custom.skill_level }}
    </span>
  {% endif %}
</div>
```

## Creating Metafield Definitions

### Via Shopify Admin

1. Go to **Settings → Custom data**
2. Select **Products** (or Collections, Customers, etc.)
3. Click **Add definition**
4. Configure:
   - **Name**: Display name (e.g., "Material")
   - **Namespace and key**: `custom.material`
   - **Type**: Single line text, List, File, etc.
   - **Validation**: Optional rules (character limits, etc.)

### Via Theme Code

Metafield definitions can also be created programmatically:

```liquid
{% comment %}
  Note: Metafield definitions must be created via Admin API or manually.
  They cannot be created via Liquid alone.
{% endcomment %}
```

## Metafield Filters in Collection Templates

Allow customers to filter by metafield values:

```liquid
{% comment %} In collection template {% endcomment %}
<div class="collection-filters">
  {% for filter in collection.filters %}
    <div class="filter-group">
      <h4>{{ filter.label }}</h4>
      {% for value in filter.values %}
        <label>
          <input type="checkbox" 
                 name="{{ filter.param_name }}" 
                 value="{{ value.value }}" 
                 {% if value.active %}checked{% endif %} />
          {{ value.label }}
        </label>
      {% endfor %}
    </div>
  {% endfor %}
</div>
```

## Related Documentation

- [Liquid Filters](./advanced-liquid-filters) — Filtering and formatting metafield data
- [Product Cards](../product-cards) — Displaying metafields in product grids
- [Performance](./advanced-performance) — Optimizing metafield queries
