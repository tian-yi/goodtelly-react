import React from "react";

import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { ReactComponent as Logo } from "./static/images/goodtelly-logo.svg";

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
  nav: {
    display: "flex",
  },
  navTitle: {
    ...theme.typography.body,
    marginRight: theme.spacing(2),
  },
  activeNavTitle: {
    ...theme.typography.h6,
    color: theme.palette.primary.main,
  },
}));

const TopNav = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar} component={Paper}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <nav className={classes.nav}>
          <Container>
            <Button
              component={NavLink}
              to="/movie"
              className={classes.navTitle}
              activeClassName={classes.activeNavTitle}
            >
              Movies
            </Button>
            <Button
              component={NavLink}
              to="/tv"
              className={classes.navTitle}
              activeClassName={classes.activeNavTitle}
            >
              TV Shows
            </Button>
          </Container>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
