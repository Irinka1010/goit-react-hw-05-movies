import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'Services/API';
import ListCast from 'components/ListCast/ListCast';
import { CastList } from 'pages/MovieDetails/Cast/StyledCast';

export default function Cast() {
  const [castMovie, setCastMovie] = useState(null);
  const [error, setError] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const data = await getActors(moviesId);
        setCastMovie(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchActors();
  }, [moviesId]);

  return (
    <>
      {error && <p>Something went wrong</p>};
      <CastList>{castMovie && <ListCast castMovie={castMovie} />}</CastList>;
    </>
  );
}
