---
id: checkboxes
title: Checkboxes
sidebar_label: 'Checkboxes'
---

# Checkboxes

The checkbox component is a boolean toggle used for options, preferences, and consent indicators throughout the theme. It's commonly found in forms, settings panels, and preference centers.

## Visual Examples

<div style={{display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px'}}>
  <!-- Checked Checkbox -->
  <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
    
<!-- Liquid example -->'checkbox', name: 'subscribe', value: '1', checked: true %}```
    <span style={{fontSize: '14px', color: '#F8FAFC'}}>Subscribe to newsletter</span>
  </label>
  
  <!-- Unchecked Checkbox -->
  <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
    
<!-- Liquid example -->'checkbox', name: 'terms', value: '1', checked: false %}```
    <span style={{fontSize: '14px', color: '#F8FAFC'}}>Accept terms of service</span>
  </label>
  
  <!-- Disabled Checkbox -->
  <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'not-allowed'}}>
    
<!-- Liquid example -->'checkbox', name: 'disabled', value: '1', checked: true, disabled: true %}```
    <span style={{fontSize: '14px', color: '#64748B'}}>Disabled checkbox</span>
  </label>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
  <!-- Small Checkbox -->
  <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
    
<!-- Liquid example -->'checkbox', name: 'size_s', value: 'small', checked: true %}```
    <span style={{fontSize: '12px', color: '#94A3B8'}}>Small</span>
  </label>
  
  <!-- Large Checkbox -->
  <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
    
<!-- Liquid example -->'checkbox', name: 'remember_me', value: '1', checked: true %}```
    <span style={{fontSize: '16px', color: '#F8FAFC'}}>Remember me</span>
  </label>
  
  <!-- Checkbox with Icon -->
  <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
    
<!-- Liquid example -->'checkbox', name: 'newsletter', value: '1', checked: true %}```
    <span style={{fontSize: '14px', color: '#F8FAFC'}}>
      Get updates on new products and exclusive deals
    </span>
  </label>
</div>

## Component Overview

Checkboxes are used for:

- **Form options** — Newsletter subscription, remember me
- **Consent indicators** — Terms of service acceptance
- **Multi-select** — Product attributes (color, size preferences)
- **Settings toggles** — Enable/disable features in settings panels
- **Filter checkboxes** — Category/brand filtering in collection pages

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | String | Required | Checkbox name attribute (group related checkboxes) |
| `value` | String | Required | Value submitted on form submission |
| `checked` | Boolean | `false` | Whether checkbox is checked by default |
| `label` | String | — | Label text displayed next to checkbox |
| `disabled` | Boolean | `false` | Disables the checkbox |
| `indeterminate` | Boolean | `false` | Shows indeterminate state (partial selection) |

## Usage Examples

### Basic Checkbox

```liquid
```liquid
```
  name: 'subscribe',
  value: '1',
  checked: true,
  label: 'Subscribe to newsletter'
%&#125;```
```

### Unchecked Checkbox

```
<!-- Liquid example -->'checkbox', 
  name: 'terms',
  value: '1',
  checked: false,
  label: 'Accept terms of service'
%&#125;```
```
### Disabled Checkbox

```
```<!-- Liquid example -->'checkbox', 
  name: 'disabled_option',
  value: '1',
  checked: true,
  disabled: true,
  label: 'This option is unavailable'
%&#125;```
```

### Checkbox with Icon

``````liquid
<div style="display: flex; align-items: center; gap: 8px;">
  
<!-- Liquid example -->'checkbox', 
    name: 'newsletter',
    value: '1',
    checked: true,
    label: 'Get updates'
  %&#125;```
</div>
```
## CSS Classes

| Class | Description |
|-------|-------------|
| `.checkbox` | Base checkbox wrapper with custom styling |
| `.checkbox--checked` | Checked state (orange accent) |
| `.checkbox--unchecked` | Unchecked state (empty square) |
| `.checkbox--disabled` | Disabled/grayed out state |
| `.checkbox--indeterminate` | Indeterminate/partial selection state |

## Accessibility

- All checkboxes have associated labels (visually hidden if needed)
- `aria-invalid="true"` on error states
- Focus visible on all interactive states
- Keyboard navigation: Space to toggle, Enter to activate
- Screen readers announce checked/unchecked state correctly

## Related Components

- [Inputs](./inputs) — Single-line form inputs
- [Textareas](./textareas) — Multi-line text input
- [Radios](./radios) — Single-selection alternatives
- [Buttons](./buttons) — Submit buttons for forms

