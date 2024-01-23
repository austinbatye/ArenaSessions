'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useCharacters } from '@/hooks/useCharacters';
import Character from './Character';
import CreateCharacterDialog from './dialogs/CreateCharacterDialog';
import StyledButton from '@/tools/StyledButton';
import { CreateCharacterRequest } from '../api/characters/create';
import {
  AppDispatch,
  createCharacter,
  deleteCharacter,
  selectCharacters,
  selectSelectedCharacter,
} from '@/store';
import DeleteCharacterDialog from './dialogs/DeleteCharacterDialog';
import styles from './CharacterMenu.module.css';
import { Character as CharModel } from '@/models';

/**
 * Component responsible for displaying the character menu on the right side of the screen
 */
const CharacterMenu: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const characters = useSelector(selectCharacters);
  const selectedCharacter = useSelector(selectSelectedCharacter);

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] =
    useState<boolean>(false);

  useEffect(() => {
    setShowCreateDialog(false);
    setShowDeleteDialog(false);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.header}>Characters</div>
      {getMainContent()}
      <div className={styles.footer}>
        <StyledButton
          isPrimary={true}
          onClick={() => setShowCreateDialog(true)}
          text={'Create new character'}
          className={styles.createButton}
        />
      </div>

      <CreateCharacterDialog
        isVisible={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        onSubmit={(char) => handleCreate(char)}
      />

      <DeleteCharacterDialog
        isVisible={showDeleteDialog && selectedCharacter != null}
        onClose={() => setShowDeleteDialog(false)}
        onSubmit={() => handleDelete()}
      />
    </div>
  );

  function getMainContent(): JSX.Element {
    let main = null;

    if (characters.length === 0) {
      main = <div>Create new character</div>;
    } else {
      main = characters.map((char) => (
        <div key={char.id}>
          <Character
            character={char}
            deleteCharacter={() => setShowDeleteDialog(true)}
            selectedId={selectedCharacter?.id.toString()}
          />
        </div>
      ));
    }

    return <div className={styles.list}>{main}</div>;
  }

  function handleCreate(char: CreateCharacterRequest) {
    const character: CharModel = {
      id: `${characters.length}`,
      name: char.name,
      class: char.class,
      spec: char.spec,
    };
    setShowCreateDialog(false);
    dispatch(createCharacter(character));
  }

  function handleDelete() {
    if (selectedCharacter != null) {
      dispatch(deleteCharacter(selectedCharacter));
      setShowDeleteDialog(false);
    }
  }
};

export default CharacterMenu;
