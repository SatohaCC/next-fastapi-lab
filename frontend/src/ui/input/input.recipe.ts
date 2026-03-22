import { css, cva } from '../../../styled-system/css';

export const textFieldContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5',
});

export const labelStyle = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'gray.700',
});

export const inputRecipe = cva({
  base: {
    width: '100%',
    padding: '2.5',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border',
    borderRadius: 'md',
    fontSize: 'md',
    color: 'textBody',
    backgroundColor: 'white',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    _focus: {
      borderColor: 'primary',
      boxShadow: '0 0 0 1px {colors.primary}',
    },
    _disabled: {
      backgroundColor: 'gray.100',
      cursor: 'not-allowed',
      opacity: 0.7,
    },
    _placeholder: {
      color: 'textMuted',
    },
  },
  variants: {
    invalid: {
      true: {
        borderColor: 'danger',
        _focus: {
          boxShadow: '0 0 0 1px {colors.danger}',
        },
      },
    },
  },
  defaultVariants: {
    invalid: false,
  },
});

export const descriptionStyle = css({
  fontSize: 'xs',
  color: 'textMuted',
});

export const errorStyle = css({
  color: 'danger',
  fontSize: 'sm',
  marginBlockStart: '1',
  marginBlockEnd: '0',
});
