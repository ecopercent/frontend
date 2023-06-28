import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TabItemBackGround } from "./style";

const TabItem = ({ itemNumber, IconComponent, currTabNumber, page }) => {
  const navigate = useNavigate();
  const tabClickHandler = useCallback(() => {
    navigate(`/${page}`);
  }, []);

  return (
    <TabItemBackGround
      featured={currTabNumber === itemNumber}
      onClick={tabClickHandler}
    >
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
