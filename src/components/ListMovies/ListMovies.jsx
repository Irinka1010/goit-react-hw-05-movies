import { Link, useLocation } from 'react-router-dom';

export default function ListMovies({ movies }) {
  const location = useLocation();
  console.log('location', location);
  const elements = movies.map(({ title, id }) => {
    return (
      <li key={id}>
        <Link state={{ from: location }} to={`/movies/${id}`}>
          {title}
        </Link>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
