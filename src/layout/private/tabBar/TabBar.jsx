import React from "react";
import { TabBarContainer, LogoWrapper, Logo } from "./style";
import TabItem from "./TabItem";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillSetting,
  AiOutlineSetting,
} from "react-icons/ai";
import { HiOutlineArchive, HiArchive } from "react-icons/hi";

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
      icon: HiOutlineArchive,
      iconClicked: HiArchive,
    },
  ];

  return (
    <TabBarContainer>
      <LogoWrapper>
        <Logo src="/logo.png" alt="ecopercent" />
      </LogoWrapper>
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
