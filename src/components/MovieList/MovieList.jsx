import React from "react";
import { Grid, Typography, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { Movie } from "..";
const MovieList = ({ movies, numberOfMovies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies?.results?.slice(0, numberOfMovies).map((movie, i) => (
        <Movie movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
