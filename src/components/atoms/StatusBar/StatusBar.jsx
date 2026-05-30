import React from 'react';
import { Icon } from '@iconify/react';
import styles from './StatusBar.module.scss';

export default function StatusBar({ title = "IWiki" }) {
  return (
    <div className={styles.statusBar}>
      <span className={styles.time}>4:00</span>
      <span className={styles.title}>{title}</span>
      <div className={styles.icons}>
        <Icon icon="lucide:wifi" width="30" height="20"/>
        <Icon icon="lucide:battery" width="30" height="20"/>
      </div>
    </div>
  );
}