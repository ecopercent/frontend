import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const Main = loadable(() => {
  return import("@layout/Main/Main");
});

export default function PrivateRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:page" element={<Main />} />
        <Route path="/:page/:subPage" element={<Main />} />
        <Route path="/:page/:subPage/:accountDeletePage" element={<Main />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
