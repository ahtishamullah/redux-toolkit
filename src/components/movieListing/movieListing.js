import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../feature/movies/movieSlice";
import { MovieCard } from "../../components";
import "./movieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.Response === "True" ? (
            movies.Search.map((movie, index) => {
              return <MovieCard key={index} data={movie} />;
            })
          ) : (
            <div className="movie-error">
              <h3>{movies.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
