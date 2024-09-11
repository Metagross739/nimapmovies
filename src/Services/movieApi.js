const Api_key = `c45a857c193f6302f2b5061c3b85e743`;
const POPULAR = `popular`;
const UPCOMING = `upcoming`;
const TOP_RATED = `top_rated`;
const API_URL = `https://api.themoviedb.org/3/movie/`;

export async function getMovies(pageNo = 1) {
	const res = await fetch(
		API_URL + `${POPULAR}?api_key=${Api_key}&language=en-US&page=${pageNo}`
	);
	if (!res.ok) throw Error(`Couldnt get movies`);

	const data = await res.json();

	return data;
}

export async function getUpcomingMovies(pageNo = 1) {
	const res = await fetch(
		API_URL + `${UPCOMING}?api_key=${Api_key}&language=en-US&page=${pageNo}`
	);
	if (!res.ok) throw Error(`Couldnt get movies`);

	const data = await res.json();

	return data;
}

export async function getTopRatedMovies(pageNo = 1) {
	const res = await fetch(
		API_URL + `${TOP_RATED}?api_key=${Api_key}&language=en-US&page=${pageNo}`
	);
	if (!res.ok) throw Error(`Couldnt get movies`);

	const data = await res.json();

	return data;
}
