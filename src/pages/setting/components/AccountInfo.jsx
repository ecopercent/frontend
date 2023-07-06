import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../style";
import AccountDelete from "./AccountDelete";
import Error from "@pages/error";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@api/user";

const AccountInfo = () => {
  const { accountDeletePage } = useParams();
  const navigate = useNavigate();

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser();
    },
  });

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
        <span>{"<"}</span> 회원 정보
      </S.HoverSettingTitle>
      <S.Category>연동 소셜</S.Category>
      <S.Plain>
        {userQuery.isSuccess &&
          `${userQuery?.data?.oauthProvider} (${userQuery?.data?.email})`}
      </S.Plain>
      <hr />
      <S.Category>닉네임</S.Category>
      <S.Plain>{userQuery?.data?.nickname}</S.Plain>
      <hr />
      {/*
      TODO: 가입일: 가입일 정보가 DB에 없어서 백에 요청만 한 상태
      당장은 없이 완성하라고 함
       <S.Category>가입일</S.Category>
      <S.Plain>{userQuery.data?.teste}</S.Plain>
      <hr /> */}
      <S.Category>계정 설정</S.Category>
      <S.Highlight
        onClick={() => {
          navigate("accountDelete");
        }}
      >
        회원탈퇴
      </S.Highlight>
    </S.SettingWrap>
  );
};

export default AccountInfo;
