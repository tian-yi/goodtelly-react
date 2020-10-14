import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import { fetchData } from "./api";
import { TMDB_IMAGE_URL, POPULAR_MOVIES_URL } from "./config";
import PopularList from "./PopularList";
import Hero from "./Hero";

const Movie = () => {
  const [heroImage, setHeroImage] = useState("");
  const [search, setSearch] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await fetchData(POPULAR_MOVIES_URL);
      const movies = result.results;
      setPopularMovies(movies);
      const randomTopMovieImage =
        movies[parseInt(Math.random() * Math.floor(10), 10)].backdrop_path;

      setHeroImage(`${TMDB_IMAGE_URL}/w1280${randomTopMovieImage}`);
    };

    fetchMovies();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //search movies
  };
  return (
    <Container maxWidth="lg">
      <Hero image={heroImage}>
        <form noValidate style={{ width: "100%" }} onSubmit={handleSubmit}>
          <FormControl
            style={{
              opacity: 0.9,
              width: "40%",
              background: "white",
              borderRadius: 8,
              padding: 16,
            }}
          >
            <TextField
              variant="outlined"
              id="search"
              label="Search Movie"
              name="Search"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </FormControl>
        </form>
      </Hero>
      <Box mt={2}>
        <PopularList items={popularMovies} title="Popular Movies" />
      </Box>
    </Container>
  );
};

export default Movie;
