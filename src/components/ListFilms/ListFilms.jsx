import { Link } from 'react-router-dom';

export default function ListFilms({ items }) {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title} </Link>
    </li>
  ));
  return <ul>{elements}</ul>;
}
