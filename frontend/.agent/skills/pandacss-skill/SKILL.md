---
name: pandacss-styling-patterns
description: Use this skill when the user asks to apply CSS, design components, or refactor styles using PandaCSS in this project.
---

# PandaCSS Styling Guidelines

This project exclusively uses **PandaCSS** for styling. Inline styles (`style={{...}}`) and plain CSS files are strictly forbidden.

## 1. File Structure & Colocation
- Styles should be defined in a separate file alongside the component, typically named `[componentName].css.ts` (e.g., `form.css.ts`, `search.css.ts`).
- **Never** write inline styles in `.tsx` components.

## 2. Defining Styles (`.css.ts`)
- Use the `css` function from `styled-system/css` to define style objects.
- Export each style class individually.
- Utilize PandaCSS design tokens for colors (`gray.300`, `blue.500`), spacing (`padding: '2.5'`, `gap: '1.5'`), and radii (`borderRadius: 'md'`).
- Use pseudo-class helpers like `_hover`, `_focus`, `_disabled`, and `_active`.

**Example:**
```typescript
import { css } from '../../../../../styled-system/css'; // Adjust path according to your root styled-system location

export const inputField = css({
  padding: '2.5',
  borderWidth: '1px',
  borderColor: 'gray.300',
  borderRadius: 'md',
  fontSize: 'md',
  color: 'gray.900',
  transition: 'border-color 0.2s',
  outline: 'none',
  _focus: {
    borderColor: 'blue.500',
    boxShadow: '0 0 0 1px {colors.blue.500}',
  },
  _disabled: {
    bg: 'gray.100',
    cursor: 'not-allowed',
    opacity: 0.7,
  },
});

export const errorBorder = css({
  borderColor: 'red.500 !important',
});
```

## 3. Applying Styles in Components (`.tsx`)
- Import the styles using a wildcard alias: `import * as styles from './[componentName].css';`.
- Apply classes via the `className` prop: `className={styles.inputField}`.

## 4. Conditional Styling
There are two approved ways to apply styles conditionally (e.g. error states, loading states):

### Method A: Using `cx` for class concatenation
Use the `cx` utility from `styled-system/css` when combining base classes with conditional modifier classes.
```tsx
import * as styles from './form.css';
import { cx } from '../../../../../styled-system/css';

// ...
<input 
  className={cx(styles.inputField, hasError && styles.errorBorder)} 
/>
```

### Method B: Using Data Attributes
For robust state-driven UI (like `isUpdating` or `isPicked`), pass a `data-*` attribute in the JSX and target it in the `.css.ts` file.
```tsx
// Component
<li className={styles.listItem} data-updating={isUpdating}>...</li>
```
```typescript
// CSS
export const listItem = css({
  color: 'black',
  '&[data-updating="true"]': {
    color: 'gray.400',
  },
});
```

Follow these guidelines strictly to ensure a consistent, maintainable, and type-safe styling architecture across the frontend codebase.
