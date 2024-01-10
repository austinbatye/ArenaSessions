import { FunctionComponent } from 'react';

import { Character } from '@/models';
import { capitalizeOnlyFirstLetter, getClassColor } from '@/utils';
import styles from './Character.module.css';
import { IconButton } from '@fluentui/react';
/**
 * Props for the Character menu component
 */
export interface CharacterProps {
  character: Character;

  deleteCharacter: (id: number) => void;
}

/**
 * Component responsible for rendering details for a single character
 */
const Character: FunctionComponent<CharacterProps> = (props) => {
  const { character, deleteCharacter } = props;

  if (
    character.name == null ||
    character.class == null ||
    character.spec == null
  ) {
    return null;
  }

  return (
    <div className={styles.main}>
      <div>
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
      <IconButton
        className={styles.delete}
        styles={{
          icon: { color: '#FFFF00' },
          iconHovered: {
            backgroundColor: '',
            color: '#FF4700',
          },
        }}
        iconProps={{ iconName: 'Delete' }}
        onClick={() => character.id && deleteCharacter(character.id)}
      />
    </div>
  );
};

export default Character;
