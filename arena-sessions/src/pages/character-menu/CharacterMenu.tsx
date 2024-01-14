'use client';
import { FunctionComponent, useEffect, useState } from 'react';

import { useCharacters } from '@/hooks/useCharacters';
import Character from './Character';
import CreateCharacterDialog from './dialogs/CreateCharacterDialog';
import StyledButton from '@/tools/StyledButton';
import * as ModelCharacter from '@/models';
import styles from './CharacterMenu.module.css';

/**
 * Component responsible for displaying the character menu on the right side of the screen
 */
const CharacterMenu: FunctionComponent = () => {
  const { isLoading, characters, createCharacter, deleteCharacter } =
    useCharacters();
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  useEffect(() => {
    setShowCreateDialog(false);
  }, []);

  if (isLoading) {
    return <div className={styles.main} />;
  }

  if (characters.length === 0) {
    return <div className={styles.main}>Create new character</div>;
  }

  return (
    <div className={styles.main}>
      {getMainContent()}
      <StyledButton
        isPrimary={true}
        onClick={() => setShowCreateDialog(true)}
        text={'Create new character'}
        className={styles.createButton}
      />

      <CreateCharacterDialog
        isVisible={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        onSubmit={(char) => handleCreate(char)}
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
              deleteCharacter={deleteCharacter}
            />
          </div>
        ));
      }
    }

    return <div>{main}</div>;
  }

  async function handleCreate(char: ModelCharacter.Character) {
    setShowCreateDialog(false);
    await createCharacter(char);
  }
};

export default CharacterMenu;
