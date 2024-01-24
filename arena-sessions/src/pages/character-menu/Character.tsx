import { FunctionComponent } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';

import { Character as CharacterModel } from '@/models';
import { getClassColor, getDeDupedSpec } from '@/utils';
import { IconButton } from '@fluentui/react';
import { AppDispatch, selectCharacter } from '@/store';
import styles from './Character.module.css';
/**
 * Props for the Character menu component
 */
export interface CharacterProps {
  character: CharacterModel;
  selectedId?: string;

  deleteCharacter: (id: string) => void;
}

/**
 * Component responsible for rendering details for a single character
 */
const Character: FunctionComponent<CharacterProps> = (props) => {
  const { character, selectedId, deleteCharacter } = props;
  const dispatch = useDispatch<AppDispatch>();

  const isSelected = selectedId === character.id.toString();

  if (
    character.name == null ||
    character.class == null ||
    character.spec == null
  ) {
    return null;
  }

  return (
    <div
      className={cx(styles.main, isSelected ? styles.selected : '')}
      onClick={() =>
        !isSelected && dispatch(selectCharacter(character))
      }
    >
      <div>
        <div className={styles.name}>{character.name}</div>
        <div>
          Level 70{' '}
          <span style={{ color: getClassColor(character.class) }}>
            {`${getDeDupedSpec(character.spec)} ${character.class}`}
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
