import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { AuthenticatedContext } from "@hooks/AuthenticatedContext";

import * as S from "../error/style";

export default function TokenExpiration() {
  const expired = localStorage.getItem("expired");
  if (!expired) return <Navigate to="/" />;

  const { authenticated, signOut } = useContext(AuthenticatedContext);
  const navigate = useNavigate();

  if (authenticated) signOut();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.PageLayout>
      <S.WarningIcon />
      <S.Headline>세션이 만료되었습니다.</S.Headline>
      <S.NotificationText>잠시 후 메인으로 이동합니다.</S.NotificationText>
      <S.GoHomeBtn
        onClick={() => {
          navigate("/");
        }}
      >
        메인 화면
      </S.GoHomeBtn>
    </S.PageLayout>
  );
}
