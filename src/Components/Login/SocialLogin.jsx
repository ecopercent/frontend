import React from "react";
import kakaoLogin from "./kakaoLogin";
import * as S from "./style";

export default function SocialLogin() {
  return (
    <S.LoginButton onClick={kakaoLogin}>
      <S.LogoImg src="/img/kakaoLogo.png" alt="kakao login" />
    </S.LoginButton>
  );
}
