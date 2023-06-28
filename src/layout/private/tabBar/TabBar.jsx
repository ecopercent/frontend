import React from "react";
import { TabBarContainer } from "./style";
import TabItem from "./TabItem";
import { AiFillSetting } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";

const TabBar = () => {
  const routeInfo = [
    {
      page: "/setting",
      icon: AiFillSetting,
    },
    {
      page: "/home",
      icon: BiHomeAlt,
    },
    {
      page: "/item",
      icon: BsFillBoxFill,
    },
  ];

  return (
    <TabBarContainer>
      {routeInfo.map((element) => {
        return (
          <TabItem
            key={element.page}
            IconComponent={element.icon}
            page={element.page}
          />
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
