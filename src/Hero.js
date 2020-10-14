import React from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: (props) => ({
    height: 320,
    borderRadius: 4,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `
    linear-gradient(to right,rgba(3, 7, 65, 0.2), rgba(0, 0, 0, 0.6) 70%), url("${props.image}")`,
  }),
}));

const Hero = ({ image, children }) => {
  const classes = useStyles({ image });
  return <div className={classes.hero}>{children}</div>;
};

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Hero;
