import React from "react";
import { TabBarContainer } from "./style";
import TabItem from "./TabItem";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillSetting,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsBox, BsFillBoxFill } from "react-icons/bs";

const TabBar = () => {
  const routeInfo = [
    {
      page: "/setting",
      icon: AiOutlineSetting,
      iconClicked: AiFillSetting,
    },
    {
      page: "/home",
      icon: AiOutlineHome,
      iconClicked: AiFillHome,
    },
    {
      page: "/item",
      icon: BsBox,
      iconClicked: BsFillBoxFill,
    },
  ];

  return (
    <TabBarContainer>
      {routeInfo.map((element) => {
        return (
          <TabItem
            key={element.page}
            IconComponent={element.icon}
            ClickedComponent={element.iconClicked}
            page={element.page}
          />
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
