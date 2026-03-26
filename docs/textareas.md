---
id: textareas
title: Textareas
sidebar_label: 'Textareas'
---

# Textareas

The textarea component provides a multi-line text input field used primarily in contact forms, reviews, and product descriptions. It maintains consistent styling with other form inputs while providing expanded height for longer content.

## Visual Examples

<div style={{display: 'flex', gap: '24px', alignItems: 'flex-start', marginBottom: '24px'}}>
  <!-- Basic Textarea -->
  <div style={{flex: '1'}}>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Message</label>
    <textarea rows="4" placeholder="Write your message here..." style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #2C3B52', borderRadius: '8px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px', resize: 'vertical'}}>
This is a textarea field for longer text input. It supports multiple lines and can be resized vertically.
    </textarea>
  </div>
  
  <!-- Contact Form Textarea -->
  <div style={{flex: '1'}}>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Your message</label>
    <textarea rows="6" placeholder="How can we help you?" style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #F97316', borderRadius: '8px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px', resize: 'vertical'}}>
Hi there, I'm interested in placing a bulk order for tabletop miniatures. Could you provide information about shipping times and wholesale pricing?
    </textarea>
  </div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <!-- Small Textarea -->
  <div>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Notes</label>
    <textarea rows="2" placeholder="Short note..." style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #2C3B52', borderRadius: '8px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px', resize: 'vertical'}}>Short note</textarea>
  </div>
  
  <!-- Large Textarea -->
  <div>
    <label style={{display: 'block', fontSize: '13px', color: '#94A3B8', marginBottom: '6px'}}>Product description</label>
    <textarea rows="8" placeholder="Describe your product..." style={{width: '100%', backgroundColor: '#2C3B52', border: '1px solid #2C3B52', borderRadius: '8px', padding: '12px 16px', color: '#F8FAFC', fontSize: '14px', resize: 'vertical'}}>
This is a large textarea for longer content like product descriptions or detailed messages. It can hold multiple paragraphs and lists.
    </textarea>
  </div>
</div>

## Component Overview

The textarea component is used for:

- **Contact forms** — Customer message field
- **Reviews** — Product review comments
- **Product descriptions** — Rich text content areas
- **Feedback forms** — User feedback and suggestions
- **Search queries** — Advanced search with filters

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | String | Required | Input name attribute |
| `label` | String | — | Label text above textarea |
| `placeholder` | String | — | Placeholder text |
| `rows` | Number | `4` | Initial row height |
| `max_rows` | Number | `20` | Maximum expanded rows |
| `required` | Boolean | `false` | Whether field is required |
| `error` | String | — | Error message to display |
| `readonly` | Boolean | `false` | Makes textarea read-only |
| `disabled` | Boolean | `false` | Disables the textarea |

## Usage Examples

### Basic Textarea

```liquid
```liquid
```
  name: 'message',
  label: 'Message',
  placeholder: 'Write your message here...'
%&#125;```
```

### Contact Form Textarea

```
<!-- Liquid example -->'textarea', 
  name: 'contact_message',
  label: 'Your message',
  placeholder: 'How can we help you?',
  rows: 6,
  required: true
%&#125;```
```
### Textarea with Error

```
```<!-- Liquid example -->'textarea', 
  name: 'review_text',
  label: 'Review',
  placeholder: 'Share your experience...',
  error: 'Review must be at least 10 characters'
%&#125;```
```

### Read-only Textarea

``````liquid
<!-- Liquid example -->'textarea', 
  name: 'description',
  label: 'Product description',
  readonly: true,
  value: product.description
%&#125;```
```
## CSS Classes

| Class | Description |
|-------|-------------|
| `.textarea` | Base textarea styles with dark background |
| `.textarea--contact` | Contact form textarea styling |
| `.textarea--review` | Review textarea with word count |
| `.textarea--error` | Textarea with validation error state |

## Accessibility

- Associated label via aria-label or visible label element
- Required fields marked appropriately
- Error messages associated via aria-describedby
- Focus visible on all interactive states
- Keyboard navigation supported (Tab, Escape to clear)

## Related Components

- [Inputs](./inputs) — Single-line form inputs
- [Buttons](./buttons) — Submit buttons for forms
- [Textareas](./textareas) — Multi-line text input

