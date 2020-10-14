import React from "react";

import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: (props) => ({
    height: 400,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `
    linear-gradient(to right,rgba(3, 7, 65, 0.2), rgba(0, 0, 0, 0.6) 70%), url("${props.image}")`,
  }),
}));

const Hero = ({ image }) => {
  const classes = useStyles({ image });
  return (
    <div className={classes.hero}>
      <Box mb={2}>
        <Typography variant="h1" style={{ color: "white" }}>
          Welcome
        </Typography>
      </Box>
      <Typography variant="h4" style={{ color: "white" }}>
        Share your favourte your Movie and TV Shows with your family and
        friends.
      </Typography>
    </div>
  );
};

Hero.porpTypes = {
  image: PropTypes.string.isRequired,
};
export default Hero;
