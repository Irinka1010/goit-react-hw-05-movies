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
  const response = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
  return response.data.cast;
};
export const getReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
export const searchMovieQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
};
