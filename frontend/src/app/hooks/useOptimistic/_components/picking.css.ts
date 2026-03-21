import { css, cva } from '../../../../../styled-system/css';

export const container = css({
  maxWidth: '400px',
  fontFamily: 'sans',
});

export const list = css({
  listStyleType: 'none',
  padding: '0',
  margin: '0',
});

export const listItemRecipe = cva({
  base: {
    padding: '3',
    borderBottomWidth: '1px',
    borderBottomColor: 'border',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.2s, color 0.2s',
  },
  variants: {
    state: {
      updating: {
        color: 'textMuted',
        bg: 'gray.50',
      },
      idle: {
        color: 'textBody',
        bg: 'transparent',
      },
    },
  },
  defaultVariants: {
    state: 'idle',
  },
});

export const checkbox = css({
  marginRight: '2.5',
  transform: 'scale(1.5)',
});

export const itemNameRecipe = cva({
  base: {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color 0.2s',
  },
  variants: {
    picked: {
      true: {
        textDecoration: 'line-through',
        color: 'textMuted',
      },
    },
  },
  defaultVariants: {
    picked: false,
  },
});

export const statusText = css({
  marginLeft: 'auto',
  color: 'textMuted',
  fontSize: 'sm',
});
