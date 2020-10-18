import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import placeholder from "./static/images/image-placeholder.png";
import { TMDB_API_URL, DEFAULT_QUERY, TMDB_IMAGE_URL } from "./config";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles((theme) => ({
  hero: (props) => ({
    borderRadius: 4,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `
    linear-gradient(to right,rgba(3, 7, 65, 0.2), rgba(0, 0, 0, 0.7) 80%), url("${TMDB_IMAGE_URL}/w1280/${props.backdrop_path}")`,
  }),
  card: {
    maxWidth: "300px",
  },
  cardMedia: {
    height: "450px",
    width: "300px",
    paddingTop: "56.25%", // 16:9
  },
  details: {
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: theme.spacing(4),
  },
  detailSection: {
    marginTop: theme.spacing(4),
  },
  actionIcon: {
    marginRight: theme.spacing(2),
  },
}));

const MovieDetails = () => {
  let { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    backdrop_path: "",
    genres: [],
  });
  const classes = useStyles(movieDetails);
  useEffect(() => {
    fetch(
      `${TMDB_API_URL}/movie/${id}${DEFAULT_QUERY}&append_to_response=credits`
    )
      .then((response) => response.json())
      .then((result) => setMovieDetails(result));
  }, [id]);

  const getImageUrl = (imagePath) => {
    if (imagePath) {
      return `${TMDB_IMAGE_URL}/w300/${imagePath}`;
    } else {
      return placeholder;
    }
  };
  console.log(movieDetails);
  return (
    <Container maxWidth="lg">
      <div className={classes.hero}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <Card className={classes.card}>
              <CardMedia
                style={{ borderRadius: 2 }}
                className={classes.cardMedia}
                image={getImageUrl(movieDetails.poster_path)}
                title={movieDetails.title}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <div className={classes.details}>
              <div className={classes.detailSection}>
                <Typography variant="h4">{movieDetails.title}</Typography>
                <div style={{ display: "flex" }}>
                  <Typography variant="body1">
                    Relase Date: {movieDetails.release_date}
                  </Typography>
                  <Typography variant="body1" style={{ margin: "0px 8px" }}>
                    |
                  </Typography>
                  <Typography variant="body1">
                    Genre:{" "}
                    {movieDetails.genres.map((genre, index, arr) => {
                      if (index < arr.length - 1) {
                        return `${genre.name}, `;
                      }
                      return genre.name;
                    })}
                  </Typography>
                  <Typography variant="body1" style={{ margin: "0px 8px" }}>
                    |
                  </Typography>
                  <Typography variant="body1">
                    Rating: {movieDetails.vote_average}
                  </Typography>
                  <Typography variant="body1" style={{ margin: "0px 8px" }}>
                    |
                  </Typography>
                  <Typography variant="body1">
                    Run Time: {movieDetails.runtime} minutes
                  </Typography>
                </div>
              </div>
              <div className={classes.detailSection}>
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body1">{movieDetails.overview}</Typography>
              </div>
              <div className={classes.detailSection}>
                <FavoriteIcon
                  fontSize="large"
                  color="secondary"
                  className={classes.actionIcon}
                />
                <PlaylistPlayIcon
                  fontSize="large"
                  className={classes.actionIcon}
                />
                <ThumbDownIcon
                  fontSize="large"
                  className={classes.actionIcon}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      ;
    </Container>
  );
};

export default MovieDetails;
