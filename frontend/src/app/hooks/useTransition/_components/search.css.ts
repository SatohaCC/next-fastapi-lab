import { css } from '../../../../../styled-system/css';

export const container = css({
  p: '6',
  fontFamily: 'sans',
});

export const inputField = css({
  p: '2',
  borderWidth: '1px',
  borderColor: 'gray.300',
  borderRadius: 'md',
  width: '100%',
  maxWidth: '400px',
  mb: '4',
});

export const resultWrapper = css({
  mt: '5',
  transition: 'opacity 0.2s',
  '&[data-pending="true"]': {
    opacity: 0.4,
  },
});

export const loadingText = css({
  color: 'blue.500',
  fontWeight: 'bold',
  mb: '4',
});

export const listContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3',
});

export const itemCard = css({
  p: '3',
  borderWidth: '1px',
  borderColor: 'gray.200',
  borderRadius: 'md',
  bg: 'gray.50',
});

export const itemName = css({
  fontSize: 'lg',
  fontWeight: 'bold',
});

export const itemDetails = css({
  fontSize: 'sm',
  color: 'gray.600',
});
