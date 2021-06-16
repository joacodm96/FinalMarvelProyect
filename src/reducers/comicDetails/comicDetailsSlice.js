import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchComicData } from "../../api/fetchData"

// const statement
const initialState = {
	loading: true,
    comicData: {}
};

export const fetchComicDetails = createAsyncThunk(
	'comicDetails/fetchComicDetails',
	async (id) => {
		const comicData = await fetchComicData(id);

        return comicData;
	}
);

// Redux actions
export const comicDetailsSlice = createSlice({
	name: 'comicDetails',
	initialState,
	extraReducers: {
		[fetchComicDetails.pending]: (state, action) => {
			state.loading = true
		},
		[fetchComicDetails.fulfilled]: (state, action) => {
			state.loading = false
			state.comicData = action.payload
		},
	},
})

export default comicDetailsSlice.reducer;