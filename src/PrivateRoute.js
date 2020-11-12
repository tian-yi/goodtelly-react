import React from "react";

import PropTypes from "prop-types";
import { Route, Redirect, useLocation } from "react-router-dom";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

export default function PrivateRoute({ isAuthenticated, children, ...rest }) {
  const location = useLocation();
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return <Route {...rest}>{children}</Route>;
  }

  return (
    <Redirect
      to={{
        pathname: "/signin",
        state: { from: location },
      }}
    />
  );
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
