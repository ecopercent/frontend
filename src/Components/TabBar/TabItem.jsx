import React, { useCallback } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TabItemBackGround } from "./style";

const TabItem = ({
  itemNumber,
  IconComponent,
  setCurrTabNumber,
  currTabNumber,
  page,
}) => {
  const navigate = useNavigate();
  const tabClickHandler = useCallback(() => {
    setCurrTabNumber(itemNumber);
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
