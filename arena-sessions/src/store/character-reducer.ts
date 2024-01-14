import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState } from './store';

export interface CharacterState {
  selectedCharacter: string | null;
}

// Initial state
const initialState: CharacterState = {
  selectedCharacter: null,
};

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,
  reducers: {
    clearCharacterSelection: (state: CharacterState) => {
      state.selectedCharacter = null;
    },
    selectCharacter: (
      state: CharacterState,
      action: PayloadAction<string>
    ) => {
      state.selectedCharacter = action.payload;
    },
  },
});

// Action creators
export const { clearCharacterSelection, selectCharacter } =
  characterSlice.actions;

// Selectors
export const selectSelectedCharacter = (state: AppState) =>
  state.character.selectedCharacter;
