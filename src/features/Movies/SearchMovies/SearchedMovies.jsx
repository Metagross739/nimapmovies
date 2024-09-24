import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PopularMovie from '../PopularMovies/PopularMovie';
function SearchedMovies(props) {
	const [movieData, setMovieData] = useState([]);
	const movieName = useSelector(state => state.search.moviename);
	const [page, setPageNo] = useState(1);
	const Api_key = `c45a857c193f6302f2b5061c3b85e743`;
	const navigate = useNavigate();
	const usermovie = useParams();
	console.log(usermovie);
	function handleClick(id) {
		navigate(`/cinemainfo/${id}`);
	}
	const handleNextPage = () => {
		setPageNo(page => page + 1);
		navigate(`/searchedmovie/:${movieName}?page=${page + 1}`);
	};

	const handlePrevPage = () => {
		if (page > 1) {
			setPageNo(page => page - 1);
			navigate(`/searchedmovie/:${movieName}?page=${page - 1}`);
		}
	};
	useEffect(() => {
		async function getSearchedMovie() {
			const res = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movieName}&page=${page}`
			);

			const data = await res.json();
			setMovieData(data.results);
		}
		getSearchedMovie();
	}, [movieName, page]);
	return (
		<div>
			<ul>
				{movieData.map((item, i) => (
					<PopularMovie
						onClick={handleClick}
						item={item}
						id={item.id}
						key={i}
					/>
				))}
			</ul>
			<div className="flex items-center justify-center space-x-4">
				<button
					className={`px-6 py-2 mb-2 text-white font-bold rounded-lg transition-colors ${
						page === 1
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-black hover:bg-yellow-500 transition-colors'
					}`}
					onClick={handlePrevPage}
					disabled={page === 1}
				>
					Previous
				</button>
				<button
					className="px-6 py-2 mb-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-black transition-colors"
					onClick={handleNextPage}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default SearchedMovies;
