import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountInfo from "./components/AccountInfo";
import Error from "@pages/error";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import * as S from "./style";

const Setting = () => {
  const { subPage } = useParams();
  const navigate = useNavigate();
  const { signOut } = useContext(AuthenticatedContext);

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
      label: "이용약관",
      style: S.HoverPlain,
      onClickHandler: () => {
        window.location.href = "/docs/term.html";
      },
    },
    {
      label: "개인정보처리방침",
      style: S.HoverPlain,
      onClickHandler: () => {
        window.location.href = "/docs/privacy.html";
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
      <S.Highlight onClick={signOut}>로그아웃</S.Highlight>
    </S.SettingWrap>
  );
};

export default Setting;
