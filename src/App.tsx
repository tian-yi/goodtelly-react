import React, { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import {
  POPULAR_TV_URL,
  SEARCH_TV_URL,
  POPULAR_MOVIE_URL,
  SEARCH_MOVIE_URL,
} from "./config";

import ProgramDetails from "./components/ProgramDetails";
import Home from "./Home";
import TopNav from "./components/TopNav";
import SearchProgram from "./components/SearchProgram";
import Signin from "./Signin";
import Signup from "./Signup";
import MyList from "./MyList";

import PrivateRoute from "./PrivateRoute";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    // fetch TV shows
    fetch(POPULAR_TV_URL)
      .then((response) => response.json())
      .then((result) => {
        setPopularTVShows(result.results);
      });

    fetch(POPULAR_MOVIE_URL)
      .then((response) => response.json())
      .then((result) => {
        setPopularMovies(result.results);
      });
  }, []);

  const handleAuth = (token: string) => {
    setIsAuthenticated(true);
    setAuthToken(token);
    // Should use js-cookies instead. local storage is not secure
    localStorage.setItem("token", token);
  };
  return (
    <div>
      <CssBaseline />
      <TopNav isAuthenticated={isAuthenticated} />
      <Container maxWidth="lg" className={classes.main}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin handleAuth={handleAuth} />
          </Route>
          <Route path="/signup">
            <Signup handleAuth={handleAuth} />
          </Route>
          <Route path="/movie/:id">
            <ProgramDetails programType="movie" />
          </Route>
          <Route path="/movie">
            <SearchProgram
              popularPrograms={popularMovies}
              searchURL={SEARCH_MOVIE_URL}
              title="Movies"
            />
          </Route>
          <Route path="/tv/:id">
            <ProgramDetails programType="tv" />
          </Route>
          <Route path="/tv">
            <SearchProgram
              popularPrograms={popularTVShows}
              searchURL={SEARCH_TV_URL}
              title="TV Shows"
            />
          </Route>
          <PrivateRoute path="/list" isAuthenticated={isAuthenticated}>
            <MyList authToken={authToken} />
          </PrivateRoute>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
