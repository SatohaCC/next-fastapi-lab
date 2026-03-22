import { css, cva } from '../../../styled-system/css';

export const tabsContainer = css({
  width: '100%',
});

export const tabList = css({
  display: 'flex',
  gap: '0',
  borderBottom: '2px solid',
  borderColor: 'gray.200',
});

export const tabRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: '5',
    paddingBlock: '3',
    fontSize: 'sm',
    fontWeight: 'medium',
    color: 'textMuted',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    position: 'relative',
    transition: 'color 0.2s, background-color 0.2s',
    marginBottom: '-2px',
    borderBottom: '2px solid transparent',
    WebkitTapHighlightColor: 'transparent',
    _hover: {
      color: 'textBody',
      backgroundColor: 'gray.50',
    },
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'primary',
      outlineOffset: '-2px',
      borderRadius: 'sm',
    },
    _selected: {
      color: 'primary',
      fontWeight: 'semibold',
      borderBottomColor: 'primary',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
});

export const tabPanel = css({
  padding: '6',
  outline: 'none',
  _focusVisible: {
    outline: '2px solid',
    outlineColor: 'primary',
    outlineOffset: '2px',
    borderRadius: 'md',
  },
});
