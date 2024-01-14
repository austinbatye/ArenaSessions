import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState } from './store';
import { Character } from '@/models';

// Interface for the reducer's state
export interface CharacterState {
  selectedCharacter: Character | null;
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
      action: PayloadAction<Character>
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
