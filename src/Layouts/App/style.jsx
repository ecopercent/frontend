import React from "react";
import { Global, css } from "@emotion/react";

const style = css`
  body {
    font-family: "AppleSDGothicNeo", "Noto Sans KR", sans-serif;
    margin: 0;
  }

  * {
    // 오페라
    box-sizing: border-box;
    // 파이어폭스
    -moz-box-sizing: border-box;
    // 웹킷 & 크롬
    -webkit-box-sizing: border-box;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
