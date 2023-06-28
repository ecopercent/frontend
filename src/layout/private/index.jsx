import React from "react";
import { Outlet } from "react-router-dom";

import TabBar from "@components/TabBar/TabBar";

import { Pc, Mobile } from "../MediaQuery";
import * as S from "../style";

const PrivateLayout = () => {
  return (
    <S.PageLayout>
      <Pc>
        <S.PcLayout>
          <h3 style={{ position: "absolute", left: 20 }}>pc</h3>
          <S.PcPageWrap>
            <Outlet />
          </S.PcPageWrap>
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
