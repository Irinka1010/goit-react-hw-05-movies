import TitleHome from 'components/TitleHome/TitleHome';
import ListFilms from 'components/ListFilms/ListFilms';
import { useState, useEffect } from 'react';
import { fetchTrendingMovie } from 'Services/API';

export default function Home() {
  const [items, setItems] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovie = async () => {
      // setLoading(true);
      try {
        const data = await fetchTrendingMovie();
        setItems(data);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };
    getTrendingMovie();
  }, []);

  return (
    <div>
      <TitleHome title={'Trending today'} />
      <ListFilms items={items} />
    </div>
  );
}
