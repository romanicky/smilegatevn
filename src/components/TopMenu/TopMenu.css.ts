import { style } from '@vanilla-extract/css';

export const topMenu = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0',
  backgroundColor: '#1abc9c', // Use the green color similar to the image
  color: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
});

export const logoImage = style({
  marginRight: '10px',
});

export const title = style({
  fontSize: '20px',
  fontWeight: 'bold',
});

export const menuButtons = style({
  display: 'flex',
  gap: '10px',
  marginRight: '20px',
});

export const button = style({
  padding: '8px 16px',
  border: '1px solid #fff',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '14px',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: '#16a085', // Darker green on hover
  },
});
