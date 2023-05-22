import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const Main = loadable(() => {
  return import("@layout/Main/Main");
});
const ItemEdit = loadable(() => {
  return import("@pages/ItemModification/ItemEdit/ItemEdit");
});
const ItemAdd = loadable(() => {
  return import("@pages/ItemModification/ItemAdd/ItemAdd");
});
const SignOut = loadable(() => {
  return import("@layout/Error/SignOut");
});

export default function PrivateRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:page" element={<Main />} />
        <Route path="/:page/:subPage" element={<Main />} />
        <Route path="/:page/:subPage/:accountDeletePage" element={<Main />} />
        <Route path="/item/edit" element={<ItemEdit />} />
        <Route path="/item/add" element={<ItemAdd />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
