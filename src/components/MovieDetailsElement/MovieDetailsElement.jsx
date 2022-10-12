import { CartInfo } from 'components/MovieDetailsElement/StyledElementMovies';
const imgeURL = 'https://image.tmdb.org/t/p/w500/';

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
      <img className="Imge" src={`${imgeURL}${poster_path}`} alt={title} />
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
