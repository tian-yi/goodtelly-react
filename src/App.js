import React, { useEffect, useState } from "react";

import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

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
  card: {
    heigth: "100%",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  sectionTitle: { padding: theme.spacing(2) },
}));

const IMAGE_URL = "https://image.tmdb.org/t/p/w780/";

function App() {
  const classes = useStyles();
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  useEffect(() => {
    // fetch movies
    const popular_movie_url =
      "https://api.themoviedb.org/3/movie/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_movie_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularMovies(result.results);
      });

    // fetch TV shows
    const popular_tv_url =
      "https://api.themoviedb.org/3/tv/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_tv_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularTVShows(result.results);
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
      <Box mt={2} pt={2}>
        <Container maxWidth="lg" component={Paper}>
          <Typography variant="h5" className={classes.sectionTitle}>
            Popular Movies
          </Typography>

          <Grid container spacing={2}>
            {popularMovies.map((movie) => (
              <Grid item xs={12} md={4} lg={3} key={movie.id}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${IMAGE_URL}${movie.backdrop_path}`}
                    title={movie.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box mt={2} pt={2}>
        <Container maxWidth="lg" component={Paper}>
          <Typography variant="h5" className={classes.sectionTitle}>
            Popular TV Shows
          </Typography>

          <Grid container spacing={2}>
            {popularTVShows.map((show) => (
              <Grid item xs={12} md={4} lg={3} key={show.id}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${IMAGE_URL}${show.backdrop_path}`}
                    title={show.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {show.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
