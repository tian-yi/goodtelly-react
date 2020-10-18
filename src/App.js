import React from "react";

import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  POPULAR_MOVIES_URL,
  SEARCH_MOVIE_URL,
  POPULAR_TV_SHOWS_URL,
  SEARCH_TV_URL,
} from "./config";
import TopNav from "./TopNav";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

import SearchProgram from "./SearchProgram";

function App() {
  return (
    <div>
      <CssBaseline />
      <TopNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/movie">
          <SearchProgram
            defaultUrl={POPULAR_MOVIES_URL}
            searchUrl={SEARCH_MOVIE_URL}
            title="Movie"
          />
        </Route>
        <Route path="/tv">
          <SearchProgram
            defaultUrl={POPULAR_TV_SHOWS_URL}
            searchUrl={SEARCH_TV_URL}
            title="TV Show"
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
