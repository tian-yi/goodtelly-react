import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    const movie_detail_url = `https://api.themoviedb.org/3/movie/${id}?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false&append_to_response=credits`;
    fetch(movie_detail_url)
      .then((response) => response.json())
      .then((result) => {
        setMovieDetail(result);
      });
  }, [id]);

  return (
    <div>
      <pre>{JSON.stringify(movieDetail, undefined, 2)}</pre>
    </div>
  );
};

export default MovieDetails;
