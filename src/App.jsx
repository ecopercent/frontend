import React, { useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

import { Home, Item, Setting, Login, SignUp, Error } from "@pages";
import { PrivateLayout, PublicLayout } from "@layout";

import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import { useAxiosInterceptor } from "@hooks/useAxiosInterceptor";
import isiPhoneOriPad from "@util/userAgent";

import GlobalStyles from "./style";

const Expire = loadable(() => {
  return import("@pages/expire");
});

// TODO: 모달로 변경될 예정, 변경되면 삭제!
const ItemEdit = loadable(() => {
  return import("@pages/item/components/modification/ItemEdit/ItemEdit");
});
const ItemAdd = loadable(() => {
  return import("@pages/item/components/modification/ItemAdd/ItemAdd");
});

function App() {
  const { authenticated } = useContext(AuthenticatedContext);

  useEffect(() => {
    if (isiPhoneOriPad())
      // TODO: 앱스토어 주소 나오면 url 변경
      window.location.href =
        "https://apps.apple.com/kr/app/%ED%95%9C%EB%93%A4/id1619947572";
  }, []);

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
          <Route path="/setting/:subPage" element={<Setting />} />
          <Route
            path="/setting/:subPage/:accountDeletePage"
            element={<Setting />}
          />
          {/* TODO: 아이템 조작 관련 페이지 모달로 바뀔 예정 */}
          <Route path="/item/edit" element={<ItemEdit />} />
          <Route path="/item/add" element={<ItemAdd />} />
        </Route>
        <Route path="/expire" element={<Expire />} />
        <Route path="/*" element={<Error />} />
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
