import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TabItemBackGround } from "./style";

const TabItem = ({
  itemNumber,
  IconComponent,
  setCurrTabNumber,
  currTabNumber,
}) => {
  const navigate = useNavigate();
  const tabClickHandler = useCallback(() => {
    setCurrTabNumber(itemNumber);
    navigate("/home");
  }, []);

  return (
    <TabItemBackGround
      onClick={tabClickHandler}
      style={{
        backgroundColor: `${currTabNumber === itemNumber ? "green" : ""}`,
      }}
    >
      <Link to="/home/main">
        <IconComponent />
      </Link>
    </TabItemBackGround>
  );
};

export default TabItem;
