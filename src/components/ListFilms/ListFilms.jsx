import { Link, useLocation } from 'react-router-dom';
import { List } from './StyledListFimms';
import PropTypes from 'prop-types';
export default function ListFilms({ items }) {
  const location = useLocation();

  const urlImg = `https://image.tmdb.org/t/p/w500/`;
  const elements = items.map(({ id, title, poster_path }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <img className="Img" src={`${urlImg}${poster_path}`} alt={title} />
      </Link>
    </li>
  ));
  return <List>{elements}</List>;
}
ListFilms.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
