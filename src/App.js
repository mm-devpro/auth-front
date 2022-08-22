import React, {useEffect} from 'react';
import { Routes, Route, matchPath, matchRoutes } from "react-router";

import Home from './pages/home/HomePage.component';
import Login from "./pages/login/LoginPage.component";
import PageNotFound from "./pages/not-found/PageNotFound.component";


import './App.css';


const App = () => {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="*" element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
