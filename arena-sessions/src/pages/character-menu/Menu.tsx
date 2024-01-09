'use client';
import { FunctionComponent } from 'react';

import { useCharacters } from '@/hooks/useCharacters';
import Character from './Character';
import styles from './Menu.module.css';

/**
 * Component responsible for displaying the character menu on the right side of the screen
 */
const Menu: FunctionComponent = () => {
  const { isLoading, characters } = useCharacters();

  if (isLoading) {
    return <></>;
  }

  if (characters.length === 0) {
    return <>Create new character</>;
  }

  return (
    <div className={styles.main}>
      {characters.map((char) => (
        <Character character={char} />
      ))}
    </div>
  );
};

export default Menu;
