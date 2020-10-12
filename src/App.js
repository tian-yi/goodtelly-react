import React, { useEffect, useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import { ReactComponent as Logo } from "./static/images/goodtelly-logo.svg";
import { DEFAULT_QUERY, TMDB_API_URL, TMDB_IMAGE_URL } from "./config";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFF",
  },
  logo: {
    marginRight: theme.spacing(4),
  },
  toolbar: {
    minHeight: "72px",
  },
  title: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  nav: {
    display: "flex",
  },
  card: {
    height: "100%;",
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
}));

function App() {
  const classes = useStyles();
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(`${TMDB_API_URL}/movie/popular${DEFAULT_QUERY}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPopularMovies(result.results);
      });
  }, []);
  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo}>
            <Logo />
          </div>
          <nav className={classes.nav}>
            <Typography variant="h6" className={classes.title}>
              Movies
            </Typography>
            <Typography variant="h6" className={classes.title}>
              TV Shows
            </Typography>
          </nav>
        </Toolbar>
        <Container maxWidth="lg">
          <Box component={Paper} p={2}>
            <Box mb={2}>
              <Typography variant="h5">Popular Movies</Typography>
            </Box>
            <Grid container spacing={2}>
              {popularMovies.map((movie) => (
                <Grid item xs={12} md={4} lg={3} key={movie.id}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={`${TMDB_IMAGE_URL}/w300/${movie.backdrop_path}`}
                      title={movie.title}
                    />
                    <CardContent>
                      <Typography variant="body">{movie.title}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
}

export default App;
