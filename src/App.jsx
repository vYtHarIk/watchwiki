import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import MenuPage from './pages/MenuPage/MenuPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ArticleListPage from './pages/ArticleListPage/ArticleListPage';
import PhoneLayout from './components/templates/PhoneLayout/PhoneLayout';
import styles from './App.module.scss';

export default function App() {
  const { currentScreen, setCurrentScreen } = useContext(AppContext);

  return (
    <div className={styles.appWrapper}>
      {currentScreen === 'menu' && <MenuPage />}
      {currentScreen === 'categories' && <CategoriesPage />}
      {currentScreen === 'articles' && <ArticleListPage />}
      
      {currentScreen === 'about' && (
        <PhoneLayout title="О системе">
          <div className={styles.aboutPage}>
            <button className={styles.closeAbout} onClick={() => setCurrentScreen('menu')}>×</button>
            <h2>WatchWiki 1.0b</h2>
            <p>iOS Dev Course</p>
            <p>Статей: 15</p>
            <p>Обновлено: 30.05.2026</p>
            <p className={styles.blueText}>watchOS - вики для быстрых справок</p>
            <div className={styles.warning}>
              ПРЕДУПРЕЖДЕНИЕ: ПРИЛОЖЕНИЕ НЕ ЗАКОНЧЕНО, ВОЗМОЖНО ОШИБКИ И НЕ ПОЛНЫЙ ФУНКЦИОНАЛ.<br/>
              Проект в разработке.
            </div>
          </div>
        </PhoneLayout>
      )}
    </div>
  );
}