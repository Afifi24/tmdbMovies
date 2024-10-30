import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import genreOrcategoryReducer from "../features/currentGenreOrCategory";
import userReducer from "../features/auth";
export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer, // Add the API reducer
    currentGenreOrCategory: genreOrcategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware), // Add the API middleware
});
