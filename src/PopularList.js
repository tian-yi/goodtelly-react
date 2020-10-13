import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import { TMDB_IMAGE_URL } from "./config";

const useStyles = makeStyles({
  card: {
    height: "100%;",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
});

const PopularList = ({ url, title }) => {
  const classes = useStyles();
  const [popularItems, setPopularItems] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPopularItems(result.results.slice(0, 8));
      });
  }, [url]);

  return (
    <Box component={Paper} p={2} marginBottom={2}>
      <Box mb={2}>
        <Typography variant="h5">{title}</Typography>
      </Box>

      <Grid container spacing={2}>
        {popularItems.map((item) => (
          <Grid item xs={12} md={4} lg={3} key={item.id}>
            <Card
              className={classes.card}
              component={Link}
              to={`/movie/${item.id}`}
            >
              <CardMedia
                className={classes.cardMedia}
                image={`${TMDB_IMAGE_URL}/w300/${item.backdrop_path}`}
                title={item.title}
              />
              <CardContent>
                <Typography variant="body1">
                  {item.title ? item.title : item.original_name}
                </Typography>
                <Typography variant="subtitle2">
                  Rating: {item.vote_average}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

PopularList.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default PopularList;
