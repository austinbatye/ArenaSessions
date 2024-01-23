import { FunctionComponent } from 'react';
import { Paper, TableContainer } from '@mui/material';

import styles from './Matches.module.css';
import { Match } from '@/store';
import { ArenaMaps } from '@/utils/ArenaMaps';
import { classSpecs } from '@/utils';
import MatchesList from './MatchesList';

const Matches: FunctionComponent = () => {
  const matches = createMockMatches();
  return (
    <div className={styles.main}>
      <div className={styles.header}>Matches</div>
      <div className={styles.list}>
        <MatchesList matches={matches} />
      </div>
    </div>
  );

  function createMockMatches(): Match[] {
    let matches: Match[] = [];
    const specs = Array.from(classSpecs.values())
      .map((x) => x)
      .flat();
    for (let i = 0; i < 20; i++) {
      const map = Array.from(ArenaMaps.values())[
        Math.floor(
          Math.random() * Array.from(ArenaMaps.values()).length
        )
      ];
      matches.push({
        id: `${i}`,
        charId: `0`,
        isWin: Math.floor(Math.random() * 100) % 2 === 0,
        map,
        team: [
          specs[Math.floor(Math.random() * specs.length)],
          specs[Math.floor(Math.random() * specs.length)],
        ],
        enemy: [
          specs[Math.floor(Math.random() * specs.length)],
          specs[Math.floor(Math.random() * specs.length)],
          specs[Math.floor(Math.random() * specs.length)],
        ],
      });
    }

    return matches;
  }
};

export default Matches;
