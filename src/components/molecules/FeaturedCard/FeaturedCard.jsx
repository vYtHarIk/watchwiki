import React from 'react';
import styles from './FeaturedCard.module.scss';

export default function FeaturedCard({ article, onClick }) {
  return (
    <div className={styles.glowContainer}>

      
      <div className={styles.card} onClick={onClick}>
        <div className={styles.blueGlowShadow}/>
        <div className={styles.tag}>
          <span className={styles.star}>★</span><p>Избранная статья</p>
        </div>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.preview}>{article.text.substring(0, 91)}...</div>
        <div className={styles.link}>Читать далее →</div>
      </div>
    </div>
  );
}