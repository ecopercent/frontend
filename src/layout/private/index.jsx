import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import TabBar from "./tabBar/TabBar";

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
          <TabBar />
        </S.FooterWrap>
      </S.Layout>
    </S.PageLayout>
  );
};

export default PrivateLayout;
