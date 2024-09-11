import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './UI/AppLayout';
import Error from './UI/Error';
import Popular, {
	loader as popularLoader,
} from './features/Movies/PopularMovies/Popular';
import TopRated, {
	loader as topratedLoader,
} from './features/Movies/TopRatedMovies/TopRated';
import Upcoming, {
	loader as upcomingLoader,
} from './features/Movies/UpcomingMovies/Upcoming';
import Home from './UI/Home';
import MovieDescription from './features/Movies/MovieDescription/MovieDescription';
import SearchedMovies from './features/Movies/SearchMovies/SearchedMovies';
function App() {
	const router = createBrowserRouter([
		{
			element: <AppLayout />,
			errorElement: <Error />,
			children: [
				{
					path: '/',
					element: <Home />,
					loader: popularLoader,
				},
				{
					path: '/popular',
					element: <Popular />,
					loader: popularLoader,
				},
				{
					path: '/toprated',
					element: <TopRated />,
					loader: topratedLoader,
				},
				{
					path: '/upcoming',
					element: <Upcoming />,
					loader: upcomingLoader,
				},
				{
					path: '/cinemainfo/:uid',
					element: <MovieDescription />,
				},
				{
					path: '/searchedmovie/:moviename',
					element: <SearchedMovies />,
				},
			],
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
