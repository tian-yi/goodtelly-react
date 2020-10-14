import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import PopularList from "./PopularList";
import { POPULAR_MOVIES_URL, POPULAR_TV_SHOWS_URL } from "./config";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={2}>
        <PopularList url={POPULAR_MOVIES_URL} title="Popular Movies" />
        <PopularList url={POPULAR_TV_SHOWS_URL} title="Popular TV Shows" />
      </Box>
    </Container>
  );
};

export default Home;
