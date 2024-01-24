import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState } from './store';
import { classSpecs } from '@/utils';
import { ArenaMaps } from '@/utils/ArenaMaps';

export interface Match {
  id: string;
  charId: string;
  isWin: boolean;
  map: string;
  team: string[];
  enemy: string[];
}

// Interface for the reducer's state
export interface MatchesState {
  matches: Match[];
}

// Initial state
const initialState: MatchesState = {
  matches: [],
};

export const createMockMatches =
  (spec: string) => async (dispatch: any) => {
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
          spec,
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

    dispatch(createMatches(matches));
  };

export const matchSlice = createSlice({
  name: 'matchSlice',
  initialState,
  reducers: {
    createMatch: (
      state: MatchesState,
      action: PayloadAction<Match>
    ) => {
      const updatedMatches = [...state.matches, action.payload];
      state.matches = updatedMatches;
    },
    createMatches: (
      state: MatchesState,
      action: PayloadAction<Match[]>
    ) => {
      state.matches = [...state.matches, ...action.payload];
    },
    deleteMatch: (
      state: MatchesState,
      action: PayloadAction<Match>
    ) => {
      const updatedMatches = state.matches.filter(
        (c) => c.id !== action.payload.id
      );
      state.matches = updatedMatches;
    },
    deleteMatches: (state: MatchesState) => {
      state.matches = [];
    },
  },
});

// Action creators
export const {
  createMatch,
  createMatches,
  deleteMatch,
  deleteMatches,
} = matchSlice.actions;

// Selectors
export const selectMatches = (state: AppState) =>
  state.matches.matches;
