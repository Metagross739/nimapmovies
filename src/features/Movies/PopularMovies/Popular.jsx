import React from 'react';
import { getMovies } from '../../../Services/movieApi';
import { useLoaderData } from 'react-router-dom';
import PopularMovie from './PopularMovie';
import { useNavigate } from 'react-router-dom';
function Popular(props) {
	const { movies, page } = useLoaderData();
	const moviesArray = movies.results;
	const navigate = useNavigate();
	function handleClick(id) {
		navigate(`/cinemainfo/${id}`);
	}
	const handleNextPage = () => {
		navigate(`/popular?page=${page + 1}`);
	};

	const handlePrevPage = () => {
		if (page > 1) {
			navigate(`/popular?page=${page - 1}`);
		}
	};
	return (
		<div>
			<ul>
				{moviesArray.map((item, i) => (
					<PopularMovie
						onClick={handleClick}
						id={item.id}
						item={item}
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
export async function loader({ request }) {
	const url = new URL(request.url);
	const page = url.searchParams.get('page') || 1;
	const data = await getMovies(page);
	return { movies: data, page: Number(page) };
}

export default Popular;
