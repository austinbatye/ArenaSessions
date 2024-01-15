'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useCharacters } from '@/hooks/useCharacters';
import Character from './Character';
import CreateCharacterDialog from './dialogs/CreateCharacterDialog';
import StyledButton from '@/tools/StyledButton';
import { CreateCharacterRequest } from '../api/characters/create';
import { AppDispatch, selectSelectedCharacter } from '@/store';
import DeleteCharacterDialog from './dialogs/DeleteCharacterDialog';
import styles from './CharacterMenu.module.css';

/**
 * Component responsible for displaying the character menu on the right side of the screen
 */
const CharacterMenu: FunctionComponent = () => {
  const selectedCharacter = useSelector(selectSelectedCharacter);

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] =
    useState<boolean>(false);

  // Characters hook
  const { isLoading, characters, createCharacter, deleteCharacter } =
    useCharacters();

  useEffect(() => {
    setShowCreateDialog(false);
    setShowDeleteDialog(false);
  }, []);

  if (isLoading) {
    return <div className={styles.main} />;
  }

  if (characters.length === 0) {
    return <div className={styles.main}>Create new character</div>;
  }

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

    if (!isLoading) {
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
    }

    return <div className={styles.list}>{main}</div>;
  }

  async function handleCreate(char: CreateCharacterRequest) {
    setShowCreateDialog(false);
    await createCharacter(char);
  }

  async function handleDelete() {
    if (selectedCharacter != null) {
      await deleteCharacter(selectedCharacter.id);
      setShowDeleteDialog(false);
    }
  }
};

export default CharacterMenu;
