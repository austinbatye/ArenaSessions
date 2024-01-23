import { AppDispatch, Match, deleteMatch } from '@/store';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { getClassFromSpec, getDeDupedSpec, specIcons } from '@/utils';

import styles from './MatchesList.module.css';

export interface MatchesListProps {
  matches: Match[];
}

const MatchesList: FunctionComponent<MatchesListProps> = (props) => {
  const { matches } = props;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <TableContainer
      className={styles.main}
      component={Paper}
      style={{ width: '100%' }}
    >
      <Table
        size="small"
        style={{
          width: '100%',
          tableLayout: 'fixed',
        }}
      >
        <TableHead
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: '#1C241D',
          }}
        >
          <TableRow>
            <TableCell
              align="center"
              className={styles.cell}
              style={{ width: '10%', overflowX: 'hidden' }}
            >
              Result
            </TableCell>
            <TableCell
              align="center"
              className={styles.cell}
              style={{ width: '63%' }}
            >
              Compositions
            </TableCell>
            <TableCell
              className={styles.cell}
              align="right"
              style={{ width: '20%' }}
            >
              Arena Map
            </TableCell>
            <TableCell className={styles.cell} align="center">
              X
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createRows(matches).map((r, index) => {
            return (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell
                  align="center"
                  className={
                    r.outcome === 'Won' ? styles.won : styles.lost
                  }
                >
                  {r.outcome}
                </TableCell>
                <TableCell align="center">{r.compositions}</TableCell>
                <TableCell align="right" className={styles.cell}>
                  {r.arena}
                </TableCell>
                <TableCell align="center">{r.x}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );

  function createRows(matchList: Match[]): any[] {
    return matchList.map((m) => {
      const button = (
        <div
          className={styles.delete}
          onClick={() => dispatch(deleteMatch(m))}
        >
          X
        </div>
      );
      return createData(
        m.isWin ? 'Won' : 'Lost',
        renderVersus(m),
        m.map,
        button
      );
    });
  }

  function renderVersus(match: Match): JSX.Element {
    return (
      <div className={styles.versus}>
        {renderTeam(match.team)}
        vs
        {renderTeam(match.enemy)}
      </div>
    );
  }

  function renderTeam(team: string[]): JSX.Element {
    const elements: JSX.Element[] = [];
    team.forEach((t) => {
      elements.push(
        <img
          key={Math.random()}
          className={styles.icon}
          src={specIcons.get(t)}
          title={`${getDeDupedSpec(t)} ${getClassFromSpec(t)}`}
        />
      );
    });
    return (
      <div className={styles.team}>{elements.map((e) => e)}</div>
    );
  }

  function createData(
    outcome: string,
    compositions: JSX.Element,
    arena: string,
    x: JSX.Element
  ) {
    return { outcome, compositions, arena, x };
  }
};

export default MatchesList;
