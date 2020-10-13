import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { ReactComponent as Logo } from "./static/images/goodtelly-logo.svg";
import { POPULAR_MOVIES_URL, POPULAR_TV_SHOWS_URL } from "./config";
import PopularList from "./PopularList";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFF",
  },
  logo: {
    marginRight: theme.spacing(4),
  },
  toolbar: {
    minHeight: "72px",
  },
  title: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  nav: {
    display: "flex",
  },
  container: { marginTop: theme.spacing(2) },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar} component={Paper}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo}>
            <Logo />
          </div>
          <nav className={classes.nav}>
            <Typography variant="h6" className={classes.title}>
              Movies
            </Typography>
            <Typography variant="h6" className={classes.title}>
              TV Shows
            </Typography>
          </nav>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className={classes.container}>
        <PopularList url={POPULAR_MOVIES_URL} title="Popular Movies" />
        <PopularList url={POPULAR_TV_SHOWS_URL} title="Popular TV Shows" />
      </Container>
    </div>
  );
}

export default App;
