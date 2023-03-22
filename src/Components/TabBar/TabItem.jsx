import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TabItemBackGround } from "./style";

const TabItem = ({ itemNumber, IconComponent, currTabNumber, page }) => {
  const navigate = useNavigate();
  const tabClickHandler = useCallback(() => {
    navigate(`/main/${page}`);
  }, []);
  return (
    <TabItemBackGround
      onClick={tabClickHandler}
      style={{
        backgroundColor: `${currTabNumber === itemNumber ? "green" : ""}`,
      }}
    >
      <IconComponent />
    </TabItemBackGround>
  );
};

export default TabItem;
