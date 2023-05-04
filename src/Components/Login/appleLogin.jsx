import React, { useEffect } from "react";
import * as S from "./style";

const AppleLoginButton = () => {
  const clientId = `${process.env.REACT_APP_APPLE_CLIENT_ID}`;
  const scope = "email";
  const state = "some-state";
  const nonce = "some-nonce";
  const redirectURI = `${process.env.REACT_APP_APPLE_REDIRECT_URI}`;

  useEffect(() => {
    // Apple SDK 스크립트 로드
    const script = document.createElement("script");
    script.src =
      "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
    script.async = true;
    script.onload = () => {
      // Apple SDK 스크립트 로드 후 AppleID.auth.init 함수를 호출하여 버튼을 초기화합니다.
      window.AppleID.auth.init({
        clientId,
        scope,
        redirectURI,
        state,
        nonce,
      });
    };
    document.body.appendChild(script);

    return () => {
      // 컴포넌트가 unmount될 때, 스크립트를 삭제합니다.
      document.body.removeChild(script);
    };
  }, [clientId, redirectURI, scope, state, nonce]);

  return (
    <S.LogoImg src="/img/appleLogo.png" alt="apple login" id="appleid-signin" />
  );
};

export default AppleLoginButton;
