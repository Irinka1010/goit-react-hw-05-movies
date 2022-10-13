import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Services/API';
import ListReviews from 'components/ListReviews/ListReviews';
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    if (reviews.length > 0) {
      return;
    }
    const fetchReviews = async () => {
      try {
        const data = await getReviews(moviesId);
        setReviews(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchReviews();
  }, [moviesId, reviews.length]);

  return (
    <>
      {error && <p>Something went wrong</p>}
      <ul>
        {reviews.length !== 0 ? (
          <ListReviews reviews={reviews} />
        ) : (
          <p>We don't have reviews of this movie</p>
        )}
      </ul>
    </>
  );
}
