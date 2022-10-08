import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Services/API';
import ListReviews from 'components/ListReviews/ListReviews';
export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(moviesId);
        setReviews(data);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };
    fetchReviews();
  }, [moviesId]);

  return (
    <ul>
      {reviews === [] ? (
        <ListReviews reviews={reviews} />
      ) : (
        <p>We don't have reviews of this movie</p>
      )}
    </ul>
  );
}
