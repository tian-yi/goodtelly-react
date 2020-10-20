import React, { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { POPULAR_TV_URL } from "./config";
import PopularList from "./PopularList";
import MovieDetails from "./MovieDetails";
import TVDetails from "./TVDetails";
import Home from "./Home";
import Movie from "./Movie";
import TopNav from "./TopNav";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [popularTVShows, setPopularTVShows] = useState([]);

  useEffect(() => {
    // fetch TV shows

    fetch(POPULAR_TV_URL)
      .then((response) => response.json())
      .then((result) => {
        setPopularTVShows(result.results);
      });
  }, []);

  return (
    <div>
      <CssBaseline />
      <TopNav />
      <Container maxWidth="lg" className={classes.main}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/movie">
            <Movie />
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
