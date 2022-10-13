import { CartInfo } from 'components/MovieDetailsElement/StyledElementMovies';
import PropTypes from 'prop-types';

export default function MovieDetailsElement({ movies, movieScore }) {
  const { title, overview, genres, poster_path, vote_average } = movies;
  const genre = genres.map(({ id, name }) => {
    return (
      <li className="Element" key={id}>
        {name}
      </li>
    );
  });

  return (
    <CartInfo>
      <img
        className="Imge "
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
        }
        alt={title}
      />
      <div className="Info ">
        <h1 className="Title">{title}</h1>
        <p>User Score : {`${movieScore(vote_average)}`} </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className="Genre">{genre}</ul>
      </div>
    </CartInfo>
  );
}
MovieDetailsElement.propTypes = {
  movieScore: PropTypes.func.isRequired,
  movies: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};
