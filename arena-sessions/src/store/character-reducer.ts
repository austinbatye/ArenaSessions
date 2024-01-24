import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState } from './store';
import { Character } from '@/models';
import { capitalizeOnlyFirstLetter } from '@/utils';
import { createMockMatches, deleteMatches } from '.';

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

export const createCharacterDispatch =
  (character: Character) => async (dispatch: any) => {
    dispatch(createCharacter(character));
    dispatch(createMockMatches(character.spec));
  };

export const deleteCharacterDispatch =
  (character: Character) => async (dispatch: any) => {
    dispatch(deleteCharacter(character));
    dispatch(deleteMatches());
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
      const formattedCharacter = {
        ...action.payload,
        name: capitalizeOnlyFirstLetter(action.payload.name),
      };
      const updatedCharacters = [
        ...state.characters,
        formattedCharacter,
      ];
      state.characters = updatedCharacters;
      state.selectedCharacter = formattedCharacter;
    },
    deleteCharacter: (
      state: CharacterState,
      action: PayloadAction<Character>
    ) => {
      const updatedCharacters = state.characters.filter(
        (c) => c.id !== action.payload.id
      );
      const newSelectedCharacter =
        state.selectedCharacter?.id === action.payload.id
          ? null
          : state.selectedCharacter;
      state.characters = updatedCharacters;
      state.selectedCharacter = newSelectedCharacter;
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
