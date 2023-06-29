import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LinkWrapper, TabItemBackGround, Description } from "./style";
import styled from "@emotion/styled";
import media from "@style/media";

const TabItem = ({ IconComponent, ClickedComponent, page, description }) => {
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
    <LinkWrapper onClick={tabClickHandler}>
      <TabItemBackGround featured={pathname === page}>
        {pathname === page ? <ClickedIcon /> : <UnclickedIcon />}
      </TabItemBackGround>
      <Description>{description}</Description>
    </LinkWrapper>
  );
};

export default TabItem;
