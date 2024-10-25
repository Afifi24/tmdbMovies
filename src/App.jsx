import React from "react";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "./styles";
// import components
import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/movie/:id",
    element: <MovieInformation />,
  },
  {
    path: "/actors/:id",
    element: <Actors />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
]);
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RouterProvider router={router} />
      </main>
      {/* <div ref={alanBtnContainer} /> */}
    </div>
  );
};

export default App;
