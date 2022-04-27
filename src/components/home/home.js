import React, { useEffect } from "react";
import { MovieListing } from "../../components";
import { http } from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../feature/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Captain";
    const fetchMovies = async () => {
      const response = await http
        .get(
          `https://www.omdbapi.com/?apiKey=${APIKey}&s=${movieText}&type=movie`
        )
        .catch((error) => {
          console.log("error", error);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div className="banner-image">
      <MovieListing />
    </div>
  );
};

export default Home;
