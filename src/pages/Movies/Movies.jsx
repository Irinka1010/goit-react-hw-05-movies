import SearchBox from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { searchMovieQuery } from 'Services/API';
import ListMovies from 'components/ListMovies/ListMovies';
export default function Movies() {
  const [movies, setMovies] = useState(null);
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
        const data = await searchMovieQuery(query);
        setMovies(data);
        if (data.length === 0) {
          toast.info('Sorry, request not found, try something else');
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <main>
      <SearchBox onChange={changeFilret} />
      {movies && <ListMovies movies={movies} />}
    </main>
  );
}
