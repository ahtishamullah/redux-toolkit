import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";
export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchasyncmovies",
  async () => {
    const movieText = "spider";
    const response = await http
      .get(
        `https://www.omdbapi.com/?apiKey=${APIKey}&s=${movieText}&type=movie`
      )
      .catch((error) => {
        console.log("error", error);
      });
    console.log(response.data, "sdak");
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk("show/fetchshow", async () => {
  const showText = "game";
  const response = await http
    .get(`https://www.omdbapi.com/?apiKey=${APIKey}&s=${showText}&type=movie`)
    .catch((error) => {
      console.log("error");
    });
  return response.data;
});
export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  "movie/fetchAsyncMovieOrShowDetails",
  async (id) => {
    const response = await http
      .get(`https://www.omdbapi.com/?apiKey=${APIKey}&i=${id}&Plot=full`)
      .catch((error) => {
        console.log(error, "erroe");
      });
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  movieDetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  // reducers: {
  //   addMovies: (state, { payload }) => {
  //     state.movies = payload;
  //   },
  // },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fullfilled", { ...state, movies: payload });

      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fullfilled");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
      console.log("fullfilled");
      return { ...state, movieDetails: payload };
    },
  },
  [fetchAsyncMovies.rejected]: () => {
    console.log("rejected");
  },
});
// export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllMovieDetails = (state) => state.movies.movieDetails;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
