import React from "react";
import { Outlet } from "react-router-dom";

import { Pc, Mobile } from "../mediaQuery";
import * as S from "../style";

const PublicLayout = () => {
  return (
    <S.PageLayout>
      <Pc>
        <S.PcLayout>
          <h3 style={{ position: "absolute", left: 20 }}>pc</h3>
          <S.PcPageWrap>
            <Outlet />
          </S.PcPageWrap>
        </S.PcLayout>
      </Pc>
      <Mobile>
        <S.MobileLayout>
          <h3 style={{ position: "absolute", left: 20 }}>모바일</h3>
          <S.MobilePageWrap>
            <Outlet />
          </S.MobilePageWrap>
        </S.MobileLayout>
      </Mobile>
    </S.PageLayout>
  );
};

export default PublicLayout;
