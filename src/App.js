import React, { useEffect, useState } from "react";

import { Switch, Route, Link } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { ReactComponent as Logo } from "./static/images/goodtelly-logo.svg";
import PopularList from "./PopularList";
import MovieDetails from "./MovieDetails";
import TVDetails from "./TVDetails";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolBar: {
    minHeight: "72px",
  },
  navTitle: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  logo: {
    margin: `0px ${theme.spacing(2)}px`,
  },
  main: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);

  useEffect(() => {
    // fetch movies
    const popular_movie_url =
      "https://api.themoviedb.org/3/movie/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_movie_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularMovies(result.results);
      });

    // fetch TV shows
    const popular_tv_url =
      "https://api.themoviedb.org/3/tv/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_tv_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularTVShows(result.results);
      });
  }, []);

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <Typography variant="h6" className={classes.navTitle}>
            <Link to="/movie">Movies</Link>
          </Typography>
          <Typography variant="h6" className={classes.navTitle}>
            <Link to="/tv">TV Shows</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className={classes.main}>
        <Switch>
          <Route exact path="/">
            <Box mb={2}>
              <PopularList items={popularMovies} listTitle="Popular Movies" />
            </Box>

            <Box mb={2}>
              <PopularList
                items={popularTVShows}
                listTitle="Popular TV Shows"
              />
            </Box>
          </Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/movie">
            <Box mb={2}>
              <PopularList items={popularMovies} listTitle="Popular Movies" />
            </Box>
          </Route>
          <Route path="/tv/:id">
            <TVDetails />
          </Route>
          <Route path="/tv">
            <Box mb={2}>
              <PopularList
                items={popularTVShows}
                listTitle="Popular TV Shows"
              />
            </Box>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
