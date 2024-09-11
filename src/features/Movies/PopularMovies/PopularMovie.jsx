import React from 'react';
import '../../App.css';
function PopularMovie({ item, id, onClick }) {
	const { poster_path: poster, title, vote_average: ratings } = item;
	return (
		<li onClick={() => onClick(id)}>
			<div className="movie-container">
				<img
					src={`https://image.tmdb.org/t/p/w500` + poster}
					alt={title + `.jpg`}
				/>
				<div className="movie-details">
					<h4>{title}</h4>
					<p>{ratings}</p>
				</div>
			</div>
		</li>
	);
}

export default PopularMovie;
