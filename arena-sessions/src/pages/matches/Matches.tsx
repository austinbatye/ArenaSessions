'use client';
import { FunctionComponent } from 'react';

import { selectMatches, selectSelectedCharacter } from '@/store';
import { capitalizeOnlyFirstLetter, getClassColor } from '@/utils';
import MatchesList from './MatchesList';
import styles from './Matches.module.css';
import { useSelector } from 'react-redux';

const Matches: FunctionComponent = () => {
  const selectedCharacter = useSelector(selectSelectedCharacter);
  const matches = useSelector(selectMatches);

  if (!selectedCharacter) {
    return (
      <div className={styles.main}>
        <div className={styles.select}>
          Select a character to view and add matches
        </div>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        Matches -
        <span
          style={{
            color: getClassColor(selectedCharacter?.class ?? ''),
          }}
        >
          {selectedCharacter &&
            `${capitalizeOnlyFirstLetter(selectedCharacter.name)}`}
        </span>
      </div>
      <div className={styles.list}>
        <MatchesList matches={matches} />
      </div>
    </div>
  );
};

export default Matches;
