---
id: snippets-inputs
title: Inputs
sidebar_label: 'Inputs'
---

# Input Snippet

**File:** `snippets/input.liquid`

The input component renders form input fields with consistent styling, validation states, and optional icons.

## Visual Example

<div class="form-demo">
  <div class="form-field form-field--md">
    <label htmlFor="demo-input" className="form-label">Email Address</label>
    <div className="input-wrapper">
      <input type="email" id="demo-input" placeholder="you@example.com" className="input-control" />
    </div>
  </div>

  <div class="form-field form-field--md has-error">
    <label htmlFor="demo-input-error" className="form-label">Username</label>
    <div className="input-wrapper">
      <input type="text" id="demo-input-error" value="invalid_user" className="input-control" />
    </div>
    <p className="form-error">Username is already taken</p>
  </div>

  <div class="form-field form-field--md">
    <label htmlFor="demo-input-icon" className="form-label">Search</label>
    <div className="input-wrapper has-leading-icon">
      <span className="input-icon input-icon--leading">
        <svg className="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </span>
      <input type="search" id="demo-input-icon" placeholder="Search..." className="input-control" />
    </div>
  </div>
</div>

## Usage

```liquid
{% render 'input',
  type: 'email',
  name: 'customer[email]',
  id: 'customer-email',
  label: 'Email Address',
  placeholder: 'you@example.com',
  required: true,
  leading_icon: 'mail'
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | String | `text` | Input type: `text`, `email`, `password`, `number`, `search` |
| `name` | String | - | Input name attribute |
| `id` | String | `name` | Input ID attribute |
| `value` | String | - | Current value |
| `placeholder` | String | - | Placeholder text |
| `label` | String | - | Label text |
| `size` | String | `md` | Size: `sm`, `md`, `lg` |
| `leading_icon` | String | - | Icon name for leading position |
| `trailing_icon` | String | - | Icon name for trailing position |
| `required` | Boolean | `false` | Whether field is required |
| `disabled` | Boolean | `false` | Whether field is disabled |
| `error` | String | - | Error message text |
| `helper_text` | String | - | Helper text |
| `class` | String | - | Additional CSS classes |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.form-field` | Main field container |
| `.form-field--sm`, `--md`, `--lg` | Size modifiers |
| `.form-field.has-error` | Error state |
| `.form-label` | Label element |
| `.input-wrapper` | Input wrapper with icons |
| `.input-control` | The actual input element |
| `.input-icon` | Icon container |
| `.input-icon--leading` | Leading icon position |
| `.input-icon--trailing` | Trailing icon position |
| `.form-error` | Error message text |
| `.form-helper` | Helper text |

## Sizes

- **sm** (32px height) - Compact forms, inline editing
- **md** (40px height) - Default, most forms
- **lg** (48px height) - Prominent forms, checkout

## States

- **Default** - Standard appearance
- **Focus** - Orange accent border glow
- **Hover** - Slightly lighter border
- **Error** - Red border with error message
- **Disabled** - Muted background, not-allowed cursor

## Related

- [Textarea](./snippets-textareas) - Multi-line text input
- [Select](./snippets-select) - Dropdown selection
- [Checkbox](./snippets-checkboxes) - Boolean input
- [Button](./snippets-buttons) - Form submission
