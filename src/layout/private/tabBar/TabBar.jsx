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
      page: "/home",
      icon: AiOutlineHome,
      iconClicked: AiFillHome,
      description: "홈",
    },
    {
      page: "/item",
      icon: HiOutlineArchive,
      iconClicked: HiArchive,
      description: "아이템",
    },
    {
      page: "/setting",
      icon: AiOutlineSetting,
      iconClicked: AiFillSetting,
      description: "설정",
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
            description={element.description}
          />
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
