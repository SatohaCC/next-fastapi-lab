import { cva } from '../../../styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    fontWeight: 'semibold',
    borderRadius: 'lg',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    WebkitTapHighlightColor: 'transparent',
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'primary',
      outlineOffset: '2px',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      transform: 'none !important',
      boxShadow: 'none !important',
    },
    _pressed: {
      transform: 'scale(0.97)',
    },
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: 'primary',
        color: 'white',
        boxShadow: 'sm',
        _hover: {
          backgroundColor: 'primaryHover',
          transform: 'translateY(-1px)',
          boxShadow: 'md',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'primary',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'primary',
        _hover: {
          backgroundColor: 'blue.50',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'textBody',
        _hover: {
          backgroundColor: 'gray.100',
        },
      },
      danger: {
        backgroundColor: 'transparent',
        color: 'danger',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'red.200',
        _hover: {
          backgroundColor: 'red.50',
        },
      },
    },
    size: {
      sm: {
        fontSize: 'sm',
        paddingInline: '3',
        paddingBlock: '1.5',
      },
      md: {
        fontSize: 'md',
        paddingInline: '5',
        paddingBlock: '2.5',
      },
      lg: {
        fontSize: 'lg',
        paddingInline: '7',
        paddingBlock: '3',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});
