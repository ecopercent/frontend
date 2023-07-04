import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import media from "@style/media";
import * as S from "./style";

const NabItem = ({ IconComponent, ClickedComponent, page, description }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const tabClickHandler = useCallback(() => {
    navigate(`${page}`);
  }, []);

  const ClickedIcon = styled(ClickedComponent)`
    width: 30px;
    height: 30px;

    @media ${media.mobile} {
      width: 25px;
      height: 25px;
    }
  `;

  const UnclickedIcon = styled(IconComponent)`
    width: 30px;
    height: 30px;

    @media ${media.mobile} {
      width: 25px;
      height: 25px;
    }
  `;

  return (
    <S.LinkWrapper onClick={tabClickHandler}>
      <S.TabItemBackGround featured={pathname === page}>
        {pathname === page ? <ClickedIcon /> : <UnclickedIcon />}
      </S.TabItemBackGround>
      <S.Description>{description}</S.Description>
    </S.LinkWrapper>
  );
};

export default NabItem;
