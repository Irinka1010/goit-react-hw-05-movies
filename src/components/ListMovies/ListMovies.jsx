import { Link, useLocation } from 'react-router-dom';
import { List } from 'components/ListMovies/StyledListMovies';
import PropTypes from 'prop-types';
export default function ListMovies({ movies }) {
  const location = useLocation();

  const elements = movies.map(({ title, id, poster_path }) => {
    return (
      <li className="Item" key={id}>
        <Link className="Link" state={{ from: location }} to={`/movies/${id}`}>
          <img
            className="Img"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif'
            }
            alt={title}
          />
          <p>{title}</p>
        </Link>
      </li>
    );
  });
  return <List>{elements}</List>;
}
ListMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
