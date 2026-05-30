import React from 'react';
import styles from './CategoryCard.module.scss';

export default function CategoryCard({ title, icon, onClick }) {
  return (
    <button className={styles.card} onClick={onClick}>
      <span className={styles.icon}>{icon}</span>
      {title}
    </button>
  );
}