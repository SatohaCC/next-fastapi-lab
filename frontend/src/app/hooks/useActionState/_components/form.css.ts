import { css, cva } from '../../../../../styled-system/css';

export const formContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
  maxWidth: '400px',
  marginBlockStart: '6',
  marginBlockEnd: '6',
});

export const fieldWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5',
});

export const label = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'gray.700',
});

export const inputRecipe = cva({
  base: {
    padding: '2.5',
    borderWidth: '1px',
    borderColor: 'border',
    borderRadius: 'md',
    fontSize: 'md',
    color: 'textBody',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none',
    _focus: {
      borderColor: 'primary',
      boxShadow: '0 0 0 1px {colors.primary}',
    },
    _disabled: {
      bg: 'gray.100',
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
  variants: {
    invalid: {
      true: {
        borderColor: 'danger !important',
        _focus: {
          boxShadow: '0 0 0 1px {colors.danger} !important',
        },
      },
    },
  },
  defaultVariants: {
    invalid: false,
  },
});

export const buttonRecipe = cva({
  base: {
    marginTop: '2',
    padding: '2.5',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 'md',
    cursor: 'pointer',
    transition: 'background-color 0.2s, transform 0.1s',
    _active: {
      transform: 'scale(0.98)',
    },
    _disabled: {
      backgroundColor: 'gray.400',
      cursor: 'not-allowed',
      transform: 'none',
    },
  },
  variants: {
    visual: {
      solid: {
        backgroundColor: 'primary',
        _hover: {
          backgroundColor: 'primaryHover',
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'primary',
        color: 'primary',
        bg: 'transparent',
        _hover: {
          bg: 'blue.50',
        },
      },
    },
  },
  defaultVariants: {
    visual: 'solid',
  },
});

export const errorText = css({
  color: 'danger',
  fontSize: 'sm',
  marginBlockStart: '1',
  marginBlockEnd: '0',
});

export const successText = css({
  color: 'green.600',
  fontWeight: 'bold',
  marginBlockStart: '2',
  marginBlockEnd: '0',
});

export const titleText = css({
  marginBottom: '4',
  color: 'gray.800',
  fontSize: '2xl',
  fontWeight: 'bold',
});
