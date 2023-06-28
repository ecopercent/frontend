import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import { useAxiosInterceptor } from "@hooks/useAxiosInterceptor";
import { Home, Item } from "@pages";
import { PrivateLayout } from "@layout";

const ItemEdit = loadable(() => {
  return import("src/pages/itemModification/ItemEdit/ItemEdit");
});
const ItemAdd = loadable(() => {
  return import("src/pages/itemModification/ItemAdd/ItemAdd");
});
const TokenExpiration = loadable(() => {
  return import("@pages/expire/TokenExpiration");
});

export default function PrivateRouter() {
  useAxiosInterceptor();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateLayout />}>
          <Route index element={<Home />} />
          <Route path="/item" element={<Item />} />
          {/* <Route path="/:page" element={<Main />} /> */}
          {/* <Route path="/:page/:subPage" element={<Main />} /> */}
          {/* <Route path="/:page/:subPage/:accountDeletePage" element={<Main />} /> */}
          <Route path="/signout" element={<TokenExpiration />} />
          {/* <Route path="/" element={<Main />} /> */}
          {/* TODO: 아이템 조작 관련 페이지 모달로 바뀔 예정 */}
          <Route path="/item/edit" element={<ItemEdit />} />
          <Route path="/item/add" element={<ItemAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
