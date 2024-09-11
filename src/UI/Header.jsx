import SearchMovie from '../features/Movies/SearchMovies/SearchMovie';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<nav className="bg-yellow-500 px-4 py-3 sticky top-0 z-10 border-b border-stone-200">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				{/* Left Section: MOVIEDB */}
				<Link to="/" className="text-black font-semibold text-lg">
					MOVIEDB
				</Link>

				{/* Center Section: Links (Mobile hidden, shown on medium and up) */}
				<div
					className={`w-full md:w-auto md:flex md:items-center md:space-x-6 md:block`}
				>
					<Link
						to="/popular"
						className="block text-black font-semibold mt-2 md:mt-0"
					>
						POPULAR
					</Link>
					<Link
						to="/toprated"
						className="block text-black font-semibold mt-2 md:mt-0"
					>
						TOPRATED
					</Link>
					<Link
						to="/upcoming"
						className="block text-black font-semibold mt-2 md:mt-0"
					>
						UPCOMING
					</Link>
				</div>

				{/* Right Section: Search (Always visible but responsive size) */}
				<div className="w-full md:w-auto mt-2 md:mt-0 md:flex justify-end">
					<SearchMovie className="w-full md:max-w-xs" />
				</div>
			</div>
		</nav>
	);
}

export default Header;
