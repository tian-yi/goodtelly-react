import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import placeholder from "./static/images/image-placeholder.png";
import { TMDB_API_URL, DEFAULT_QUERY, TMDB_IMAGE_URL } from "./config";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

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
  castCard: {
    maxWidth: "185px",
  },
  castCardMedia: {
    height: 277,
  },
}));

const MovieDetails = () => {
  let { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    backdrop_path: "",
    genres: [],
    credits: { cast: [], crew: [] },
  });
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const classes = useStyles(movieDetails);
  useEffect(() => {
    fetch(
      `${TMDB_API_URL}/movie/${id}${DEFAULT_QUERY}&append_to_response=credits`
    )
      .then((response) => response.json())
      .then((result) => {
        setMovieDetails(result);
        setCast(result.credits.cast);
        setCrew(
          result.credits.crew.filter(
            (crewMember) =>
              crewMember.job === "Director" ||
              crewMember.job === "Writer" ||
              crewMember.job === "Screenplay" ||
              crewMember.job === "Executive Producer"
          )
        );
      });
  }, [id]);

  const getImageUrl = (imagePath, size) => {
    if (imagePath) {
      return `${TMDB_IMAGE_URL}/w${size}/${imagePath}`;
    } else {
      return placeholder;
    }
  };
  console.log(movieDetails);
  return (
    <Container maxWidth="lg">
      <Paper className={classes.hero}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <Card className={classes.card}>
              <CardMedia
                style={{ borderRadius: 2 }}
                className={classes.cardMedia}
                image={getImageUrl(movieDetails.poster_path, 300)}
                title={movieDetails.title}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <div className={classes.details}>
              <div className={classes.detailSection}>
                <Typography variant="h4">{movieDetails.title}</Typography>
                {movieDetails.tagline && (
                  <Typography variant="caption" display="block" gutterBottom>
                    <i>{movieDetails.tagline}</i>
                  </Typography>
                )}
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
      </Paper>

      <Box component={Paper} p={2} marginY={4}>
        <Box mb={2}>
          <Typography variant="h5">Cast</Typography>
        </Box>
        <Grid container spacing={1}>
          {cast.slice(0, 6).map((castMember) => (
            <Grid item xs={6} md={3} lg={2} key={castMember.id}>
              <Card className={classes.castCard}>
                <CardMedia
                  style={{ borderRadius: 2 }}
                  className={classes.castCardMedia}
                  image={getImageUrl(castMember.profile_path, 185)}
                  title={castMember.name}
                />
                <CardContent style={{ paddingBottom: 16 }}>
                  <Typography variant="body1">{castMember.name}</Typography>
                  <Typography variant="caption">
                    {castMember.character}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box component={Paper} p={2} marginY={4}>
        <Box mb={2}>
          <Typography variant="h5">Crew</Typography>
        </Box>
        <Grid container spacing={1}>
          {crew.slice(0, 6).map((crewMember) => (
            <Grid item xs={6} md={3} lg={2} key={crewMember.id}>
              <Card className={classes.castCard}>
                <CardMedia
                  style={{ borderRadius: 2 }}
                  className={classes.castCardMedia}
                  image={getImageUrl(crewMember.profile_path, 185)}
                  title={crewMember.name}
                />
                <CardContent style={{ paddingBottom: 16 }}>
                  <Typography variant="body1">{crewMember.name}</Typography>
                  <Typography variant="caption">{crewMember.job}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MovieDetails;
