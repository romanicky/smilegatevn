import { style } from '@vanilla-extract/css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: '0.063rem solid #ccc',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  boxShadow: '0 0.125 0.5rem rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  textAlign: 'center',
});

export const cardImageContainer = style({
  width: '100%',
  position: 'relative',
  paddingTop: '66.67%',
  overflow: 'hidden',
});

export const cardImage = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const cardTitle = style({
  padding: '0.625rem',
  margin: '0',
  fontSize: '1rem',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
