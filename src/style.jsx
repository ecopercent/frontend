import React from "react";
import { Global, css } from "@emotion/react";

const style = css`
  @import url("https://fonts.cdnfonts.com/css/sf-pro-display");

  @font-face {
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 100;
    src: local("Apple SD Gothic Neo Thin"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/100_AppleSDGothicNeo-Thin.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/100_AppleSDGothicNeo-Thin.otf")
        format("opentype");
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 200;
    src: local("Apple SD Gothic Neo UltraLight"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/200_AppleSDGothicNeo-UltraLight.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/200_AppleSDGothicNeo-UltraLight.otf")
        format("opentype");
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 300;
    src: local("Apple SD Gothic Neo Light"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/300_AppleSDGothicNeo-Light.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/300_AppleSDGothicNeo-Light.otf")
        format("opentype");
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 400;
    src: local("Apple SD Gothic Neo Medium"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/400_AppleSDGothicNeo-Medium.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/400_AppleSDGothicNeo-Medium.otf")
        format("opentype");
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 500;
    src: local("Apple SD Gothic Neo Regular"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/500_AppleSDGothicNeo-Regular.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/500_AppleSDGothicNeo-Regular.otf")
        format("opentype");
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 600;
    src: local("Apple SD Gothic Neo SemiBold"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/600_AppleSDGothicNeo-SemiBold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/600_AppleSDGothicNeo-SemiBold.otf")
        format("opentype");
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 700;
    src: local("Apple SD Gothic Neo Bold"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/700_AppleSDGothicNeo-Bold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/700_AppleSDGothicNeo-Bold.otf")
        format("opentype");
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 800;
    src: local("Apple SD Gothic Neo ExtraBold"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/800_AppleSDGothicNeo-ExtraBold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/800_AppleSDGothicNeo-ExtraBold.otf")
        format("opentype");
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 900;
    src: local("Apple SD Gothic Neo Heavy"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/900_AppleSDGothicNeo-Heavy.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/fonts/900_AppleSDGothicNeo-Heavy.otf")
        format("opentype");
  }

  body {
    font-family: "SF Pro Display", "Apple SD Gothic Neo", "Noto Sans KR",
      sans-serif;
    margin: 0;
    height: 100%;
    width: 100%;

    overflow: hidden;
    touch-action: none;

    position: fixed;
    top: 0;
  }

  #root {
    height: 100vh;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }

  * {
    // 오페라
    box-sizing: border-box;
    // 파이어폭스
    -moz-box-sizing: border-box;
    // 웹킷 & 크롬
    -webkit-box-sizing: border-box;

    // 기본 스타일 제거
    appearance: none;
    border-radius: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
