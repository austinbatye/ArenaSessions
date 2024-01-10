import { FunctionComponent } from 'react';

import { Character } from '@/models';
import { capitalizeOnlyFirstLetter, getClassColor } from '@/utils';
import styles from './Character.module.css';

/**
 * Props for the Character menu component
 */
export interface CharacterProps {
  character: Character;
}

/**
 * Component responsible for rendering details for a single character
 */
const Character: FunctionComponent<CharacterProps> = (props) => {
  const { character } = props;

  if (
    character.name == null ||
    character.class == null ||
    character.spec == null
  ) {
    return null;
  }

  return (
    <div className={styles.main}>
      <div className={styles.name}>
        {capitalizeOnlyFirstLetter(character.name)}
      </div>
      <div>
        Level 70{' '}
        <span style={{ color: getClassColor(character.class) }}>
          {capitalizeOnlyFirstLetter(
            `${character.spec} ${character.class}`
          )}
        </span>
      </div>
    </div>
  );
};

export default Character;
