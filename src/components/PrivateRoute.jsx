/* Renders pages with private routes if user is valid */

import React from "react";
import { store } from "../store/store";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isValidUser = store((state) => {
    return state.isValidUser;
  });

  if (!isValidUser) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
