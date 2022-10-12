import { Link, useLocation } from 'react-router-dom';
import { List } from 'components/ListMovies/StyledListMovies';
export default function ListMovies({ movies }) {
  const location = useLocation();
  const urlImg = `https://image.tmdb.org/t/p/w500/`;
  console.log(movies);
  const elements = movies.map(({ title, id, poster_path }) => {
    return (
      <li className="Item" key={id}>
        <Link className="Link" state={{ from: location }} to={`/movies/${id}`}>
          <img className="Img" src={`${urlImg}${poster_path}`} alt={title} />
          <p>{title}</p>
        </Link>
      </li>
    );
  });
  return <List>{elements}</List>;
}
