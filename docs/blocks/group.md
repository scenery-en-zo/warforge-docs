---
id: blocks-group
title: Group Block
sidebar_label: 'Group'
---

# Group Block

**File:** `blocks/group.liquid`

The group block is a layout container that arranges child blocks in horizontal or vertical direction with configurable alignment and padding.

## Visual Example

<div style="display:flex;flex-direction:column;gap:24px;">
  <div style="border:1px solid var(--bg-700);border-radius:var(--radius-md);padding:16px;background:var(--bg-800);">
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Horizontal Layout</div>
    <div class="group group--horizontal" style="--padding:16px;--alignment:flex-start;display:flex;flex-direction:row;gap:16px;align-items:center;">
      <div style="padding:12px;background:var(--bg-700);border-radius:var(--radius-sm);">Item 1</div>
      <div style="padding:12px;background:var(--bg-700);border-radius:var(--radius-sm);">Item 2</div>
      <div style="padding:12px;background:var(--bg-700);border-radius:var(--radius-sm);">Item 3</div>
    </div>
  </div>

  <div style="border:1px solid var(--bg-700);border-radius:var(--radius-md);padding:16px;background:var(--bg-800);">
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Vertical Layout</div>
    <div class="group group--vertical" style="--padding:16px;--alignment:flex-start;display:flex;flex-direction:column;gap:16px;">
      <div style="padding:12px;background:var(--bg-700);border-radius:var(--radius-sm);">Item 1</div>
      <div style="padding:12px;background:var(--bg-700);border-radius:var(--radius-sm);">Item 2</div>
      <div style="padding:12px;background:var(--bg-700);border-radius:var(--radius-sm);">Item 3</div>
    </div>
  </div>
</div>

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
