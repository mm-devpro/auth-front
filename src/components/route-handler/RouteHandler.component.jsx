import React from "react";
import {Route, Routes} from "react-router";
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import ProtectedRoute from "../protected-route/ProtectedRoute.component";
import Home from "../../pages/home/HomePage.component";
import Login from "../../pages/auth/LoginPage.component";
import Stream from '../../pages/stream/StreamPage.component';
import PageNotFound from "../../pages/not-found/PageNotFound.component";


const RouteHandler = () => {
  const {user} = useSelector(state => state.user)
  console.log(user)
  return (
    <Routes>
      <Route index element={<ProtectedRoute user={user}><Home/></ProtectedRoute>}/>
      <Route exact path="/home" element={<ProtectedRoute user={user}><Home/></ProtectedRoute>}/>
      <Route exact path="/stream" element={<Stream/>}/>
      <Route exact path="/login" element={
        <div>
          {
            !user
              ? <Login/>
              : <Navigate to="/home" />
          }
        </div>
      }/>
      <Route exact path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default RouteHandler
