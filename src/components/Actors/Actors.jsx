import React, { useState } from "react";
import { Box, Grid, Button, CircularProgress, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetActorsDetailsQuery } from "../../services/TMDB";
import useStyles from "./styles";
const Actors = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const history = useNavigate();
  const classes = useStyles();

  if (isFetching) {
    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        minHeight={"100vh"}
        justifyContent={"center"}
      >
        <CircularProgress size={"8rem"} />
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        minHeight={"100vh"}
        justifyContent={"center"}
      >
        <Button
          startIcon={<ArrowBack />}
          onClick={() => history(-1)}
          color="primary"
        >
          Go back
        </Button>
      </Box>
    );
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || "Sorry, no biography yet..."}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => history(-1)}
              color="primary"
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Actors;
