import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getAllMovies,
  getAllShows,
} from "../../feature/movies/movieSlice";
import { MovieCard } from "../../components";
import "./movieListing.scss";
const MovieListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderItems,
    renderShows = "";
  renderItems =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movie-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderItems}</div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
