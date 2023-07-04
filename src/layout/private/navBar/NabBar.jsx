import React from "react";
import { useNavigate } from "react-router-dom";

import NabItem from "./NabItem";
import Logo from "@components/logo/Logo";

import {
  AiFillHome,
  AiOutlineHome,
  AiFillSetting,
  AiOutlineSetting,
} from "react-icons/ai";
import { HiOutlineArchive, HiArchive } from "react-icons/hi";
import * as S from "./style";

const NabBar = () => {
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
  const navigate = useNavigate();

  return (
    <S.NabBarContainer>
      <S.LogoWrapper
        onClick={() => {
          navigate("/home");
        }}
      >
        <Logo />
      </S.LogoWrapper>
      {routeInfo.map((element) => {
        return (
          <NabItem
            key={element.page}
            IconComponent={element.icon}
            ClickedComponent={element.iconClicked}
            page={element.page}
            description={element.description}
          />
        );
      })}
    </S.NabBarContainer>
  );
};

export default NabBar;
