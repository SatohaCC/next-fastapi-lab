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
