import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import Loader from 'components/Loader/Loader';
const CastPage = lazy(() => import('pages/MovieDetails/Cast/Cast'));
const ReviewsPage = lazy(() => import('pages/MovieDetails/Reviews/Reviews'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MovieDetails />}>
            <Route
              path="cast"
              element={
                <Suspense fallback={<Loader />}>
                  <CastPage />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<Loader />}>
                  <ReviewsPage />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
