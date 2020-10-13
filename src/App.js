import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { POPULAR_MOVIES_URL, POPULAR_TV_SHOWS_URL } from "./config";
import TopNav from "./TopNav";
import PopularList from "./PopularList";

function App() {
  return (
    <div>
      <CssBaseline />
      <TopNav />
      <Container maxWidth="lg">
        <Box mt={2}>
          <PopularList url={POPULAR_MOVIES_URL} title="Popular Movies" />
          <PopularList url={POPULAR_TV_SHOWS_URL} title="Popular TV Shows" />
        </Box>
      </Container>
    </div>
  );
}

export default App;
