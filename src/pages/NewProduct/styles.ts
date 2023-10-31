import { styled } from "@stitches/react";

export const Container = styled('div', {
  width: '100vw',
  minHeight: '100vh',
  flex: '1, 10',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  '> svg': {
    position: 'absolute',
    top: '8px',
    left: '8px',
    cursor: 'pointer',
  }
});
export const Form = styled('form', {
  marginTop: '1rem',
  display: 'flex',
  width: '40vw',
  borderRadius: '.5rem',
  backgroundColor: '$gray700',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '5rem 3rem',
  gap: '1rem',
  'input': {
    padding: '1rem',
    width: '100%',
    fontSize: '$md',
    borderRadius: '.5rem',
    backgroundColor: '$gray400',
    color: '$gray100',
    '&::placeholder': {
      color: '$gray100',
    },
    '&#file': {
      display: 'none',
    }
  },
  'button': {
    border: '1px solid $purple100',
    color: '$purple100',
    padding: '1rem',
    borderRadius: '.5rem',
    fontWeight: 'bold',
    fontSize: '$md',
    lineHeight: '$base',
    transition: 'all linear .1s',
    '&:hover': {
      backgroundColor: '$purple100',
      color: '$gray100',
    }
  }
});

export const SelectImage = styled('div', {
    padding: '1rem',
    fontSize: '$md',
    borderRadius: '.5rem',
    border: '1px solid $gray400',
    color: '$gray100',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background .1s linear',
    width: '100%',
    'span': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    '&:hover': {
      backgroundColor: '$gray400',
    }
})