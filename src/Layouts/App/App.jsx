// import logo from './logo.svg';
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

const Login = loadable(() => {
  return import("../Login/Login");
});
const Home = loadable(() => {
  return import("../Home/Home");
});
const Error = loadable(() => {
  return import("../Error/Error");
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
