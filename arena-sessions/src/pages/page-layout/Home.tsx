import { FunctionComponent } from 'react';

import PageHeader from './PageHeader';
import PageContent from './PageContent';
import styles from './Home.module.css';

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <PageHeader />
      <PageContent />
    </div>
  );
};

export default HomePage;
