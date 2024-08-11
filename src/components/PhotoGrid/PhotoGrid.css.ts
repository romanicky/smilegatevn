import { style } from '@vanilla-extract/css';

export const photoGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '20px',
  padding: '20px',
  justifyItems: 'center',
  '@media': {
    'screen and (max-width: 600px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', // More columns on smaller screens
    },
    'screen and (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Fewer columns on larger screens
    },
  },
});
