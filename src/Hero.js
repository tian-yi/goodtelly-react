import React from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: (props) => ({
    height: "320px",
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `linear-gradient(to right, rgb(3, 7, 65, 02), rgb(0, 0, 0, 0.6) 70%), url("${props.image}")`,
  }),
}));

const Hero = ({ heroImageURL, children }) => {
  const classes = useStyles({ image: heroImageURL });

  return <div className={classes.hero}>{children}</div>;
};

Hero.propTypes = {
  heroImageURL: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Hero;
