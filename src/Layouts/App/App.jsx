// import logo from './logo.svg';
import React, { useContext, useReducer } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import SignUpItemContext from "@hooks/SignUpItemContext";
import signUpItemReducer from "@hooks/signUpItemReducer";
import RequireAuth from "@hooks/RequireAuth";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
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
  return import("@pages/ItemModification/ItemEdit/ItemEdit");
});
const ItemAdd = loadable(() => {
  return import("@pages/ItemModification/ItemAdd/ItemAdd");
});
const SignUp = loadable(() => {
  return import("@components/SignUp/SignUp");
});
const Welcome = loadable(() => {
  return import("@components/SignUp/Welcome");
});

function App() {
  const [state, dispatch] = useReducer(signUpItemReducer, {
    tumbler: null,
    ecobag: null,
  });
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const signUpItemContext = { state, dispatch };

  // TEST: 확인용 로그
  console.log(useContext(AuthenticatedContext));

  return (
    <>
      <GlobalStyles />
      <SignUpItemContext.Provider value={signUpItemContext}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/*" element={<Error />} />
            <Route path="/item/edit" element={<ItemEdit />} />
            <Route path="/item/add" element={<ItemAdd />} />
            <Route
              path="/:page"
              element={
                <RequireAuth>
                  <Main />
                </RequireAuth>
              }
            />
            <Route
              path="/:page/:subPage"
              element={
                <RequireAuth>
                  <Main />
                </RequireAuth>
              }
            />
            <Route
              path="/:page/:subPage/:accountDeletePage"
              element={
                <RequireAuth>
                  <Main />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </SignUpItemContext.Provider>
    </>
  );
}

export default App;
