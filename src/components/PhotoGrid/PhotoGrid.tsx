import React from 'react';
import { Card, CardData } from '../Card/Card';
import * as styles from './PhotoGrid.css';

interface PhotoGridProps {
  cards: CardData[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ cards }) => {
  return (
    <>
      <div className={styles.mainTitle}>Photo Cards:</div>
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
    </>
  );
};

export default PhotoGrid;
