import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { characterSlice } from '.';

const rootReducer = combineReducers({
  character: characterSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;

// get app state and dispatch types from the store itself
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
