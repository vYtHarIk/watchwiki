import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import PhoneLayout from '../../components/templates/PhoneLayout/PhoneLayout';
import CategoryCard from '../../components/molecules/CategoryCard/CategoryCard';
import ArticleModal from '../../components/organisms/ArticleModal/ArticleModal';

export default function ArticleListPage() {
  const { selectedCategory, articles } = useContext(AppContext);
  const [activeArticle, setActiveArticle] = useState(null);

  const filtered = articles.filter(a => a.category === selectedCategory?.id);


  return (
    <PhoneLayout title={selectedCategory?.id || "Список"}>
      <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-evenly' }}>
        {filtered.map(art => (
          <CategoryCard 
            key={art.id} 
            title={art.title} 
            onClick={() => setActiveArticle(art)} 
          />
        ))}
      </div>

      {activeArticle && <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />}
    </PhoneLayout>
  );
}