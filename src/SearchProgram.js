import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import { TMDB_IMAGE_URL } from "./config";
import PopularList from "./PopularList";
import Hero from "./Hero";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  formControl: {
    opacity: 0.9,
    width: "35%",
    background: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

const SearchProgram = ({ popularPrograms, searchURL, title }) => {
  const [programs, setPrograms] = useState(popularPrograms);
  const [heroImageURL, setHeroImageURL] = useState("");
  const [searchText, setSearchText] = useState("");
  const [sectionTitle, setSectionTitle] = useState(`Popular ${title}`);

  useEffect(() => {
    const randomProgramIndex = parseInt(Math.random() * 10, 10);
    if (popularPrograms.length > 0) {
      const randomTopProgramImage =
        popularPrograms[randomProgramIndex].backdrop_path;
      setHeroImageURL(`${TMDB_IMAGE_URL}w1280/${randomTopProgramImage}`);
    }
    setPrograms(popularPrograms);
  }, [popularPrograms]);

  const classes = useStyles();

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`${searchURL}&query=${searchText}`)
      .then((response) => response.json())
      .then((result) => {
        setPrograms(result.results);
      });
    setSectionTitle(`Search results for ${searchText}`);
  };
  return (
    <>
      <Hero heroImageURL={heroImageURL}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSearch}
          className={classes.form}
        >
          <FormControl className={classes.formControl}>
            <TextField
              id="search"
              label="Search"
              type="search"
              variant="outlined"
              placeholder={`${title} names`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </FormControl>
        </form>
      </Hero>
      <Box my={2}>
        <PopularList items={programs} listTitle={sectionTitle} />
      </Box>
    </>
  );
};

SearchProgram.propTypes = {
  popularPrograms: PropTypes.array.isRequired,
  searchURL: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default SearchProgram;
