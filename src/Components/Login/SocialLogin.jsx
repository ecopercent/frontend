import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getKakaoAuthCode, KakaoLoginButton } from "./kakaoLogin";
import AppleLoginButton from "./appleLogin";
import * as S from "./style";

export default function SocialLogin() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.split("/")[2] === "kakao")
      getKakaoAuthCode({ searchParams: location.search, navigate });
  }, [location]);

  return (
    <S.ButtonBox>
      <KakaoLoginButton />
      <AppleLoginButton />
    </S.ButtonBox>
  );
}
