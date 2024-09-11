import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/MovieCard.css';
import Cast from './Cast';
function MovieDescription(props) {
	const [movieData, setMovieData] = useState({});
	const { uid } = useParams();
	const Api_key = `c45a857c193f6302f2b5061c3b85e743`;
	useEffect(() => {
		async function getDescription() {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${uid}?api_key=${Api_key}&language=en-US`
			);
			const data = await res.json();
			setMovieData(data);
		}
		getDescription();
	}, [uid, Api_key]);
	const {
		poster_path: poster,
		title,
		vote_average: rating,
		runtime,
		genres,
		release_date: releaseDate,
		overview,
		backdrop_path: wallpaper,
	} = movieData;
	return (
		<>
			<div className="movie-card rounded-sm">
				<div className="movie-card-left">
					<div className="movie-card-info">
						<img
							className="poster-image"
							src={`https://image.tmdb.org/t/p/w500${poster}`}
							alt={title}
						/>
						<div className="movie-card-meta">
							<h2 className="movie-card-title">{title}</h2>
							<p className="movie-card-rating">Rating: {rating}</p>
							<p className="movie-card-runtime">Runtime: {runtime} min</p>
							<div className="movie-card-genres-container">
								{(genres || []).map((item, i) => (
									<span key={i} className="movie-card-genre">
										{item.name}
									</span>
								))}
							</div>
							<p className="movie-card-release-date">
								Release Date: {releaseDate}
							</p>
						</div>
					</div>
					<p className="movie-card-overview">{overview}</p>
				</div>
				<div className="movie-card-right">
					<img
						className="wallpaper-image"
						src={`https://image.tmdb.org/t/p/w500${wallpaper}`}
						alt={`wallpaper:${wallpaper}`}
					/>
				</div>
			</div>

			<Cast id={uid} Api_key={Api_key} />
		</>
	);
}

export default MovieDescription;
