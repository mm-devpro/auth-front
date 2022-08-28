import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({ user, children }) => {

  if (!user || !user.email) {
    // user is not authenticated
    return <Navigate to="/"/>;
  }
  // user is authenticated
  return children;
};

export default ProtectedRoute
