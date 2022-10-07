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
  console.log(moviesId);
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

  return <div>{reviews && <ListReviews reviews={reviews} />}</div>;
}
