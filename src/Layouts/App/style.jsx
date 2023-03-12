import React from "react";
import { Global, css } from "@emotion/react";

const style = css`
  body {
    font-family: "AppleSDGothicNeo", "Noto Sans KR", sans-serif;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
