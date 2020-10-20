import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PopularList from "./PopularList";
import { POPULAR_MOVIE_URL, POPULAR_TV_URL, TMDB_IMAGE_URL } from "./config";

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
}));

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [heroImageURL, setHeroImageURL] = useState("");

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

    // fetch TV shows

    fetch(POPULAR_TV_URL)
      .then((response) => response.json())
      .then((result) => {
        setPopularTVShows(result.results);
      });
  }, []);

  const classes = useStyles({ image: heroImageURL });

  return (
    <>
      <div className={classes.hero}>
        <Typography variant="h2" style={{ color: "white", marginBottom: 8 }}>
          Welcome
        </Typography>
        <Typography variant="h5" style={{ color: "white" }}>
          Share your favourite movies and TV shows with family and friends.
        </Typography>
      </div>
      <Box mb={2}>
        <PopularList items={popularMovies} listTitle="Popular Movies" />
      </Box>
      <Box mb={2}>
        <PopularList items={popularTVShows} listTitle="Popular TV Shows" />
      </Box>
    </>
  );
};

export default Home;
