import React from "react";

import { Switch } from "react-router-dom";

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

import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <TopNav />
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/movie/:id">
          <MovieDetails />
        </PrivateRoute>
        <PrivateRoute path="/movie">
          <SearchProgram
            defaultUrl={POPULAR_MOVIES_URL}
            searchUrl={SEARCH_MOVIE_URL}
            title="Movie"
          />
        </PrivateRoute>
        <PrivateRoute path="/tv" auth={false}>
          <SearchProgram
            defaultUrl={POPULAR_TV_SHOWS_URL}
            searchUrl={SEARCH_TV_URL}
            title="TV Show"
          />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
