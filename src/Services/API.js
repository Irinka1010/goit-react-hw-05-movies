import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'a2ed656ea9ad96f75993b65307216e05';
const trendingMvies = 'trending/movie/day';

export const fetchTrendingMovie = async () => {
  const response = await axios.get(`${trendingMvies}?api_key=${KEY}`);
  return response.data.results;
};

export const getMovieId = async id => {
  const { data } = await axios.get(`movie/${id}?api_key=${KEY}`);
  return data;
};
export const getActors = async id => {
  const { data } = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
  return data.cast;
};
