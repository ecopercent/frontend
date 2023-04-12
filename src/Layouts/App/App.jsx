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
const ItemEdit = loadable(() => {
  return import("../../Pages/ItemModification/ItemEdit/ItemEdit");
});
const ItemAdd = loadable(() => {
  return import("../../Pages/ItemModification/ItemAdd/ItemAdd");
});
const SignUp = loadable(() => {
  return import("../../Components/SignUp/SignUp");
});

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:page" element={<Main />} />
          <Route path="/:page/:subPage" element={<Main />} />
          <Route path="/:page/:subPage/:accountDeletePage" element={<Main />} />
          <Route path="/*" element={<Error />} />
          <Route path="/item/edit" element={<ItemEdit />} />
          <Route path="/item/add" element={<ItemAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
