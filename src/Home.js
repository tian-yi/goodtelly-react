import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { fetchData } from "./api";
import {
  TMDB_IMAGE_URL,
  POPULAR_MOVIES_URL,
  POPULAR_TV_SHOWS_URL,
} from "./config";
import PopularList from "./PopularList";
import Hero from "./Hero";

const Home = () => {
  const [heroImage, setHeroImage] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await fetchData(POPULAR_MOVIES_URL);
      const movies = result.results;
      setPopularMovies(movies.slice(0, 8));
      const randomTopMovieImage =
        movies[parseInt(Math.random() * Math.floor(10), 10)].backdrop_path;

      setHeroImage(`${TMDB_IMAGE_URL}/w1280${randomTopMovieImage}`);
    };
    const fetchTVShows = async () => {
      const TVShows = await fetchData(POPULAR_TV_SHOWS_URL);
      setPopularTVShows(TVShows.results.slice(0, 8));
    };

    fetchMovies();
    fetchTVShows();
  }, []);

  return (
    <Container maxWidth="lg">
      <Hero image={heroImage}>
        <Box mb={2}>
          <Typography variant="h2" style={{ color: "white" }}>
            Welcome
          </Typography>
        </Box>
        <Typography variant="h5" style={{ color: "white" }}>
          Share your favourte your Movie and TV Shows with your family and
          friends.
        </Typography>
      </Hero>
      <Box mt={2}>
        <PopularList items={popularMovies} title="Popular Movies" />
        <PopularList items={popularTVShows} title="Popular TV Shows" />
      </Box>
    </Container>
  );
};

export default Home;
