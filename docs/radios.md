---
id: radios
title: Radios
sidebar_label: 'Radios'
---

# Radios

The radio component is a single-selection toggle used when users must choose exactly one option from a group. Radios are commonly used for size selection, color choices, and other mutually exclusive options.

## Visual Examples

<div style={{display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap'}}>
  <div>
    <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px'}}>
      <input type="radio" name="size" value="small" checked style={{accentColor: '#F97316'}}/>
      <span style={{fontSize: '14px', color: '#F8FAFC'}}>Small</span>
    </label>
    
    <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px'}}>
      <input type="radio" name="size" value="medium" style={{accentColor: '#F97316'}}/>
      <span style={{fontSize: '14px', color: '#F8FAFC'}}>Medium</span>
    </label>
    
    <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px'}}>
      <input type="radio" name="size" value="large" style={{accentColor: '#F97316'}}/>
      <span style={{fontSize: '14px', color: '#F8FAFC'}}>Large</span>
    </label>
  </div>
  
  <div>
    <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px'}}>
      <input type="radio" name="color" value="black" checked style={{accentColor: '#F97316'}}/>
      <span style={{fontSize: '14px', color: '#F8FAFC'}}>
        <span style={{display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#0F172A', borderRadius: '50%', marginRight: '4px', verticalAlign: 'middle', border: '1px solid #3B4A61'}}></span>
        Black
      </span>
    </label>
    
    <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px'}}>
      <input type="radio" name="color" value="white" style={{accentColor: '#F97316'}}/>
      <span style={{fontSize: '14px', color: '#F8FAFC'}}>
        <span style={{display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', borderRadius: '50%', marginRight: '4px', verticalAlign: 'middle', border: '1px solid #3B4A61'}}></span>
        White
      </span>
    </label>
    
    <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px'}}>
      <input type="radio" name="color" value="gray" style={{accentColor: '#F97316'}}/>
      <span style={{fontSize: '14px', color: '#F8FAFC'}}>
        <span style={{display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#64748B', borderRadius: '50%', marginRight: '4px', verticalAlign: 'middle', border: '1px solid #3B4A61'}}></span>
        Gray
      </span>
    </label>
  </div>
</div>

## Component Overview

Radio buttons are used for:

- **Product Variants** — Size, color, material selection
- **Forms** — Single-choice questions
- **Settings** — Preference selection
- **Filters** — Mutually exclusive filter options

## Usage

```liquid
<div class="radio-group">
  <label class="radio">
    <input 
      type="radio" 
      name="option-name" 
      value="value1"
      class="radio__input"
      checked
    />
    <span class="radio__label">Option 1</span>
  </label>
  
  <label class="radio">
    <input 
      type="radio" 
      name="option-name" 
      value="value2"
      class="radio__input"
    />
    <span class="radio__label">Option 2</span>
  </label>
</div>
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | String | Required | Group name (must be same for all radios in group) |
| `value` | String | Required | Option value |
| `checked` | Boolean | `false` | Pre-select this option |
| `disabled` | Boolean | `false` | Disable the option |
| `label` | String | — | Visible label text |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.radio-group` | Radio group wrapper |
| `.radio` | Individual radio wrapper |
| `.radio__input` | Radio input element |
| `.radio__label` | Label text |
| `.radio--disabled` | Disabled state |

## Accessibility

- All radios in a group share the same `name` attribute
- Each radio has an associated label
- Selected state is visually and programmatically indicated
- Keyboard navigation with arrow keys
- Screen readers announce group name and selection state

## Related Components

- [Checkbox](./checkboxes) — Multi-selection toggle
- [Inputs](./inputs) — Form inputs
- [Select](./inputs) — Dropdown selection
