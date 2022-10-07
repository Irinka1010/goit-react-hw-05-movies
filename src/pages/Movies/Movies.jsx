import SearchBox from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
    const fetchMovies = async () => {
      try {
        const data = await searchMovieQuery(query);
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [query]);

  console.log(movies);
  return (
    <main>
      <SearchBox onChange={changeFilret} />
      {movies && <ListMovies movies={movies} />}
    </main>
  );
}
