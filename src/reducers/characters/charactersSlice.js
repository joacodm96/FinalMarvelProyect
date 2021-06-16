import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCharacters, fetchComics, fetchCharactersComicsById } from "../../api/fetchData"

// const statement
const initialState = {
	charactersList: [],
	comicsList: [],
	selectedCharacter: {},
	loading: true,
};

// Random search
export const fetchRandomCharacters = createAsyncThunk(
	'characters/fetchRandomCharacters',
	async () => {
		const charactersList = await fetchCharacters();
		const mix = charactersList.sort(() => 0.5 - Math.random()); // mix the characters list to get a "random search" (8 ch)
		return mix.slice(0, 8);
	}
);

export const searchCharactersAndComics = createAsyncThunk(
	'characters/searchCharacters',
	async (searchOf) => {
		const charactersList = searchOf.character ? await fetchCharacters(searchOf.character) : [];
		const comicsList = searchOf.comic ? await fetchComics(searchOf.comic) : [];

		return {charactersList, comicsList};
	}
);

export const fetchCharacterComics = createAsyncThunk(
	'characters/fetchCharacterComics',
	async (character) => {
		const characterData = await fetchCharactersComicsById(character.id);

		return characterData;
	}
);

// The collection of redux actions
export const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	extraReducers: {
		[fetchRandomCharacters.pending]: (state, action) => {
			state.loading = true
			state.charactersList = []
		},
		[fetchRandomCharacters.fulfilled]: (state, action) => {
			state.loading = false
			state.charactersList = action.payload
		},
		[searchCharactersAndComics.pending]: (state, action) => {
			state.loading = true
		},
		[searchCharactersAndComics.fulfilled]: (state, action) => {
			state.loading = false
			state.charactersList = [...action.payload.charactersList]
			state.comicsList = [...action.payload.comicsList]
		},
		[fetchCharacterComics.pending]: (state, action) => {
			state.loading = true
			state.selectedCharacter = {
				...action.meta.arg,
			}
		},
		[fetchCharacterComics.fulfilled]: (state, action) => {
			state.loading = false
			state.selectedCharacter = {
				...state.selectedCharacter,
				comicsList: action.payload
			}
		},
	},
})

export default charactersSlice.reducer;

