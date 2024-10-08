import React from 'react';
import * as styles from './Card.css';

export interface CardData {
  imageSrc: string;
  title: string;
  type: number;
}

export const Card: React.FC<CardData> = ({ imageSrc, title, type }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={imageSrc} alt={title} className={styles.cardImage} />
      </div>
      <p className={styles.cardTitle} title={title}>
        {type} {title}
      </p>
    </div>
  );
};
