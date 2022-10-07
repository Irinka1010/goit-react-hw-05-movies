const imgeURL = 'https://image.tmdb.org/t/p/w500/';
export default function MovieElement({ movies }) {
  const { title, overview, genres, poster_path, vote_count } = movies;
  const genre = genres.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  return (
    <div>
      <img src={`${imgeURL}${poster_path}`} alt={title} />
      <h1>{title}</h1>
      <p>User Score : {vote_count}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>{genre}</ul>
    </div>
  );
}
