---
id: blocks-index
title: Blocks Overview
sidebar_label: 'Overview'
---

# Blocks

Blocks are reusable content components that can be added, removed, and reordered within sections through the Shopify theme editor.

## Available Blocks

- [Group](./blocks-group) - Layout container for grouping blocks
- [Text](./blocks-text) - Text content with style variants

## Usage

Blocks are defined within sections:

```liquid
{% for block in section.blocks %}
  {% case block.type %}
    {% when 'group' %}
      {% render 'block-group', block: block %}
    {% when 'text' %}
      {% render 'block-text', block: block %}
  {% endcase %}
{% endfor %}
```

## Block Schema

```json
{
  "type": "text",
  "name": "Text",
  "settings": [
    {
      "type": "text",
      "id": "text",
      "label": "Content"
    }
  ]
}
```

## Related

- [Sections](./sections-index) - Parent sections
- [Snippets](./snippets-index) - Reusable components
