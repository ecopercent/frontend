import React from "react";
// import { PcPageWrap } from "../../Layouts/Main/style";
import * as S from "./style";

const Setting = () => {
  const accountArray = [
    {
      label: "계정 정보",
      style: S.Normal,
      onClickHandler: () => {
        console.log("hi");
      },
    },
    {
      label: "로그아웃",
      style: S.Logout,
      onClickHandler: () => {
        console.log("hi");
      },
    },
  ];

  const notificationArr = [
    {
      label: "???",
      style: S.Normal,
      onClickHandler: () => {
        console.log("hi");
      },
    },
    {
      label: "??????????",
      style: S.Normal,
      onClickHandler: () => {
        console.log("hi");
      },
    },
  ];

  const helpArray = [
    {
      label: "개발팀",
      style: S.Normal,
      onClickHandler: () => {
        console.log("hi");
      },
    },
    {
      label: "문의하기",
      style: S.Normal,
      onClickHandler: () => {
        console.log("hi");
      },
    },
  ];

  const infoArray = [
    {
      label: "운영약관",
      style: S.Normal,
      onClickHandler: () => {
        console.log("hi");
      },
    },
    {
      label: "개인정보처리방침",
      style: S.Normal,
      onClickHandler: () => {
        console.log("hi");
      },
    },
  ];
  
  const elementCount =
    accountArray.length +
    notificationArr.length +
    helpArray.length +
    infoArray.length;

  console.log(elementCount);
  return (
    <S.SettingWrap>
      <h1
        style={{
          backgroundColor: "lightgreen",
          // border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        설정
      </h1>
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
      <S.Category>알림</S.Category>
      알림은 어쩌구 입니다.
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
      <hr />
      <S.Category>도움말</S.Category>
      {helpArray.map((element) => {
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
      <S.Category>도움말</S.Category>
      {infoArray.map((element) => {
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
