import { FunctionComponent } from 'react';

import CharacterMenu from '../character-menu/CharacterMenu';
import styles from './PageContent.module.css';
import Matches from '../matches/Matches';

/**
 * Component responsible for rendering the main page content
 */
const PageContent: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <Matches />
      <CharacterMenu />
    </div>
  );
};

export default PageContent;
