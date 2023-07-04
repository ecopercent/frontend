import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import NabBar from "./navBar/NabBar";

import * as S from "../style";

const PrivateLayout = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return <Navigate to="/home" />;

  return (
    <S.PageLayout>
      <S.Layout>
        <S.OutletWrapper fixedWidth>
          <Outlet />
        </S.OutletWrapper>
        <S.FooterWrap>
          <NabBar />
        </S.FooterWrap>
      </S.Layout>
    </S.PageLayout>
  );
};

export default PrivateLayout;
