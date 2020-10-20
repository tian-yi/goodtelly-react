import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import { POPULAR_MOVIE_URL, TMDB_IMAGE_URL, SEARCH_MOVIE_URL } from "./config";
import PopularList from "./PopularList";
import Hero from "./Hero";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  formControl: {
    opacity: 0.9,
    width: "35%",
    background: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

const Movie = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [heroImageURL, setHeroImageURL] = useState("");
  const [searchText, setSearchText] = useState("");
  const [title, setTitle] = useState("Popular Movies");

  useEffect(() => {
    // fetch movies
    fetch(POPULAR_MOVIE_URL)
      .then((response) => response.json())
      .then((result) => {
        const movies = result.results;
        const randomMovieIndex = parseInt(Math.random() * 10, 10);
        const randomTopMovieImage = movies[randomMovieIndex].backdrop_path;
        setHeroImageURL(`${TMDB_IMAGE_URL}w1280/${randomTopMovieImage}`);
        setPopularMovies(movies);
      });
  }, []);

  const classes = useStyles();

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`${SEARCH_MOVIE_URL}&query=${searchText}`)
      .then((response) => response.json())
      .then((result) => {
        setPopularMovies(result.results);
      });
    setTitle(`Search results for ${searchText}`);
  };
  return (
    <>
      <Hero heroImageURL={heroImageURL}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSearch}
          className={classes.form}
        >
          <FormControl className={classes.formControl}>
            <TextField
              id="search"
              label="Search"
              type="search"
              variant="outlined"
              placeholder="Movie name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </FormControl>
        </form>
      </Hero>
      <Box mb={2}>
        <PopularList items={popularMovies} listTitle={title} />
      </Box>
    </>
  );
};

export default Movie;
