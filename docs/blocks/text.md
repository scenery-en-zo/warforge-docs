---
id: blocks-text
title: Text Block
sidebar_label: Text
---

# Text Block

**File:** `blocks/text.liquid`

The text block renders configurable text content with style variants and alignment options.

## Usage

```liquid
{% content_for 'block', type: 'text', id: 'text' %}
```

## Settings

| Setting | Type | Default | Options | Description |
|---------|------|---------|---------|-------------|
| `text` | Text | `Text` | - | Content text |
| `text_style` | Select | `title` | `title`, `subtitle`, `normal` | Typography style |
| `alignment` | Alignment | `left` | `left`, `center`, `right`, `justify` | Text alignment |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.text` | Base text container |
| `.text--title` | Large heading (2rem, bold) |
| `.text--subtitle` | Medium heading (1.5rem) |
| `.text--normal` | Standard body text |

## CSS Variables

| Variable | Description |
|----------|-------------|
| `--text-align` | Text alignment from settings |

## Presets

| Preset | Description |
|--------|-------------|
| **Text** | Default text block |

## Related

- [Group Block](./blocks-group) - Layout container
- [Rich Text Section](./sections-rich-text) - Rich text section
