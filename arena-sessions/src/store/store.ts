import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { characterSlice, matchSlice } from '.';

const rootReducer = combineReducers({
  character: characterSlice.reducer,
  matches: matchSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;

// get app state and dispatch types from the store itself
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
