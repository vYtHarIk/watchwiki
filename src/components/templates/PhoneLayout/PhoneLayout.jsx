import React, { useRef, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import StatusBar from '../../atoms/StatusBar/StatusBar';
import BottomBar from '../../atoms/BottomBar/BottomBar';
import styles from './PhoneLayout.module.scss';

export default function PhoneLayout({ children, title }) {
  const { currentScreen, setCurrentScreen } = useContext(AppContext);
  const dragStart = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    if (currentScreen === 'menu') return;
    dragStart.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const dragDistance = dragStart.current - e.clientX;

    if (dragDistance > 70) {
      isDragging.current = false;
      if (currentScreen === 'articles') {
        setCurrentScreen('categories');
      } else if (currentScreen === 'categories' || currentScreen === 'about') {
        setCurrentScreen('menu');
      }
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div 
      className={styles.phone}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <StatusBar title={title} />
      <div className={styles.content}>{children}</div>
      <BottomBar />
    </div>
  );
}