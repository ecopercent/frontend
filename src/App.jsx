import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import GlobalStyles from "./style";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import PrivateRouter from "./PrivateRouter";
import { Login, SignUp, Error } from "@pages";

// TODO: 모달로 변경될 예정, 변경되면 components 디렉토리로 이동하기!
const ItemEdit = loadable(() => {
  return import("src/pages/itemModification/ItemEdit/ItemEdit");
});
const ItemAdd = loadable(() => {
  return import("src/pages/itemModification/ItemAdd/ItemAdd");
});
const Expire = loadable(() => {
  return import("@pages/expire");
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
            <Route path="/expire" element={<Expire />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
