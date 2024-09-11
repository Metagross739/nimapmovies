import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	moviename: '',
	isSearched: false,
};
const searchSlice = createSlice({
	name: 'searchmovie',
	initialState,
	reducers: {
		setMovieName(state, action) {
			state.moviename = action.payload;
		},
		setIsSearched(state, action) {
			state.isSearched = action.payload;
		},
	},
});

export const { setMovieName, setIsSearched } = searchSlice.actions;

export default searchSlice.reducer;
