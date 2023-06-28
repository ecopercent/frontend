import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import { useAxiosInterceptor } from "@hooks/useAxiosInterceptor";

const Main = loadable(() => {
  return import("src/layouts/Main/Main");
});
const ItemEdit = loadable(() => {
  return import("src/pages/itemModification/ItemEdit/ItemEdit");
});
const ItemAdd = loadable(() => {
  return import("src/pages/itemModification/ItemAdd/ItemAdd");
});
const TokenExpiration = loadable(() => {
  return import("src/pages/error/TokenExpiration");
});

export default function PrivateRouter() {
  useAxiosInterceptor();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:page" element={<Main />} />
        <Route path="/:page/:subPage" element={<Main />} />
        <Route path="/:page/:subPage/:accountDeletePage" element={<Main />} />
        <Route path="/item/edit" element={<ItemEdit />} />
        <Route path="/item/add" element={<ItemAdd />} />
        <Route path="/signout" element={<TokenExpiration />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
