import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PopularMovie from '../PopularMovies/PopularMovie';
function SearchedMovies(props) {
	const [movieData, setMovieData] = useState([]);
	const movieName = useSelector(state => state.search.moviename);
	const Api_key = `c45a857c193f6302f2b5061c3b85e743`;
	const navigate = useNavigate();
	const usermovie = useParams();
	console.log(usermovie);
	function handleClick(id) {
		navigate(`/cinemainfo/${id}`);
	}
	useEffect(() => {
		async function getSearchedMovie() {
			const res = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movieName}&page=1`
			);

			const data = await res.json();
			setMovieData(data.results);
		}
		getSearchedMovie();
	}, [movieName]);
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
		</div>
	);
}

export default SearchedMovies;
