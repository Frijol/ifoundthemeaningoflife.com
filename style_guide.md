# 🌿 Kelsey Breseman — Web Style Guide

---

## 1. Brand Essence

**Core feeling:**
Quietly powerful, intimate, natural, textural, grounded in land and story.

**Keywords:**
Organic • Thoughtful • Elemental • Spacious • Honest • Hand-touched • Feminine but not delicate

**Design principle:**

> Let content breathe. Let texture speak softly. Let typography carry emotion.

---

## 2. Color System

### 🎨 Primary Palette

| Role         | Color      | Hex       | Usage                      |
| ------------ | ---------- | --------- | -------------------------- |
| Primary Deep | Dark Teal  | `#042F2E` | Headings, accents, borders |
| Body Text    | Charcoal   | `#232129` | Main text                  |
| Background   | Warm White | `#FAFAF8` | Page background            |
| Surface      | Soft Grey  | `#F5F5F5` | Cards, gallery background  |

---

### 🌊 Accent Palette

| Color      | Hex       | Use                       |
| ---------- | --------- | ------------------------- |
| Magenta    | `#BC027F` | Art / expressive elements |
| Ocean Blue | `#1099A8` | Blog / informational      |

---

### 🌿 Supporting Natural Tones

| Color | Hex       | Use                 |
| ----- | --------- | ------------------- |
| Moss  | `#6A7F58` | Secondary accents   |
| Clay  | `#C47A5A` | Warm highlights     |
| Sand  | `#E8E1D9` | Section backgrounds |

---

### ✅ Color Rules

* Use dark teal sparingly but consistently
* Avoid pure black
* Maintain high whitespace ratio (70–80%)
* Assign accent colors by content type

---

### 🌈 Gradients

```css
background: linear-gradient(
  135deg,
  #042F2E 0%,
  #1099A8 100%
);
```

**Use for:**

* Hero overlays
* Button hover states
* Section transitions

**Avoid:**

* Large full-page gradients

---

## 3. Typography

### ✨ Font Pairing

**Primary:**

* Headings: *Cormorant Garamond*
* Body: *Inter* or *Roboto*

**Fallback:**

```css
font-family: "Inter", -apple-system, Roboto, sans-serif;
```

---

### 🪶 Typography Roles

| Element   | Font               | Weight     | Style                 |
| --------- | ------------------ | ---------- | --------------------- |
| H1        | Cormorant Garamond | 500–600    | Slightly tight        |
| H2        | Cormorant Garamond | 500        |                       |
| H3        | Inter              | 400–500    |                       |
| Body      | Inter              | 300–400    |                       |
| Quotes    | Cormorant Garamond | 400 italic |                       |
| Labels/UI | Inter              | 500–600    | Slight letter spacing |

---

### 🔠 Type Scale

```css
H1: 48–56px
H2: 32–40px
H3: 22–26px
Body: 16–18px
Small: 13–14px
Caption: 11–12px
```

**Line height:**

* Body: 1.6–1.75
* Headings: 1.2–1.3

---

## 4. Signature Quote Style

### Style Rules

* Serif italic
* Larger than body text
* Soft weight
* Left border accent

### Example

```css
.quote {
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 1.4rem;
  line-height: 1.7;
  color: #042F2E;
  border-left: 3px solid #042F2E;
  padding-left: 20px;
}
```

---

## 5. Layout & Spacing

### 📐 Spacing System

8px grid:

```
8 / 16 / 24 / 32 / 48 / 64 / 96
```

---

### 📏 Content Width

* Max width: 720–860px
* Text width: 560–640px

---

## 6. Components

### 🧱 Cards

```css
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0,0,0,0.08);
```

**Behavior:**

* Subtle hover lift
* Clean and minimal

---

### 🔘 Links & Buttons

```css
a {
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

a:hover {
  border-bottom: 1px solid currentColor;
}
```

CTA buttons:

```css
button {
  background: #042F2E;
  color: white;
  border-radius: 6px;
  padding: 10px 16px;
}
```

---

### 🔖 Badges

* Keep bold contrast
* Slight rounding (`6px`)

---

## 7. Navigation

### Style

* Minimal
* Quiet
* Non-dominant

### Example

```
Kelsey Breseman
[Art] [Writing] [Projects] [About]
```

### Behavior

* Sticky
* Subtle background fade/blur on scroll

---

## 8. Imagery

### 📸 Principles

* Natural light
* Texture-rich
* Authentic over polished

---

### 🖼 Treatment

| Element        | Style              |
| -------------- | ------------------ |
| Gallery images | 6–8px rounding     |
| Headshot       | Circular           |
| Art            | Clean, no overlays |
| Hover          | Subtle zoom        |

---

### Shadows

```css
box-shadow: 0 4px 12px rgba(0,0,0,0.06);
```

---

## 9. Motion & Interaction

* Duration: 150–250ms
* Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Use for:**

* Hover states
* Transitions
* UI feedback

**Avoid:**

* Bounce effects
* Heavy animation

---

## 10. Page Structure

### Homepage Layout

1. Hero (name + identity)
2. Gallery
3. About
4. Projects / Links
5. Writing embed

---

## 11. Design Guidelines

### ✅ Do

* Use generous whitespace
* Let typography lead
* Keep interactions subtle
* Maintain color consistency

### ❌ Don’t

* Overuse bright accents
* Add heavy gradients everywhere
* Use pure black or white
* Over-round everything

---

## 12. Optional Enhancements

* Subtle paper texture backgrounds
* Organic section dividers
* Seasonal color variations

---

## 13. Visual Summary

If this design were a physical space:

* A light-filled cabin
* Wood, linen, and stone textures
* Quiet, intentional objects
* A book open on a table

---
