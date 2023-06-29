import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TabItemBackGround } from "./style";
import styled from "@emotion/styled";
import media from "@style/media";

const TabItem = ({ IconComponent, ClickedComponent, page }) => {
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
    <TabItemBackGround featured={pathname === page} onClick={tabClickHandler}>
      {pathname === page ? <ClickedIcon /> : <UnclickedIcon />}
    </TabItemBackGround>
  );
};

export default TabItem;
