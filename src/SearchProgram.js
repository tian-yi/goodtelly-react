import React, { useState, useEffect } from "react";

import propTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import { fetchData } from "./api";
import { TMDB_IMAGE_URL } from "./config";
import PopularList from "./PopularList";
import Hero from "./Hero";

const SearchProgram = ({ defaultUrl, searchUrl, title }) => {
  const [heroImage, setHeroImage] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await fetchData(defaultUrl);
      const movies = result.results;
      setItems(movies);
      const randomTopItemImage =
        movies[parseInt(Math.random() * Math.floor(10), 10)].backdrop_path;

      setHeroImage(`${TMDB_IMAGE_URL}/w1280${randomTopItemImage}`);
    };

    fetchMovies();
  }, [defaultUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchData(`${searchUrl}&query=${search}`);
    const searchResults = result.results;
    setItems(searchResults);
    setSearch("");
  };
  return (
    <Container maxWidth="lg">
      <Hero image={heroImage}>
        <form noValidate style={{ width: "100%" }} onSubmit={handleSubmit}>
          <FormControl
            style={{
              opacity: 0.9,
              width: "40%",
              background: "white",
              borderRadius: 8,
              padding: 16,
            }}
          >
            <TextField
              autoComplete="off"
              variant="outlined"
              id="search"
              label={`Search ${title}`}
              name="Search"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </FormControl>
        </form>
      </Hero>
      <Box mt={2}>
        <PopularList
          items={items}
          title={search === "" ? `${title}s` : `Search Results for ${search}`}
        />
      </Box>
    </Container>
  );
};

SearchProgram.propTypes = {
  defaultUrl: propTypes.string.isRequired,
  searchUrl: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};
export default SearchProgram;
