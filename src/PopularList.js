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
  },
  sectionTitle: { padding: theme.spacing(2) },
}));

function PopularList({ items, listTitle }) {
  const classes = useStyles();

  return (
    <Box p={4} component={Paper}>
      <Typography variant="h5" className={classes.sectionTitle}>
        {listTitle}
      </Typography>

      <Grid container spacing={2}>
        {items.map((item) => {
          const title = item.title ? item.title : item.name;
          return (
            <Grid item xs={12} md={4} lg={3} key={item.id}>
              <Card
                className={classes.card}
                component={Link}
                to={item.title ? `/movie/${item.id}` : `/tv/${item.id}`}
              >
                <CardMedia
                  className={classes.cardMedia}
                  image={`${IMAGE_URL}${item.backdrop_path}`}
                  title={title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                </CardContent>
              </Card>
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
