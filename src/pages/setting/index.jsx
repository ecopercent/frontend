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
      label: "공지사항",
      style: S.HoverPlain,
      onClickHandler: () => {
        window.open(
          "https://ecopercent.notion.site/ecopercent/eco-3932cd03b235420197d6c81094e4b0e1",
          "_blank"
        );
      },
    },
    {
      label: "Q & A",
      style: S.HoverPlain,
      onClickHandler: () => {
        window.open(
          "https://ecopercent.notion.site/ecopercent/eco-3932cd03b235420197d6c81094e4b0e1",
          "_blank"
        );
      },
    },
    {
      label: "문의처",
      style: S.Plain,
      additionalLabel: "ecopercent@gmail.com",
      onClickHandler: () => {},
    },
  ];

  const notificationArr = [
    {
      label: "이용약관",
      style: S.HoverPlain,
      onClickHandler: () => {
        window.open(
          "https://ecopercent.notion.site/962969ee318545cf9dc2b70b5067fcb2",
          "_blank"
        );
      },
    },
    {
      label: "개인정보 처리 방침",
      style: S.HoverPlain,
      onClickHandler: () => {
        window.open(
          "https://ecopercent.notion.site/e6f6485b4f8e4aafb178ab08c935a756",
          "_blank"
        );
      },
    },
    {
      label: "개인정보 수집 및 이용 동의서",
      style: S.HoverPlain,
      onClickHandler: () => {
        window.open(
          "https://ecopercent.notion.site/c7b9f6b4b8894c7881dbb846d26ec15f",
          "_blank"
        );
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
            {element.label}{" "}
            {element.additionalLabel && (
              <S.Span href={`mailto:${element.additionalLabel}`}>
                {element.additionalLabel}
              </S.Span>
            )}
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
