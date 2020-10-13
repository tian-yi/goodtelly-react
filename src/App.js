import React from "react";

import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { POPULAR_MOVIES_URL, POPULAR_TV_SHOWS_URL } from "./config";
import TopNav from "./TopNav";
import PopularList from "./PopularList";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <div>
      <CssBaseline />
      <TopNav />
      <Switch>
        <Route exact path="/">
          <Container maxWidth="lg">
            <Box mt={2}>
              <PopularList url={POPULAR_MOVIES_URL} title="Popular Movies" />
              <PopularList
                url={POPULAR_TV_SHOWS_URL}
                title="Popular TV Shows"
              />
            </Box>
          </Container>
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
