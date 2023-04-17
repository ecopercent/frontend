// import logo from './logo.svg';
import React, { useReducer } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import GlobalStyles from "./style";
import SignUpItemContext from "../../hooks/SignUpItemContext";
import signUpItemReducer from "../../hooks/signUpItemReducer";

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
const Welcome = loadable(() => {
  return import("../../Components/SignUp/Welcome");
});

function App() {
  const [state, dispatch] = useReducer(signUpItemReducer, {
    tumbler: null,
    ecobag: null,
  });
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const signUpItemContext = { state, dispatch };

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
            <Route path="/:page" element={<Main />} />
            <Route path="/*" element={<Error />} />
            <Route path="/item/edit" element={<ItemEdit />} />
            <Route path="/item/add" element={<ItemAdd />} />
          </Routes>
        </BrowserRouter>
      </SignUpItemContext.Provider>
    </>
  );
}

export default App;
