import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'a2ed656ea9ad96f75993b65307216e05';
const trendingMvies = 'trending/movie/day';

const fetchTrendingMovie = async () => {
  const response = await axios.get(`${trendingMvies}?api_key=${KEY}`);
  return response.data.results;
};
export default fetchTrendingMovie;
