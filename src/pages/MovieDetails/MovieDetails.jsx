import { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';

import { getMovieId } from 'Services/API';

import MovieDetailsElement from 'components/MovieDetailsElement/MovieDetailsElement';

export default function MovieDetails() {
  const [movies, setMovies] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const { moviesId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';
  console.log(from);
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
  const goBack = () => navigate(from);

  const movieScore = score => {
    return Math.floor(score * 10) + '%';
  };
  const isCast = location.pathname.includes('cast');
  const castLink = isCast ? `/movies/${moviesId}` : `/movies/${moviesId}/cast`;
  const isReviews = location.pathname.includes('reviews');
  const reviewsLink = isReviews
    ? `/movies/${moviesId}`
    : `/movies/${moviesId}/reviews`;
  return (
    <div>
      <div>
        <button onClick={goBack}>Go back</button>
        {movies && (
          <MovieDetailsElement movies={movies} movieScore={movieScore} />
        )}
      </div>
      <div>
        <h3>Additional information</h3>
        <div>
          <Link state={{ from }} to={castLink}>
            Cast
          </Link>
          <Link state={{ from }} to={reviewsLink}>
            Reviews
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
