---
id: inputs
title: Inputs
sidebar_label: "Inputs"
---

# Inputs

The input component is a form field wrapper used throughout the theme for search, login, registration, newsletter signup, and filter inputs. It provides consistent styling and accessibility across all forms.

## Visual Examples

<div style={{display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap'}}>
  <div style={{flex: '1', minWidth: '250px'}}>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Email address</label>
    <input type="email" placeholder="Enter your email" style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #2C3B52', borderRadius: '8px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px'}}/>
  </div>
  
  <div style={{flex: '1', minWidth: '250px'}}>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Search products</label>
    <input type="text" placeholder="Search..." style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #2C3B52', borderRadius: '8px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px'}}/>
  </div>
  
  <div style={{flex: '1', minWidth: '250px'}}>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Search with focus</label>
    <input type="text" placeholder="Search..." value="battlefield skulls" style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #F97316', borderRadius: '8px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px'}}/>
  </div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px'}}>
  <div>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Sort by</label>
    <select style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #2C3B52', borderRadius: '8px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px'}}>
      <option>Recommended</option>
      <option>Price (low to high)</option>
      <option>Price (high to low)</option>
    </select>
  </div>
  
  <div>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Quantity</label>
    <input type="number" value="1" min="1" style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #2C3B52', borderRadius: '8px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px'}}/>
  </div>
  
  <div>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Disabled</label>
    <input type="text" value="Disabled input" disabled style={{width: '100%', backgroundColor: '#1E293B', border: '1px solid #2C3B52', borderRadius: '8px', padding: '12px 16px', color: '#64748B', fontSize: '14px', cursor: 'not-allowed'}}/>
  </div>
</div>

## Component Overview

The input component is used for:

- **Search** — Header search, collection filters
- **Forms** — Login, registration, contact forms
- **Filters** — Price range, quantity selectors
- **Newsletter** — Email signup forms

## Input Types

### Text Input

```liquid
<div class="form-field">
  <label class="form-label" for="input-id">Label text</label>
  <input 
    type="text" 
    id="input-id" 
    name="input-name"
    class="form-input"
    placeholder="Enter text"
  />
</div>
```

### Email Input

```liquid
<div class="form-field">
  <label class="form-label" for="email">Email address</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    class="form-input"
    placeholder="your@email.com"
    required
  />
</div>
```

### Password Input

```liquid
<div class="form-field">
  <label class="form-label" for="password">Password</label>
  <input 
    type="password" 
    id="password" 
    name="password"
    class="form-input"
    required
  />
</div>
```

### Number Input

```liquid
<div class="form-field">
  <label class="form-label" for="quantity">Quantity</label>
  <input 
    type="number" 
    id="quantity" 
    name="quantity"
    class="form-input"
    value="1"
    min="1"
  />
</div>
```

### Search Input

```liquid
<div class="form-field form-field--search">
  <label class="form-label" for="search">Search</label>
  <div class="form-input-wrapper">
    {% render 'icon', name: 'search', size: 'md', variant: 'muted' %}
    <input 
      type="search" 
      id="search" 
      name="q"
      class="form-input form-input--with-icon"
      placeholder="Search products"
    />
  </div>
</div>
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | String | `text` | Input type: `text`, `email`, `password`, `number`, `search`, `tel`, `url` |
| `id` | String | Required | Unique identifier for label association |
| `name` | String | Required | Form field name |
| `placeholder` | String | — | Placeholder text |
| `value` | String | — | Default value |
| `required` | Boolean | `false` | Makes field required |
| `disabled` | Boolean | `false` | Disables the input |
| `readonly` | Boolean | `false` | Makes input read-only |
| `min` | Number | — | Minimum value for number inputs |
| `max` | Number | — | Maximum value for number inputs |
| `pattern` | String | — | Regex pattern for validation |

## States

### Default

```liquid
<input class="form-input" type="text" placeholder="Default state" />
```

### Focus

```liquid
<input class="form-input form-input--focus" type="text" placeholder="Focus state" />
```

### Error

```liquid
<div class="form-field form-field--error">
  <input class="form-input form-input--error" type="email" value="invalid-email" />
  <span class="form-error-message">Please enter a valid email address</span>
</div>
```

### Disabled

```liquid
<input class="form-input form-input--disabled" type="text" value="Disabled" disabled />
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.form-field` | Wrapper container |
| `.form-label` | Label element |
| `.form-input` | Base input styling |
| `.form-input--with-icon` | Input with icon prefix |
| `.form-input--error` | Error state styling |
| `.form-input--disabled` | Disabled state styling |
| `.form-error-message` | Error message text |

## Accessibility

- All inputs have associated labels via `for` attribute
- Required fields are marked with `required` and visual indicator
- Error states include `aria-invalid` and `aria-describedby`
- Focus states have visible outlines
- Screen readers announce input type and validation state

## Related Components

- [Buttons](./buttons) — Form submission buttons
- [Select](./radios) — Dropdown selections
- [Checkbox](./checkboxes) — Boolean inputs
- [Radio](./radios) — Single choice inputs
- [Textarea](./textareas) — Multi-line text inputs
