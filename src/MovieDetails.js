import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
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

const MovieDetails = () => {
  let { id } = useParams();
  console.log(id);
  return <Box>Details</Box>;
};

export default MovieDetails;
