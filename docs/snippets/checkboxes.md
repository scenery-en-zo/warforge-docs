---
id: snippets-checkboxes
title: Checkboxes
sidebar_label: 'Checkboxes'
---

# Checkbox Snippet

**File:** `snippets/checkbox.liquid`

The checkbox component renders styled checkbox inputs with custom styling, labels, and validation states.

## Visual Example

<div class="form-demo">
  <div class="checkbox-item">
    <label class="checkbox-label-ds">
      <input type="checkbox" name="agree" value="yes" class="checkbox-input-ds">
      <span class="checkbox-box">
        <svg class="icon icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span class="checkbox-text-ds">I agree to the terms and conditions</span>
    </label>
  </div>

  <div class="checkbox-item">
    <label class="checkbox-label-ds">
      <input type="checkbox" name="checked" value="yes" class="checkbox-input-ds" checked>
      <span class="checkbox-box">
        <svg class="icon icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span class="checkbox-text-ds">Checked state</span>
    </label>
  </div>

  <div class="checkbox-item">
    <label class="checkbox-label-ds">
      <input type="checkbox" name="disabled" value="yes" class="checkbox-input-ds" disabled>
      <span class="checkbox-box">
        <svg class="icon icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span class="checkbox-text-ds">Disabled state</span>
    </label>
  </div>
</div>

## Usage

```liquid
{% render 'checkbox',
  name: 'customer[accepts_marketing]',
  value: 'true',
  label: 'Subscribe to newsletter',
  checked: true,
  required: true
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | String | Required | Input name attribute |
| `value` | String | Required | Input value |
| `id` | String | Auto-generated | Optional input ID |
| `label` | String | - | Label text |
| `class` | String | - | Additional wrapper classes |
| `checked` | Boolean | `false` | Whether checkbox is checked |
| `disabled` | Boolean | `false` | Whether checkbox is disabled |
| `required` | Boolean | `false` | Whether field is required |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.checkbox-item` | Main container |
| `.checkbox-label-ds` | Label wrapper |
| `.checkbox-input-ds` | Hidden native input |
| `.checkbox-box` | Custom checkbox visual |
| `.checkbox-text-ds` | Label text |
| `.icon-check` | Checkmark icon |

## Features

- ✅ Custom styled checkbox (native input hidden)
- ✅ Animated checkmark with scale transition
- ✅ Focus state with orange accent glow
- ✅ Hover state for better interactivity
- ✅ Disabled state with reduced opacity
- ✅ Accessible (native input remains functional)
- ✅ Required indicator support

## States

- **Default** - Empty box with border
- **Checked** - Orange background with checkmark
- **Hover** - Border highlights in accent color
- **Focus** - Orange glow outline
- **Disabled** - Reduced opacity, not-allowed cursor

## Related

- [Inputs](./snippets-inputs) - Text inputs
- [Radios](./snippets-radios) - Radio buttons
- [Button](./snippets-buttons) - Form submission
