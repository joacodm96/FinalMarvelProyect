import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../reducers/characters/charactersSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});