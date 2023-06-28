import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import TabBar from "./tabBar/TabBar";

import { Pc, Mobile } from "../mediaQuery";
import * as S from "../style";

const PrivateLayout = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return <Navigate to="/home" />;

  return (
    <S.PageLayout>
      <Pc>
        <S.PcLayout>
          <h3 style={{ position: "absolute", left: 20 }}>pc</h3>
          <S.PcWidthFixedWrapper>
            <Outlet />
          </S.PcWidthFixedWrapper>
          <S.FooterWrap>
            <TabBar />
          </S.FooterWrap>
        </S.PcLayout>
      </Pc>
      <Mobile>
        <S.MobileLayout>
          <h3 style={{ position: "absolute", left: 20 }}>모바일</h3>
          <S.MobilePageWrap>
            <Outlet />
          </S.MobilePageWrap>
          <S.FooterWrap>
            <TabBar />
          </S.FooterWrap>
        </S.MobileLayout>
      </Mobile>
    </S.PageLayout>
  );
};

export default PrivateLayout;
