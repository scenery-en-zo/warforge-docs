---
id: snippets-textareas
title: Textareas
sidebar_label: 'Textareas'
---

# Textarea Snippet

**File:** `snippets/textarea.liquid`

The textarea component renders multi-line text input fields with consistent styling and validation states.

## Visual Example

<div class="form-demo">
  <div class="form-field">
    <label for="demo-textarea" class="form-label">Message</label>
    <div class="input-wrapper">
      <textarea id="demo-textarea" name="message" placeholder="Write your message..." rows="4" class="input-control textarea-control"></textarea>
    </div>
  </div>

  <div class="form-field has-error">
    <label for="demo-textarea-error" class="form-label">Comments</label>
    <div class="input-wrapper">
      <textarea id="demo-textarea-error" name="comments" placeholder="Additional comments..." rows="3" class="input-control textarea-control">Invalid content</textarea>
    </div>
    <p class="form-error">Please keep comments under 500 characters</p>
  </div>
</div>

## Usage

```liquid
{% render 'textarea',
  name: 'customer[message]',
  id: 'customer-message',
  label: 'Message',
  placeholder: 'Write your message...',
  rows: 5,
  required: true,
  helper_text: 'Maximum 500 characters'
%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | String | Required | Textarea name attribute |
| `id` | String | `name` | Textarea ID attribute |
| `value` | String | - | Current value |
| `placeholder` | String | - | Placeholder text |
| `label` | String | - | Label text |
| `rows` | Number | `4` | Number of visible rows |
| `required` | Boolean | `false` | Whether field is required |
| `disabled` | Boolean | `false` | Whether field is disabled |
| `error` | String | - | Error message text |
| `helper_text` | String | - | Helper text |
| `class` | String | - | Additional CSS classes |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.form-field` | Main field container |
| `.form-field.has-error` | Error state |
| `.form-label` | Label element |
| `.input-wrapper` | Input wrapper |
| `.input-control` | Base input styling |
| `.textarea-control` | Textarea-specific styles |
| `.form-error` | Error message text |
| `.form-helper` | Helper text |

## Features

- ✅ Consistent styling with input component
- ✅ Resizable (vertical only)
- ✅ Minimum height of 120px
- ✅ Validation states (error, helper text)
- ✅ Required field indicator
- ✅ Disabled state support
- ✅ Accessible labeling

## States

- **Default** - Standard appearance
- **Focus** - Orange accent border glow
- **Hover** - Slightly lighter border
- **Error** - Red border with error message
- **Disabled** - Muted background, not-allowed cursor

## Related

- [Inputs](./snippets-inputs) - Single-line text input
- [Select](./snippets-select) - Dropdown selection
- [Checkbox](./snippets-checkboxes) - Boolean input
