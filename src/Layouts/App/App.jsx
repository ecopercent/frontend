// import logo from './logo.svg';
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import GlobalStyles from "./style";

const Login = loadable(() => {
  return import("../Login/Login");
});
const Main = loadable(() => {
  return import("../Main/Main");
});
const Error = loadable(() => {
  return import("../Error/Error");
});

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main/:page" element={<Main />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
