export default function ListCast({ castMovie }) {
  return (
    <>
      {castMovie.map(({ name, character, profile_path, id }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
            }
            alt={name}
            width="100px"
          />
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </>
  );
}
