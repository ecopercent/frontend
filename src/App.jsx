import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import { useAxiosInterceptor } from "@hooks/useAxiosInterceptor";

import { Home, Item, Setting, Login, SignUp, Error } from "@pages";
import { PrivateLayout, PublicLayout } from "@layout";

import GlobalStyles from "./style";

const Expire = loadable(() => {
  return import("@pages/expire");
});

// TODO: 모달로 변경될 예정, 변경되면 components 디렉토리로 이동하기!
const ItemEdit = loadable(() => {
  return import("src/pages/itemModification/ItemEdit/ItemEdit");
});
const ItemAdd = loadable(() => {
  return import("src/pages/itemModification/ItemAdd/ItemAdd");
});

function App() {
  const { authenticated } = useContext(AuthenticatedContext);

  return (
    <>
      <GlobalStyles />
      {authenticated ? <PrivateRouter /> : <PublicRouter />}
    </>
  );
}

function PrivateRouter() {
  useAxiosInterceptor();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/item" element={<Item />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/expire" element={<Expire />} />
          <Route path="/*" element={<Error />} />
          {/* TODO: 아이템 조작 관련 페이지 모달로 바뀔 예정 */}
          <Route path="/item/edit" element={<ItemEdit />} />
          <Route path="/item/add" element={<ItemAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/expire" element={<Expire />} />
          <Route path="/*" element={<Error />} />
          {/* TODO: 아이템 조작 관련 페이지 모달로 바뀔 예정 */}
          <Route path="/item/edit" element={<ItemEdit />} />
          <Route path="/item/add" element={<ItemAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
