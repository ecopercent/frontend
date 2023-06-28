import React from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import * as S from "../style";

const PublicLayout = () => {
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
        <S.OutletWrapper>
          <Outlet />
        </S.OutletWrapper>
      </S.Layout>
    </S.PageLayout>
  );
};

export default PublicLayout;
