import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState } from './store';
import { Character } from '@/models';

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
    deleteMatch: (
      state: MatchesState,
      action: PayloadAction<Match>
    ) => {
      const updatedMatches = state.matches.filter(
        (c) => c.id !== action.payload.id
      );
      state.matches = updatedMatches;
    },
  },
});

// Action creators
export const { createMatch, deleteMatch } = matchSlice.actions;

// Selectors
export const selectMatches = (state: AppState) =>
  state.matches.matches;
