import React from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const IMAGE_URL = "https://image.tmdb.org/t/p/w780/";

const useStyles = makeStyles((theme) => ({
  card: {
    heigth: "100%",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    borderRadius: 2,
  },

  link: {
    textDecoration: "none",
  },
  sectionTitle: { marginBottom: theme.spacing(2) },
}));

function PopularList({ items, listTitle }) {
  const classes = useStyles();

  return (
    <Box component={Paper} p={2} marginBottom={2}>
      <Typography variant="h5" className={classes.sectionTitle}>
        {listTitle}
      </Typography>

      <Grid container spacing={1}>
        {items.map((item) => {
          const title = item.title ? item.title : item.name;
          return (
            <Grid item xs={12} md={4} lg={3} key={item.id}>
              <Link
                to={item.title ? `/movie/${item.id}` : `/tv/${item.id}`}
                className={classes.link}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${IMAGE_URL}${item.backdrop_path}`}
                    title={title}
                  />
                  <CardContent>
                    <Typography variant="body1">{title}</Typography>
                    <Typography variant="subtitle2">
                      Rating: {item.vote_average}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

PopularList.propTypes = {
  items: PropTypes.array.isRequired,
  listTitle: PropTypes.string,
};

export default PopularList;
