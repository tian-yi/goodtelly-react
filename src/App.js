import React from "react";

import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import TopNav from "./TopNav";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

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
      </Switch>
    </div>
  );
}

export default App;
