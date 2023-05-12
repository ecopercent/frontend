import React from "react";
import { Global, css } from "@emotion/react";

const style = css`
  body {
    font-family: "AppleSDGothicNeo", "Noto Sans KR", sans-serif;
    margin: 0;
    height: 100%;
  }

  #root {
    height: 100vh;
  }

  * {
    // 오페라
    box-sizing: border-box;
    // 파이어폭스
    -moz-box-sizing: border-box;
    // 웹킷 & 크롬
    -webkit-box-sizing: border-box;
    // iOS 사파리 기본 스타일 제거
    -webkit-appearance: none;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
