import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import AccountInfo from "./AccountInfo";
import Error from "../../Layouts/Error/Error";
import * as S from "./style";

const Setting = () => {
  const { subPage } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const appArr = [
    {
      label: "앱 소개",
      style: S.HoverPlain,
      onClickHandler: () => {
        console.log("노션 페이지로 리디렉션");
      },
    },
    {
      label: "개발팀",
      style: S.HoverPlain,
      onClickHandler: () => {
        console.log("노션 페이지로 리디렉션");
      },
    },
    {
      label: "도움말",
      style: S.HoverPlain,
      onClickHandler: () => {
        console.log("노션 페이지로 리디렉션");
      },
    },
  ];

  const notificationArr = [
    {
      label: "운영방침",
      style: S.HoverPlain,
      onClickHandler: () => {
        console.log("노션 페이지로 리디렉션");
      },
    },
    {
      label: "개인정보처리방침",
      style: S.HoverPlain,
      onClickHandler: () => {
        console.log("노션 페이지로 리디렉션");
      },
    },
    {
      label: "문의처",
      style: S.HoverPlain,
      onClickHandler: () => {
        console.log("노션 페이지로 리디렉션");
      },
    },
  ];

  const logOut = () => {
    queryClient.resetQueries(["user"]);
    queryClient.resetQueries(["tumbler"]);
    queryClient.resetQueries(["ecobag"]);
    queryClient.resetQueries(["title"]);
    queryClient.resetQueries(["item"]);
    navigate("/");
  };

  if (subPage) {
    return subPage === "accountInfo" ? <AccountInfo /> : <Error />;
  }

  return (
    <S.SettingWrap>
      <S.SettingTitle>설정</S.SettingTitle>
      <S.Category>계정</S.Category>
      <S.HoverPlain
        onClick={() => {
          navigate("accountInfo");
        }}
      >
        회원 정보
      </S.HoverPlain>
      <hr />
      <S.Category>앱</S.Category>
      {appArr.map((element) => {
        return (
          <element.style key={element.label} onClick={element.onClickHandler}>
            {element.label}
          </element.style>
        );
      })}
      <hr />
      <S.Category>안내</S.Category>
      {notificationArr.map((element) => {
        return (
          <element.style key={element.label} onClick={element.onClickHandler}>
            {element.label}
          </element.style>
        );
      })}
      <hr />
      <S.Logout onClick={logOut}>로그아웃</S.Logout>
    </S.SettingWrap>
  );
};

export default Setting;
