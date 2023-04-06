import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Setting = () => {
  const navigate = useNavigate();
  const accountArray = [
    {
      label: "회원 정보",
      style: S.Normal,
      onClickHandler: () => {
        console.log("계정정보 띄우기");
      },
    },
    {
      label: "로그아웃",
      style: S.Logout,
      onClickHandler: () => {
        console.log("로그아웃해주기! 리다이랙트 시키기!");
        localStorage.removeItem("userId");
        navigate("/");
      },
    },
    {
      label: "회원탈퇴",
      style: S.Logout,
      onClickHandler: () => {
        console.log("탈퇴구질구질쓰");
      },
    },
  ];

  const appArr = [
    {
      label: "앱 소개",
      style: S.Normal,
      onClickHandler: () => {
        console.log("우리 앱 멋지죠?");
      },
    },
    {
      label: "개발팀",
      style: S.Normal,
      onClickHandler: () => {
        console.log("컨플루언스 페이지로 리디렉션");
      },
    },
    {
      label: "도움말",
      style: S.Normal,
      onClickHandler: () => {
        console.log("이거 이렇게 하는겁니다?");
      },
    },
  ];

  const notificationArr = [
    {
      label: "운영방침",
      style: S.Normal,
      onClickHandler: () => {
        console.log("컨플루언스 페이지 리디렉션 혹은 모달뷰로 텍스트만");
      },
    },
    {
      label: "개인정보처리방침",
      style: S.Normal,
      onClickHandler: () => {
        console.log(" 컨플루언스 페이지 리디렉션 모달뷰로 텍스트만");
      },
    },
    {
      label: "문의처",
      style: S.Normal,
      onClickHandler: () => {
        console.log("컨플루언스 페이지로 리디렉션");
      },
    },
  ];

  const elementCount =
    accountArray.length + notificationArr.length + appArr.length;

  return (
    <S.SettingWrap>
      <S.SettingTitle>설정</S.SettingTitle>
      <S.Category>계정</S.Category>
      {accountArray.map((element) => {
        return (
          <element.style
            elementCount={elementCount}
            key={element.label}
            onClick={element.onClickHandler}
          >
            {element.label}
          </element.style>
        );
      })}
      <hr />
      <S.Category>앱</S.Category>
      {appArr.map((element) => {
        return (
          <element.style
            elementCount={elementCount}
            key={element.label}
            onClick={element.onClickHandler}
          >
            {element.label}
          </element.style>
        );
      })}
      <hr />
      <S.Category>안내</S.Category>
      {notificationArr.map((element) => {
        return (
          <element.style
            elementCount={elementCount}
            key={element.label}
            onClick={element.onClickHandler}
          >
            {element.label}
          </element.style>
        );
      })}
    </S.SettingWrap>
  );
};

export default Setting;
