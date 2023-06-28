import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../style";
import AccountDelete from "./AccountDelete";
import Error from "@pages/error";

const AccountInfo = () => {
  const { accountDeletePage } = useParams();
  const navigate = useNavigate();
  if (accountDeletePage) {
    return accountDeletePage === "accountDelete" ? (
      <AccountDelete />
    ) : (
      <Error />
    );
  }
  return (
    <S.SettingWrap>
      <S.HoverSettingTitle
        onClick={() => {
          navigate(-1);
        }}
      >
        <span style={{ marginRight: "1%" }}>{"<"}</span> 회원 정보
      </S.HoverSettingTitle>
      <S.Category>연동 소셜</S.Category>
      <S.Plain>auth 끝나고 채울 예정</S.Plain>
      <hr />
      <S.Category>닉네임</S.Category>
      <S.Plain>auth 끝나고 채울 예정</S.Plain>
      <hr />
      <S.Category>가입일</S.Category>
      <S.Plain>auth 끝나고 채울 예정</S.Plain>
      <hr />
      <S.Category>계정 설정</S.Category>
      <S.Logout
        onClick={() => {
          navigate("accountDelete");
        }}
      >
        회원탈퇴
      </S.Logout>
    </S.SettingWrap>
  );
};

export default AccountInfo;
