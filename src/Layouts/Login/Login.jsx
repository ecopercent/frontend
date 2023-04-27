import React, { useContext, useEffect } from "react";
import SocialLogin from "../../Components/Login/SocialLogin";
import * as S from "./style";
import SignUpItemContext from "../../hooks/SignUpItemContext";

const Login = () => {
  const { state, dispatch } = useContext(SignUpItemContext);

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
        {/* 소셜 로그인 버튼들 들어갈 곳 */}
        <SocialLogin />
        <S.Line />
      </S.LoginBox>
      <S.SloganSpan>에코퍼센트 슬로건 한줄.</S.SloganSpan>
    </S.LoginLayout>
  );
};
export default Login;
