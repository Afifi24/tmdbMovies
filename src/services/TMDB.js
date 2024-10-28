import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApikey = import.meta.env.VITE_TMDB_KEY;
const page = 1;
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApikey}`,
    }),

    //get Movies by type
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApikey}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
