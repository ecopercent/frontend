import React, { useContext, useEffect } from "react";
import SocialLogin from "@components/Login/SocialLogin";
import SignUpItemContext from "@hooks/SignUpItemContext";
import * as S from "./style";

const Login = () => {
  const { state, dispatch } = useContext(SignUpItemContext);

  if (localStorage.getItem("expired")) localStorage.removeItem("expired");

  useEffect(() => {
    if (state.tumbler)
      dispatch({
        type: "tumblerDelete",
      });
    if (state.ecobag)
      dispatch({
        type: "ecobagDelete",
      });
  });

  return (
    <S.LoginLayout>
      <S.Logo src="/logo.png" alt="eco% 로고" />
      <S.LoginBox>
        <S.Line />
        <S.ContinueWith>Continue With</S.ContinueWith>
        <SocialLogin />
        <S.Line />
      </S.LoginBox>
      <S.SloganSpan>에코퍼센트 슬로건 한줄.</S.SloganSpan>
    </S.LoginLayout>
  );
};
export default Login;
