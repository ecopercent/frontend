import React, { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getKakaoAuthCode, KakaoLoginButton } from "./kakaoLogin";
import AppleLoginButton from "./appleLogin";
import { AuthenticatedContext } from "../../hooks/AuthenticatedContext";
import * as S from "./style";

export default function SocialLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useContext(AuthenticatedContext);

  useEffect(() => {
    console.log("location", location);
    if (location.pathname.split("/")[2] === "kakao")
      getKakaoAuthCode({ searchParams: location.search, navigate, signIn });
  }, [location]);

  return (
    <S.ButtonBox>
      <KakaoLoginButton />
      <AppleLoginButton />
    </S.ButtonBox>
  );
}
