import { style } from '@vanilla-extract/css';

export const topMenu = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.625rem 0', // 10px/16px = 0.625rem
  backgroundColor: '#1abc9c',
  color: '#fff',
  boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)', // 2px and 4px converted
  zIndex: 1000,
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '1.25rem', // 20px/16px = 1.25rem
});

export const logoImage = style({
  marginRight: '0.625rem', // 10px/16px = 0.625rem
});

export const title = style({
  fontSize: '1.25rem', // 20px/16px = 1.25rem
  fontWeight: 'bold',
});

export const menuButtons = style({
  display: 'flex',
  gap: '0.625rem', // 10px/16px = 0.625rem
  marginRight: '1.25rem', // 20px/16px = 1.25rem
});

export const button = style({
  padding: '0.5rem 1rem', // 8px/16px = 0.5rem, 16px/16px = 1rem
  border: '1px solid #fff',
  borderRadius: '0.25rem', // 4px/16px = 0.25rem
  backgroundColor: 'transparent',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '0.875rem', // 14px/16px = 0.875rem
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: '#16a085',
  },
});

export const activeButton = style({
  backgroundColor: '#16a085',
  color: '#fff',
  borderColor: '#fff',
});
