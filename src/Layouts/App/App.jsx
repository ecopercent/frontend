// import logo from './logo.svg';
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import GlobalStyles from "./style";
import { Pc, Mobile } from "../MediaQuery";

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
      <Pc>
        <div id="pc" style={{ width: "500px", margin: "0 auto" }}>
          <h3>pc</h3>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/main/:page" element={<Main />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Pc>
      <Mobile>
        <h3>모바일</h3>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main/:page" element={<Main />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Mobile>
    </>
  );
}

export default App;
