import React from 'react';
import { useState } from 'react';
import { setMovieName, setIsSearched } from './searchSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function SearchMovie(props) {
	const movieName = useSelector(state => state.search.moviename);
	const [userInput, setUserInput] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	function handleUserInput(e) {
		e.preventDefault();
		dispatch(setMovieName(userInput));
		dispatch(setIsSearched(true));
		navigate(`/searchedmovie/${userInput}`);
		setUserInput('');
	}
	return (
		<form action="">
			<input
				className="p-2 rounded border border-gray-300 mr-2, ml-2"
				value={userInput}
				type="text"
				onChange={e => setUserInput(e.target.value)}
				placeholder="Search Movie"
			/>
			<button
				className="bg-black text-white p-2 rounded ml-2"
				onClick={handleUserInput}
			>
				Search
			</button>
		</form>
	);
}

export default SearchMovie;
