import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import { getMovieDetailsURL } from "./config";
import Placeholder from "./static/images/image-placeholder.png";

const useStyles = makeStyles((theme) => ({
  hero: (props) => ({
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `linear-gradient(to right, rgb(3, 7, 65, 02), rgb(0, 0, 0, 0.6) 70%), url("${props.image}")`,
  }),
  card: {
    maxWidth: "300px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    borderRadius: theme.spacing(0.5),
    height: "450px",
    width: "300px",
  },
  details: {
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: theme.spacing(4),
  },
  actionIcon: {
    marginRight: theme.spacing(2),
  },
}));

const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

const Spacer = () => {
  return (
    <Typography variant="body1" style={{ margin: "0px 4px" }}>
      |
    </Typography>
  );
};
const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    poster_path: "",
    backdrop_path: "",
    genres: [],
    credits: { cast: [], crew: [] },
  });
  const getImageURL = (imagePath) => {
    if (imagePath) {
      return `${IMAGE_URL}${imagePath}`;
    } else {
      return Placeholder;
    }
  };
  const classes = useStyles({ image: getImageURL(movieDetails.backdrop_path) });

  useEffect(() => {
    const movieDetailsURL = getMovieDetailsURL(id);
    fetch(movieDetailsURL)
      .then((response) => response.json())
      .then((result) => {
        setMovieDetails(result);
      });
  }, [id]);
  console.log(movieDetails);
  return (
    <Container maxWidth="lg">
      <Paper className={classes.hero}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={getImageURL(movieDetails.poster_path)}
                title={movieDetails.title}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <div className={classes.details}>
              <Typography variant="h4">{movieDetails.title}</Typography>
              {movieDetails.tagline ? (
                <Typography variant="caption">
                  <i>{movieDetails.tagline}</i>
                </Typography>
              ) : null}

              <div style={{ display: "flex" }}>
                <Typography variant="body1">
                  Release date: {movieDetails.release_date}
                </Typography>

                <Spacer />
                <Typography variant="body1">
                  Genre:{" "}
                  {movieDetails.genres.map((genre, index, arr) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index < arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </Typography>
                <Spacer />
                <Typography variant="body1">
                  Rating: {movieDetails.vote_average}
                </Typography>
                <Spacer />
                <Typography variant="body1">
                  Run time: {movieDetails.runtime}
                </Typography>
              </div>

              <Box mt={4}>
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body1">
                  {movieDetails.overview}{" "}
                </Typography>
              </Box>
              <Box mt={4}>
                <FavoriteIcon fontSize="large" className={classes.actionIcon} />
                <PlaylistAddIcon
                  fontSize="large"
                  className={classes.actionIcon}
                />
                <ThumbDownIcon
                  fontSize="large"
                  className={classes.actionIcon}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MovieDetails;
