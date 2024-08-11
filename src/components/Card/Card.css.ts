import { style } from '@vanilla-extract/css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  textAlign: 'center',
});

export const cardImageContainer = style({
  width: '100%',
  position: 'relative',
  paddingTop: '66.67%', // 3:2 aspect ratio (height is 2/3 of the width)
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
  padding: '10px',
  margin: '0',
  fontSize: '14px',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
