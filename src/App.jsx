import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import GlobalStyles from "./style";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import PrivateRouter from "./PrivateRouter";

const Login = loadable(() => {
  return import("src/pages/login/Login");
});
const ItemEdit = loadable(() => {
  return import("src/pages/itemModification/ItemEdit/ItemEdit");
});
const ItemAdd = loadable(() => {
  return import("src/pages/itemModification/ItemAdd/ItemAdd");
});
const SignUp = loadable(() => {
  return import("src/components/SignUp/SignUp");
});
const Error = loadable(() => {
  return import("src/pages/error/Error");
});
const SignOut = loadable(() => {
  return import("src/pages/error/TokenExpiration");
});

function App() {
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const { authenticated } = useContext(AuthenticatedContext);

  return (
    <>
      <GlobalStyles />
      {authenticated ? (
        <PrivateRouter />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/item/edit" element={<ItemEdit />} />
            <Route path="/item/add" element={<ItemAdd />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
