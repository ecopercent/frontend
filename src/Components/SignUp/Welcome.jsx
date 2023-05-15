import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PcPageWrap } from "@layout/Main/style";
import * as S from "./style";

export default function Welcome() {
  const navigate = useNavigate();
  const validPath = useLocation().state;
  useEffect(() => {
    if (!validPath) navigate("/");
  }, []);

  return (
    <PcPageWrap style={{ height: "100vh", padding: "0" }}>
      <S.WelcomLayout>
        <S.WelcomeIcon />
        <S.Headline>회원가입이 완료되었습니다.</S.Headline>
        <S.WelcomeText>
          지금 바로 에코퍼센트와 함께 <br />
          탄소감수성을 높여봅시다!
        </S.WelcomeText>
        <S.GoHomeBtn
          onClick={() => {
            navigate("/");
          }}
        >
          메인 화면
        </S.GoHomeBtn>
      </S.WelcomLayout>
    </PcPageWrap>
  );
}
