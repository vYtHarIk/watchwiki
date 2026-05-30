import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import styles from './ArticleModal.module.scss';

export default function ArticleModal({ article, onClose }) {
  const { favorites, toggleFavorite } = useContext(AppContext);
  if (!article) return null;

  const isFav = favorites.includes(article.id);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.body}>{article.text}</div>
        <div className={styles.categoryTag}>Категория: {article.categoryRu}</div>
        
        <div className={styles.footer}>
          <button className={styles.favBtn} onClick={() => toggleFavorite(article.id)}>
            {isFav ? '★' : '☆'}
          </button>
          <button className={styles.okBtn} onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
}