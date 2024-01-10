import { FunctionComponent } from 'react';

import CharacterMenu from '../character-menu/CharacterMenu';
import styles from './PageContent.module.css';

/**
 * Component responsible for rendering the main page content
 */
const PageContent: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <div>Page Content</div>
      <CharacterMenu />
    </div>
  );
};

export default PageContent;
