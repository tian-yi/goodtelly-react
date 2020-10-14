import React from "react";

import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { ReactComponent as Logo } from "./static/images/goodtelly-logo.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolBar: {
    minHeight: "72px",
  },
  navTitle: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  logo: {
    margin: `0px ${theme.spacing(2)}px`,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logo}>
            <Logo />
          </div>
          <Typography variant="h6" className={classes.navTitle}>
            Movies
          </Typography>
          <Typography variant="h6" className={classes.navTitle}>
            TV Shows
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
