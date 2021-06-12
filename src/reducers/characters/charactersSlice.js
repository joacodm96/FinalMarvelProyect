import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacters } from '../../api/characters';

const initialState = {
  charactersList: [],
  loading: true,
};

export const getRandomCharacters = createAsyncThunk(
  'characters/getRandomCharacters',
  async () => {
    const charactersList = await getCharacters();
    // Shuffle array
    const shuffled = charactersList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);;
  }
);



export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRandomCharacters.pending, (state) => {
        state.loading = true
      })
      .addCase(getRandomCharacters.fulfilled, (state, action) => {
        state.loading = false
        state.charactersList = action.payload;
      });
  },
});


export const selectCharacters = (state) => state.characters;


export default charactersSlice.reducer;
