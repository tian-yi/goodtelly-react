import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import { getProgramDetailsURL, TMDB_IMAGE_URL } from "../config";
import Placeholder from "../static/images/image-placeholder.png";

export const getImageURL = (imagePath, size) => {
  if (imagePath) {
    return `${TMDB_IMAGE_URL}w${size}/${imagePath}`;
  } else {
    return Placeholder;
  }
};

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

  castCard: {
    maxWidth: "185px",
  },
  castCardMedia: {
    height: 277,
  },
}));

const Separator = () => {
  return (
    <Typography variant="body1" style={{ margin: "0px 8px" }}>
      |
    </Typography>
  );
};
const ProgramDetails = ({ programType }) => {
  const { id } = useParams();
  const [programDetails, setprogramDetails] = useState({
    title: "",
    poster_path: "",
    backdrop_path: "",
    genres: [],
    credits: { cast: [], crew: [] },
  });
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const programDetailsURL = getProgramDetailsURL(programType, id);
    fetch(programDetailsURL)
      .then((response) => response.json())
      .then((result) => {
        setprogramDetails(result);
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
  }, [id, programType]);

  const classes = useStyles({
    image: getImageURL(programDetails.backdrop_path, 1280),
  });

  return (
    <Container maxWidth="lg">
      <Paper className={classes.hero}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={getImageURL(programDetails.poster_path, 780)}
                title={programDetails.title}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <div className={classes.details}>
              <Typography variant="h4">
                {programDetails.title
                  ? programDetails.title
                  : programDetails.name}
              </Typography>
              {programDetails.tagline ? (
                <Typography variant="caption">
                  <i>{programDetails.tagline}</i>
                </Typography>
              ) : null}

              <div style={{ display: "flex" }}>
                <Typography variant="body1">
                  Release date: {programDetails.release_date}
                </Typography>
                <Separator />
                <Typography variant="body1">
                  Genre:{" "}
                  {programDetails.genres.map((genre, index, arr) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index < arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <Typography variant="body1">
                  Rating: {programDetails.vote_average}
                </Typography>
                <Separator />
                <Typography variant="body1">
                  Run time: {programDetails.runtime} Mins
                </Typography>
              </div>

              <Box mt={4}>
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body1">
                  {programDetails.overview}{" "}
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
                  image={getImageURL(castMember.profile_path, 185)}
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
                  image={getImageURL(crewMember.profile_path, 185)}
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

ProgramDetails.propTypes = {
  programType: PropTypes.string.isRequired,
};
export default ProgramDetails;
