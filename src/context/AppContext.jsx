import React, { createContext, useState, useEffect } from 'react';
import articlesData from '../data/articles.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('menu');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const featuredArticle = articlesData.find(a => a.id === 1);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <AppContext.Provider value={{
      currentScreen, setCurrentScreen,
      selectedCategory, setSelectedCategory,
      activeArticle, setActiveArticle,
      favorites, toggleFavorite,
      featuredArticle,
      articles: articlesData
    }}>
      {children}
    </AppContext.Provider>
  );
};