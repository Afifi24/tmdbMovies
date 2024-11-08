import React from "react";
import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
    element: <NavBar />,

    children: [
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
    ],
  },
]);
const App = () => {
  const classes = useStyles();
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        {/* <RouterProvider router={router} /> */}
      </main>
      {/* <div ref={alanBtnContainer} /> */}
    </ThemeProvider>
  );
};

export default App;
