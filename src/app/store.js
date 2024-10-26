import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer, // Add the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware), // Add the API middleware
});
