import React from 'react';
import * as styles from './TopMenu.css';
import clsx from 'clsx';

interface TopMenuProps {
  setTypeFilter: (type: number | null) => void;
  activeType: number | null;
}

const TopMenu: React.FC<TopMenuProps> = ({ setTypeFilter, activeType }) => {
  return (
    <div className={styles.topMenu}>
      <div className={styles.logoContainer}>
        <img src="https://i.imgur.com/sOCVfKv.png" alt="Logo" className={styles.logoImage} />
        <span className={styles.title}>Thang Tran</span>
      </div>
      <div className={styles.menuButtons}>
        <button className={clsx(styles.button, activeType === 1 && styles.activeButton)} onClick={() => setTypeFilter(1)}>Type 1</button>
        <button className={clsx(styles.button, activeType === 2 && styles.activeButton)} onClick={() => setTypeFilter(2)}>Type 2</button>
        <button className={clsx(styles.button, activeType === 3 && styles.activeButton)} onClick={() => setTypeFilter(3)}>Type 3</button>
        <button className={clsx(styles.button, activeType === null && styles.activeButton)} onClick={() => setTypeFilter(null)}>All</button>
      </div>
    </div>
  );
};

export default TopMenu;
