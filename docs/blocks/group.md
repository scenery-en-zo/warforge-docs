---
id: blocks-group
title: Group Block
sidebar_label: Group
---

# Group Block

**File:** `blocks/group.liquid`

The group block is a layout container that arranges child blocks in horizontal or vertical direction with configurable alignment and padding.

## Usage

```liquid
{% content_for 'block', type: 'group', id: 'group' %}
  {% content_for 'block', type: 'text', id: 'text1' %}
  {% content_for 'block', type: 'text', id: 'text2' %}
{% endcontent_for %}
```

## Settings

| Setting | Type | Default | Options | Description |
|---------|------|---------|---------|-------------|
| `layout_direction` | Select | `vertical` | `horizontal`, `vertical` | Flex direction |
| `alignment` | Select | `flex-start` | `flex-start`, `center`, `flex-end` | Cross-axis alignment (vertical only) |
| `padding` | Range | `0` | 0-200px | Padding in pixels |

## Presets

| Preset | Category | Description |
|--------|----------|-------------|
| **Column** | Layout | Vertical stack with alignment |
| **Row** | Layout | Horizontal row with spacing |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.group` | Main container |
| `.group--horizontal` | Row layout |
| `.group--vertical` | Column layout |

## CSS Variables

| Variable | Description |
|----------|-------------|
| `--padding` | Padding value from settings |
| `--alignment` | Alignment value for vertical layout |

## Related

- [Text Block](./blocks-text) - Text content block
- [Sections](./sections-index) - Parent sections
