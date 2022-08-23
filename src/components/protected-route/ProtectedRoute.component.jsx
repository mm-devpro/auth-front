import React from "react";
import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({ nav, children }) => {
  const {user} = useSelector(state => state.user)
  if (!user || !user.email) {
    // user is not authenticated
    return <Navigate to={nav}/>;
  }
  // user is authenticated
  return children;
};

export default ProtectedRoute
