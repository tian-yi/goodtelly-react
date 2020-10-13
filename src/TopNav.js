import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";

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
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

const TopNav = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar} component={Paper}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav className={classes.nav}>
          <Typography variant="h6" className={classes.navTitle}>
            Movies
          </Typography>
          <Typography variant="h6" className={classes.navTitle}>
            TV Shows
          </Typography>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
