import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TabItemBackGround } from "./style";

const TabItem = ({ IconComponent, page }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const tabClickHandler = useCallback(() => {
    navigate(`${page}`);
  }, []);

  return (
    <TabItemBackGround featured={pathname === page} onClick={tabClickHandler}>
      <IconComponent
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    </TabItemBackGround>
  );
};

export default TabItem;
