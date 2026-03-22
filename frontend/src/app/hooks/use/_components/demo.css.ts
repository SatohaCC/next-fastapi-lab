import { css } from '../../../../../styled-system/css';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '6',
  padding: '8',
  maxWidth: '450px',
  borderRadius: '2xl',
  backgroundColor: 'white',
  boxShadow: 'xl',
  marginBlock: '8',
  border: '1px solid',
  borderColor: 'gray.100',
});

export const header = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2',
});

export const title = css({
  fontSize: '2xl',
  fontWeight: 'bold',
  color: 'gray.900',
  letterSpacing: 'tight',
});

export const description = css({
  fontSize: 'sm',
  color: 'gray.500',
  lineHeight: 'relaxed',
});

export const button = css({
  paddingInline: '5',
  paddingBlock: '2.5',
  backgroundColor: 'blue.600',
  color: 'white',
  fontWeight: 'semibold',
  borderRadius: 'lg',
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  boxShadow: 'sm',
  _hover: {
    backgroundColor: 'blue.700',
    transform: 'translateY(-1px)',
    boxShadow: 'md',
  },
  _active: {
    transform: 'translateY(1px)',
    boxShadow: 'none',
  },
  _disabled: {
    backgroundColor: 'gray.300',
    color: 'gray.500',
    cursor: 'not-allowed',
    transform: 'none',
    boxShadow: 'none',
  },
});

export const retryButton = css({
  paddingInline: '4',
  paddingBlock: '2',
  backgroundColor: 'transparent',
  color: 'red.600',
  fontWeight: 'medium',
  borderRadius: 'md',
  cursor: 'pointer',
  border: '1px solid',
  borderColor: 'red.200',
  transition: 'all 0.2s',
  _hover: { backgroundColor: 'red.50' },
  _active: { backgroundColor: 'red.100' },
});

export const card = css({
  padding: '8',
  backgroundColor: 'gray.50',
  borderRadius: 'xl',
  border: '1px dashed',
  borderColor: 'gray.300',
  minHeight: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
});

export const cardText = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3',
  fontSize: 'md',
  color: 'gray.600',
  animation: 'fadeIn 0.5s ease-out',
});

export const cardValue = css({
  fontSize: '4xl',
  fontWeight: 'black',
  color: 'blue.600',
  lineHeight: '1',
  textShadow: '0 2px 10px rgba(37, 99, 235, 0.2)',
});

export const skeletonLoading = css({
  color: 'blue.500',
  fontWeight: 'medium',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});

export const skeletonError = css({
  color: 'red.600',
  fontWeight: 'medium',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4',
  textAlign: 'center',
  animation: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
});
