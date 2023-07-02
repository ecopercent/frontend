import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "../style";

const PublicLayout = () => {
  return (
    <S.PageLayout>
      <S.Layout>
        <S.OutletWrapper>
          <Outlet />
        </S.OutletWrapper>
      </S.Layout>
    </S.PageLayout>
  );
};

export default PublicLayout;
