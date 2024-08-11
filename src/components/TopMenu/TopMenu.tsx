import React from 'react';
import * as styles from './TopMenu.css';

interface TopMenuProps {
  setTypeFilter: (type: number | null) => void;
}

const TopMenu: React.FC<TopMenuProps> = ({ setTypeFilter }) => {
  return (
    <div className={styles.topMenu}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src="path_to_logo_image"
            alt="Logo"
            className={styles.logoImage}
          />
          <span className={styles.title}>Your App</span>
        </div>
        <div className={styles.menuButtons}>
          <button className={styles.button} onClick={() => setTypeFilter(1)}>
            Type 1
          </button>
          <button className={styles.button} onClick={() => setTypeFilter(2)}>
            Type 2
          </button>
          <button className={styles.button} onClick={() => setTypeFilter(3)}>
            Type 3
          </button>
          <button className={styles.button} onClick={() => setTypeFilter(null)}>
            All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
