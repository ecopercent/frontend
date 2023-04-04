import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Setting = () => {
  
  const navigate = useNavigate();
  const accountArray = [
    {
      label: "계정 정보",
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
  ];

  const notificationArr = [
    {
      label: "???",
      style: S.Normal,
      onClickHandler: () => {
        console.log("이게 아마 텀블러 에코백 어캐띄울지 설정하려다 만거지?");
      },
    },
    {
      label: "??????????",
      style: S.Normal,
      onClickHandler: () => {
        console.log("이게 아마 텀블러 에코백 어캐띄울지 설정하려다 만거지?");
      },
    },
  ];

  const helpArray = [
    {
      label: "개발팀",
      style: S.Normal,
      onClickHandler: () => {
        console.log("개발팀 정보 띄우기 깃헙 컨플루언스 지라 피그마 등등등");
      },
    },
    {
      label: "문의하기",
      style: S.Normal,
      onClickHandler: () => {
        console.log("대호 이메일주소");
      },
    },
  ];

  const infoArray = [
    {
      label: "운영약관",
      style: S.Normal,
      onClickHandler: () => {
        console.log("우리가 곧 법");
      },
    },
    {
      label: "개인정보처리방침",
      style: S.Normal,
      onClickHandler: () => {
        console.log("열씨미 알아보고 알려드리겠습니다. 고객님");
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
          backgroundColor: `${lightGreen}`,
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
