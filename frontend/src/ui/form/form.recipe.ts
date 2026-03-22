import { css, cva } from '../../../styled-system/css';

export const formContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
  maxWidth: '400px',
  marginBlockStart: '6',
  marginBlockEnd: '6',
});

export const formTitle = css({
  marginBottom: '4',
  color: 'gray.800',
  fontSize: '2xl',
  fontWeight: 'bold',
});

export const formMessageRecipe = cva({
  base: {
    fontWeight: 'bold',
    marginBlockStart: '2',
    marginBlockEnd: '0',
  },
  variants: {
    type: {
      success: {
        color: 'success',
      },
      error: {
        color: 'danger',
      },
    },
  },
  defaultVariants: {
    type: 'success',
  },
});
