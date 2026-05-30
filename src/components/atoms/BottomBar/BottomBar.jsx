import React from 'react';
import styles from './BottomBar.module.scss';

export default function BottomBar() {
  return (
    <div className={styles.bottomBarContainer}>
      <div className={styles.innerLine} />
      <span className={styles.text}>15 статей в базе</span>
    </div>
  );
}