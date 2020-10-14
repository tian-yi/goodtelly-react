import React, { useEffect, useState } from "react";

import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { ReactComponent as Logo } from "./static/images/goodtelly-logo.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolBar: {
    minHeight: "72px",
  },
  navTitle: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  logo: {
    margin: `0px ${theme.spacing(2)}px`,
  },
}));

const IMAGE_URL = "https://image.tmdb.org/t/p/w780/";

function App() {
  const classes = useStyles();
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const popular_movie_url =
      "https://api.themoviedb.org/3/movie/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_movie_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularMovies(result.results);
      });
  }, []);

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logo}>
            <Logo />
          </div>
          <Typography variant="h6" className={classes.navTitle}>
            Movies
          </Typography>
          <Typography variant="h6" className={classes.navTitle}>
            TV Shows
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        {popularMovies.map((movie) => (
          <div key={movie.id}>
            <Card>
              <CardMedia
                style={{ height: 500 }}
                image={`${IMAGE_URL}${movie.poster_path}`}
                title={movie.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movie.overview}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
