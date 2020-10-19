import React from "react";

import PropTypes from "prop-types";
import { Route, Redirect, useLocation } from "react-router-dom";

const PrivateRoute = ({ auth, children, ...rest }) => {
  const location = useLocation();
  if (auth) {
    return <Route {...rest}>{children}</Route>;
  }

  return (
    <Redirect
      to={{
        pathname: "/signup",
        state: { from: location },
      }}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default PrivateRoute;
