import React from "react";
import SocialLogin from "./components/SocialLogin";
import * as S from "./style";

const Login = () => {
  if (localStorage.getItem("expired")) localStorage.removeItem("expired");

  return (
    <S.LoginLayout>
      <S.Logo src="/logo.png" alt="eco% 로고" />
      <S.LoginBox>
        <S.Line />
        <S.ContinueWith>Continue With</S.ContinueWith>
        <SocialLogin />
        <S.Line />
      </S.LoginBox>
      <S.SloganWrapper>
        <S.SloganSpan>
          매일 자연스럽게, 자연을 위한 에코퍼센트
          <br />
        </S.SloganSpan>
        <S.SloganSpan sub>
          every day naturally, ecopercent for nature
        </S.SloganSpan>
      </S.SloganWrapper>
    </S.LoginLayout>
  );
};
export default Login;
