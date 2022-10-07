import { Link } from 'react-router-dom';

export default function ListMovies({ movies }) {
  const elements = movies.map(({ title, id }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
