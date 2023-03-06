import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import { TabBarContainer } from "./style";

import TabItem from "./TabItem";

const TabBar = ({ setCurrTabNumber, currTabNumber }) => {
  return (
    <TabBarContainer>
      <TabItem
        itemNumber={0}
        IconComponent={AiFillSetting}
        setCurrTabNumber={setCurrTabNumber}
        currTabNumber={currTabNumber}
      />
      <TabItem
        itemNumber={1}
        IconComponent={BiHomeAlt}
        setCurrTabNumber={setCurrTabNumber}
        currTabNumber={currTabNumber}
      />
      <TabItem
        itemNumber={2}
        IconComponent={BsFillBoxFill}
        setCurrTabNumber={setCurrTabNumber}
        currTabNumber={currTabNumber}
      />
    </TabBarContainer>
  );
};

export default TabBar;
