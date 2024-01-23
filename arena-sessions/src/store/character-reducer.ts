import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState } from './store';
import { Character } from '@/models';

// Interface for the reducer's state
export interface CharacterState {
  characters: Character[];
  selectedCharacter: Character | null;
}

// Initial state
const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
};

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,
  reducers: {
    clearCharacterSelection: (state: CharacterState) => {
      state.selectedCharacter = null;
    },
    createCharacter: (
      state: CharacterState,
      action: PayloadAction<Character>
    ) => {
      const updatedCharacters = [...state.characters, action.payload];
      state.characters = updatedCharacters;
    },
    deleteCharacter: (
      state: CharacterState,
      action: PayloadAction<Character>
    ) => {
      const updatedCharacters = state.characters.filter(
        (c) => c.id !== action.payload.id
      );
      state.characters = updatedCharacters;
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
export const {
  clearCharacterSelection,
  createCharacter,
  deleteCharacter,
  selectCharacter,
} = characterSlice.actions;

// Selectors
export const selectCharacters = (state: AppState) =>
  state.character.characters;
export const selectSelectedCharacter = (state: AppState) =>
  state.character.selectedCharacter;
