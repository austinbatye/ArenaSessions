import { FunctionComponent } from 'react';

import PageHeader from './PageHeader';
import PageContent from './PageContent';
import styles from './Home.module.css';

/**
 * Component containing the header and content components as a homepage
 */
const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <PageHeader />
      <PageContent />
    </div>
  );
};

export default HomePage;
