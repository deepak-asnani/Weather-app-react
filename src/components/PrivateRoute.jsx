/* Renders pages with private routes if user is valid */

import React from "react";
import { Navigate } from "react-router-dom";
import { getJSONParsedData } from "../helpers.js";
import { store } from "../store/store.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isValidUser =
    store((state) => {
      return state.isValidUser;
    }) || getJSONParsedData("userAuth", "token");

  if (!isValidUser) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
