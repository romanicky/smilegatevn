import React from 'react';
import { Card } from '../Card/Card';
import * as styles from './PhotoGrid.css';

interface Photo {
  imageSrc: string;
  title: string;
  type: number;
}

const photoData: Photo[] = [
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 2,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 1,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    type: 3,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    type: 2,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    type: 1,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title: 'Curabitur pretium tincidunt lacus.',
    type: 3,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title: 'Nulla facilisi. Integer lacinia sollicitudin massa.',
    type: 2,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title:
      'Suspendisse potenti. Morbi vel magna in felis facilisis scelerisque.',
    type: 1,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title: 'Fusce vehicula tortor eget neque posuere scelerisque.',
    type: 3,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title:
      'Vestibulum fringilla felis a ante sollicitudin, at tempor turpis aliquam.',
    type: 2,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title:
      'Praesent ac vehicula libero. Duis luctus, sapien eget scelerisque commodo, erat est posuere ligula, ut faucibus nisi lacus a nisl.',
    type: 1,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    type: 3,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title: 'Aliquam erat volutpat. Suspendisse potenti.',
    type: 2,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title:
      'Phasellus tincidunt nunc eget libero sollicitudin, nec gravida ligula pretium.',
    type: 1,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
    type: 3,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title:
      'Nullam faucibus lorem ut ex dapibus, sit amet sodales odio aliquet.',
    type: 2,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title: 'Cras luctus nisl vel risus elementum, a commodo lorem elementum.',
    type: 1,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title: 'Maecenas nec ligula sit amet orci tincidunt hendrerit.',
    type: 3,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title: 'Aenean in libero nec eros dapibus tincidunt.',
    type: 2,
  },
  {
    imageSrc: 'https://i.imgur.com/2MM9Jqo.png',
    title:
      'Morbi euismod eros at dolor feugiat, eget vehicula felis pellentesque.',
    type: 1,
  },
  {
    imageSrc: 'https://i.imgur.com/unmma82.jpeg',
    title: 'Duis id libero ut ex consectetur malesuada.',
    type: 3,
  },
];

interface PhotoGridProps {
  cards: CardData[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ cards }) => {
  return (
    <div className={styles.photoGrid}>
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          type={card.type}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
