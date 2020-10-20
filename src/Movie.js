import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import { POPULAR_MOVIE_URL, TMDB_IMAGE_URL, SEARCH_MOVIE_URL } from "./config";
import PopularList from "./PopularList";

const useStyles = makeStyles((theme) => ({
  hero: (props) => ({
    height: "320px",
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `linear-gradient(to right, rgb(3, 7, 65, 02), rgb(0, 0, 0, 0.6) 70%), url("${props.image}")`,
  }),
  form: {
    width: "100%",
  },
  formControl: {
    opacity: 0.9,
    width: "35%",
    background: "white",
    borderRadius: 8,
    padding: 16,
  },
}));

const Home = () => {
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

  const classes = useStyles({ image: heroImageURL });

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
      <div className={classes.hero}>
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
      </div>
      <Box mb={2}>
        <PopularList items={popularMovies} listTitle={title} />
      </Box>
    </>
  );
};

export default Home;
