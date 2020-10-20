import React from "react";

import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { ReactComponent as Logo } from "./static/images/goodtelly-logo.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolBar: {
    minHeight: "72px",
  },
  logo: {
    margin: `0px ${theme.spacing(2)}px`,
  },
  nav: { display: "flex" },
  navTitle: {
    ...theme.typography.body1,
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
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.logo}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <nav className={classes.nav}>
          <Container maxWidth="lg">
            <Button
              className={classes.navTitle}
              component={NavLink}
              to="/movie"
              activeClassName={classes.activeNavTitle}
            >
              Movies
            </Button>
            <Button
              className={classes.navTitle}
              component={NavLink}
              to="/tv"
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
