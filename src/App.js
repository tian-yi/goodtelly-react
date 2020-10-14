import React from "react";

import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import TopNav from "./TopNav";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Movie from "./Movie";
import TV from "./TV";

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
          <Movie />
        </Route>
        <Route path="/tv">
          <TV />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
