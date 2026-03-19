import { css } from '../../../../../styled-system/css';

export const formContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
  maxWidth: '400px',
  marginBlockStart: '6',
  marginBlockEnd: '6',
});

export const errorBorder = css({
  borderColor: 'red.500 !important',
  _focus: {
    boxShadow: '0 0 0 1px {colors.red.500} !important',
  },
});

export const errorText = css({
  color: 'red.500',
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
