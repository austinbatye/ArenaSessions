import { FunctionComponent } from 'react';

import Menu from '../character-menu/Menu';
import styles from './PageContent.module.css';

/**
 * Component responsible for rendering the main page content
 */
const PageContent: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <div>Page Content</div>
      <Menu />
    </div>
  );
};

export default PageContent;
