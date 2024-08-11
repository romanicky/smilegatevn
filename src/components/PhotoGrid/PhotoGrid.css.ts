import { style } from '@vanilla-extract/css';

export const mainTitle = style({
  display: 'flex',
  marginTop: '5rem',
  marginLeft: '1.25rem',
  fontWeight: 'bold',
  fontSize: '1.5rem'
})

export const photoGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(12.5rem, 1fr))',
  gap: '1.25rem',
  padding: '1.25rem',
  justifyItems: 'center',

  '@media': {
    '(min-width: 30rem) and (max-width: 60rem)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(9.375rem, 1fr))',
    },
    '(min-width: 60rem)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(15.625rem, 1fr))',
    },
  },
});

