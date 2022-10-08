import { Link } from 'react-router-dom';
import { List } from './StyledListFimms';

export default function ListFilms({ items }) {
  const urlImg = `https://image.tmdb.org/t/p/w500/`;
  const elements = items.map(({ id, title, poster_path }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>
        <img src={`${urlImg}${poster_path}`} alt={title} />
      </Link>
    </li>
  ));
  return <List>{elements}</List>;
}
