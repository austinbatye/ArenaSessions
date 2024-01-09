'use client';
import { useEffect } from 'react';

import styles from './PageHeader.module.css';

export default function PageHeader() {
  useEffect(() => {
    document.title = 'WOW Arena Sessions';
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.header}>Arena Sessions</div>
      <div className={styles.header}>Austin Batye</div>
    </div>
  );
}
