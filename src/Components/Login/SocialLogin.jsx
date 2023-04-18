import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { kakaoLogin, getKakaoToken } from "./kakaoLogin";
import * as S from "./style";

export default function SocialLogin() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.split("/")[2] === "kakao") {
      const params = new URLSearchParams(location.search);
      if (params.has("code")) {
        console.log("카카오 인가 코드 받았어!");
        console.log(params.get("code"));
        getKakaoToken({ authCode: params.get("code"), navigate });
      }
    }
  }, []);

  return (
    <S.LoginButton onClick={kakaoLogin}>
      <S.LogoImg src="/img/kakaoLogo.png" alt="kakao login" />
    </S.LoginButton>
  );
}
