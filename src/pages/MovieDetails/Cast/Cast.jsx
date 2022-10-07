import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'Services/API';
import ListCast from 'components/ListCast/ListCast';
const imgeURL = 'https://image.tmdb.org/t/p/w500/';
export default function Cast() {
  const [castMovie, setCastMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getActors(moviesId);
        setCastMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchActors();
  }, [moviesId]);

  return <ul>{castMovie && <ListCast castMovie={castMovie} />}</ul>;
}
