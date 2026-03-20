import { css } from '../../../../../styled-system/css';

export const container = css({
  maxWidth: '400px',
  fontFamily: 'sans',
});

export const list = css({
  listStyleType: 'none',
  padding: '0',
  margin: '0',
});

export const listItem = css({
  padding: '3',
  borderBottomWidth: '1px',
  borderBottomColor: 'gray.200',
  display: 'flex',
  alignItems: 'center',
  color: 'black',
  '&[data-updating="true"]': {
    color: 'gray.400',
  },
});

export const checkbox = css({
  marginRight: '2.5',
  transform: 'scale(1.5)',
});

export const itemName = css({
  textDecoration: 'none',
  '&[data-picked="true"]': {
    textDecoration: 'line-through',
    color: 'gray.500',
  },
});

export const statusText = css({
  marginLeft: 'auto',
  color: 'gray.500',
  fontSize: 'sm',
});
