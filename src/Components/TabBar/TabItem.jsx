import React, { useCallback } from "react";
import { TabItemBackGround } from "./style";

const TabItem = ({
  itemNumber,
  IconComponent,
  setCurrTabNumber,
  currTabNumber,
}) => {
  const tabClickHandler = useCallback(() => {
    setCurrTabNumber(itemNumber);
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
