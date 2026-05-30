import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import PhoneLayout from '../../components/templates/PhoneLayout/PhoneLayout';
import CategoryCard from '../../components/molecules/CategoryCard/CategoryCard';
import { Icon } from '@iconify/react';

const linearIcons = {
  nature: <Icon icon="lucide:leaf" width="18" height="18" />,
  science: <Icon icon="lucide:lightbulb" width="18" height="18" />,
  story: <Icon icon="lucide:book-open" width="18" height="18" />,
  technologies: <Icon icon="lucide:smartphone" width="18" height="18" />,
  art: <Icon icon="lucide:brush" width="18" height="18" />
};

const cats = [
  { id: 'nature', title: 'Природа' },
  { id: 'science', title: 'Наука' },
  { id: 'story', title: 'История' },
  { id: 'technologies', title: 'Технологии' },
  { id: 'art', title: 'Искусство' }
];

export default function CategoriesPage() {
  const { setCurrentScreen, setSelectedCategory } = useContext(AppContext);

  return (
    <PhoneLayout title="Category">
      <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: 'space-evenly' }}>
        {cats.map(c => (
          <CategoryCard 
            key={c.id} 
            title={c.title} 
            icon={linearIcons[c.id]} 
            onClick={() => {
              setSelectedCategory(c);
              setCurrentScreen('articles');
            }} 
          />
        ))}
      </div>
    </PhoneLayout>
  );
}