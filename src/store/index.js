import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../reducers/characters/charactersSlice';
import comicDetails from '../reducers/comicDetails/comicDetailsSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    comicDetails: comicDetails,

  },
});