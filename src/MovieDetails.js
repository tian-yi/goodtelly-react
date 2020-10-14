import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Box from "@material-ui/core/Box";

import { TMDB_API_URL, DEFAULT_QUERY } from "./config";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    fetch(
      `${TMDB_API_URL}/movie/${id}${DEFAULT_QUERY}&append_to_response=credits`
    )
      .then((response) => response.json())
      .then((result) => setMovieDetails(result));
  }, [id]);
  return (
    <Box>
      <pre>
        <code>{JSON.stringify(movieDetails, undefined, 2)}</code>
      </pre>
    </Box>
  );
};

export default MovieDetails;
