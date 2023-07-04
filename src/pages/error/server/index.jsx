import React from "react";
import { useNavigate } from "react-router-dom";
import LogoBox from "@components/logo/LogoBox";
import * as S from "../style";

export default function ServerError() {
  const navigate = useNavigate();
  return (
    <S.PageLayout>
      <S.WarningIcon />
      <S.Headline>페이지를 표시할 수 없습니다</S.Headline>
      <S.NotificationText>
        잠시 후 다시 시도해주세요.
        <br />
        문제가 지속되는 경우 개발팀에 문의해 주세요.
      </S.NotificationText>
      <S.Line />
      <S.Anchor href="mailto:ecopercent@gmail.com">Support</S.Anchor>
      <LogoBox
        handleClick={() => {
          navigate("/");
        }}
      />
    </S.PageLayout>
  );
}
