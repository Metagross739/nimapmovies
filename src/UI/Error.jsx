import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function NotFound() {
	const navigate = useNavigate();
	const error = useRouteError();
	return (
		<div>
			<h1>Something went wrong 😢</h1>
			<p>{error.data || error.message}</p>
			<Link onClick={() => navigate(-1)}>&larr; Go back</Link>
		</div>
	);
}

export default NotFound;
