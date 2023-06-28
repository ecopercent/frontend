import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import TabBar from "./tabBar/TabBar";

import * as S from "../style";

const PrivateLayout = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return <Navigate to="/home" />;

  // TEST: 기기 확인을 위한 임시 표시
  const isPc = useMediaQuery({
    query: "(min-width:471px)",
  });

  return (
    <S.PageLayout>
      <S.Layout>
        <h3 style={{ position: "absolute", left: 20 }}>
          {isPc ? "pc" : "mobile"}
        </h3>
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
