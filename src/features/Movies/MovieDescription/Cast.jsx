import { useEffect, useState } from 'react';
import '../../Cast.css';
function Cast({ id, Api_key }) {
	const [castDetails, setCastDetails] = useState([]);
	useEffect(() => {
		async function getCast() {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`
			);
			const data = await res.json();
			setCastDetails(data.cast);
		}
		getCast();
	}, [id, Api_key]);
	return (
		<div className="cast-container">
			<h2 className="cast-title">Cast</h2>
			<div className="cast-list">
				{castDetails.slice(0, 12).map((member, i) => (
					<div key={i} className="cast-member">
						<img
							src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
							alt={member.name}
							className="cast-image"
						/>
						<div className="cast-info">
							<p className="actor-name">{member.name}</p>
							<p className="character-name">{`Character: ${member.character}`}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Cast;
