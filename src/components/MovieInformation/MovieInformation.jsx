import React from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
  Modal,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from "@mui/icons-material";
import { useGetMovieQuery, useGetMoviesQuery } from "../../services/TMDB";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import useStyles from "./styles";
import genreIcons from "../../assets/genres";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
const MovieInformation = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useGetMovieQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();

  if (isFetching) {
    return (
      <Box
        display="flex"
        alignItems="center"
        minHeight="100vh"
        justifyContent="center"
      >
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        alignItems="center"
        minHeight="100vh"
        justifyContent="center"
      >
        <Link to="/">Something went wrong. Go back to home.</Link>
      </Box>
    );
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid
        item
        sm={12}
        lg={4}
        style={{ display: "flex", marginBottom: "30px" }}
      >
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data?.release_date?.split("-")[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" alignItems="center">
            <Rating readOnly value={(data?.vote_average || 0) / 2} />
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginLeft: "10px" }}
            >
              {data?.vote_average}
            </Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime} min | {data?.spoken_languages?.[0]?.name || "N/A"}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link
              key={genre.name}
              className={classes.links}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                className={classes.genreImage}
                height={30}
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieInformation;
