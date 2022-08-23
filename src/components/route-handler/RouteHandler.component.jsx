import React from "react";
import {Route, Routes} from "react-router";
import ProtectedRoute from "../protected-route/ProtectedRoute.component";
import Home from "../../pages/home/HomePage.component";
import Login from "../../pages/auth/LoginPage.component";
import PageNotFound from "../../pages/not-found/PageNotFound.component";


const RouteHandler = () => {
  return (
    <Routes>
      <Route index element={<ProtectedRoute nav="/login"><Home/></ProtectedRoute>}/>
      <Route exact path="/home" element={<ProtectedRoute nav="/login"><Home/></ProtectedRoute>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default RouteHandler
