import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCharacters, fetchComics, fetchCharactersComicsById } from "../../api/fetchData"

// const statement
const initialState = {
	charactersList: [],
	comicsList: [],
	selectedCharacter: {},
	favoritesCharacters: localStorage.getItem("favoritesCharacters") ?
		JSON.parse(localStorage.getItem("favoritesCharacters")) : [],
	loading: true,
};

// Random search
export const fetchRandomCharacters = createAsyncThunk(
	'characters/fetchRandomCharacters',
	async () => {

		const generateLetters = () => {
			const alphabet = "abcdefghijklmnopqrstuvwxyz"

			const letter = alphabet[Math.floor(Math.random() * alphabet.length)]
			
			return letter;
		}
		const charactersList = await fetchCharacters(generateLetters());

		return charactersList.slice(0, 8);
	}
);

export const searchCharactersAndComics = createAsyncThunk(
	'characters/searchCharacters',
	async (searchOf) => {
		const charactersList = searchOf.character ? await fetchCharacters(searchOf.character) : [];
		const comicsList = searchOf.comic ? await fetchComics(searchOf.comic) : [];

		return { charactersList, comicsList };
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
	reducers: {
		updateFavoriteList: (state, action) => {
			let newFavoriteList = []
			if (state.favoritesCharacters.find((favCharacter) => favCharacter.id === action.payload.id)) {
				newFavoriteList = state.favoritesCharacters.filter((favCharacter) => {

					return favCharacter.id !== action.payload.id
				})
			} else {
				newFavoriteList = [
					...state.favoritesCharacters,
					action.payload,
				]
			}
		
			state.favoritesCharacters = newFavoriteList
			localStorage.setItem("favoritesCharacters", JSON.stringify(newFavoriteList))
		}

	},
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

export const { updateFavoriteList } = charactersSlice.actions;

export default charactersSlice.reducer;

