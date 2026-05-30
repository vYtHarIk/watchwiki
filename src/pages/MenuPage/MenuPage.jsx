import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import PhoneLayout from '../../components/templates/PhoneLayout/PhoneLayout';
import FeaturedCard from '../../components/molecules/FeaturedCard/FeaturedCard';
import ArticleModal from '../../components/organisms/ArticleModal/ArticleModal';
import styles from './MenuPage.module.scss';

export default function MenuPage() {
  const { setCurrentScreen, featuredArticle } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PhoneLayout title="IWiki">
      <div className={styles.menuWrapper}>
        <FeaturedCard article={featuredArticle} onClick={() => setModalOpen(true)} />
        
        <button className={styles.menuBtn} onClick={() => setCurrentScreen('about')}>
          О системе
        </button>
        <button className={styles.menuBtn} onClick={() => setCurrentScreen('categories')}>
          Категория
        </button>
      </div>

      {modalOpen && <ArticleModal article={featuredArticle} onClose={() => setModalOpen(false)} />}
    </PhoneLayout>
  );
}