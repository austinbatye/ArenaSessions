import { FunctionComponent } from 'react';

import styles from './PageHeader.module.css';

const PageHeader: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>Arena Sessions</div>
      <div className={styles.header}>Austin Batye</div>
    </div>
  );
};

export default PageHeader;
