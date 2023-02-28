// import logo from './logo.svg';
import React from "react"
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';


const Login = loadable(() => import ("../../layouts/Login/Login")) ;
const Home = loadable(() => import ('../../layouts/Home/Home') );
const Error = loadable(() => import ('../../layouts/Error/Error') );

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
