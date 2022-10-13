import SearchBox from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { searchMovieQuery } from 'Services/API';
import ListMovies from 'components/ListMovies/ListMovies';
import Loader from 'components/Loader/Loader';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const changeFilret = velue => {
    setSearchParams(velue !== '' ? { query: velue } : {});
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await searchMovieQuery(query);
        setMovies(data);
        if (data.length === 0) {
          toast.info('Sorry, request not found, try something else');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <main>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      <SearchBox onChange={changeFilret} />
      {movies && <ListMovies movies={movies} />}
    </main>
  );
}
