import React, { useContext, useReducer } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import SignUpItemContext from "@hooks/SignUpItemContext";
import signUpItemReducer from "@hooks/signUpItemReducer";
import GlobalStyles from "./style";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import PrivateRouter from "@layout/App/PrivateRouter";

const Login = loadable(() => {
  return import("../Login/Login");
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
const Error = loadable(() => {
  return import("../Error/Error");
});
const SignOut = loadable(() => {
  return import("@layout/Error/SignOut");
});

function App() {
  const [state, dispatch] = useReducer(signUpItemReducer, {
    tumbler: null,
    ecobag: null,
  });
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const signUpItemContext = { state, dispatch };
  const { authenticated } = useContext(AuthenticatedContext);

  return (
    <>
      <GlobalStyles />
      <SignUpItemContext.Provider value={signUpItemContext}>
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
      </SignUpItemContext.Provider>
    </>
  );
}

export default App;
