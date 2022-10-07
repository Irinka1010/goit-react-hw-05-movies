import { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom';
import { getMovieId } from 'Services/API';
import MovieElement from 'components/MovieElement/MovieElement';

export default function MovieDetails() {
  const [movies, setMovies] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const { moviesId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // setLoading(true);
        // setError(null);
        const data = await getMovieId(moviesId);
        setMovies(data);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };
    fetchMovie();
  }, [moviesId]);
  const goBack = () => navigate(-1);

  return (
    <div>
      <div>
        <button onClick={goBack}>Go back</button>
        {movies && <MovieElement movies={movies} />}
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={'cast'}> Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}> Reviews</NavLink>
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
