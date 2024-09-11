import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/Movies/SearchMovies/searchSlice';

const store = configureStore({
	reducer: {
		search: searchReducer,
	},
});
export default store;
