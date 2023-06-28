import React from "react";
import axios from "axios";
import { scriptLoad } from "src/utils/script";
import { LogoImg } from "./style";

export async function kakaoLogin() {
  const src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";

  try {
    await scriptLoad({ name: "KAKAO", src, crossOrigin: "anonymous" });
    if (!window.Kakao.isInitialized())
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
    window.Kakao.Auth.authorize({
      redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    });
  } catch (error) {
    // 카카오 서버 안될 때
    console.error(error);
  }

  return null;
}

async function postKakaoToken({ kakaoAccessToken, navigate, signIn }) {
  try {
    const response = await axios.post(
      "/login/oauth2/kakao",
      {},
      {
        headers: {
          Authorization: `Bearer ${kakaoAccessToken}`,
        },
      }
    );
    if (response.status === 200) {
      signIn();
    }
  } catch (err) {
    if (err.response.status === 404) {
      navigate("/signup", {
        state: { access: err.response.data.access, oAuthProvider: "kakao" },
      });
    } else {
      // 서버 안될 때
      navigate("/");
    }
  }
}

export async function getKakaoToken({ authCode, navigate, signIn }) {
  try {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      {
        grant_type: "authorization_code",
        client_id: `${process.env.REACT_APP_KAKAO_JS_KEY}`,
        redirect_uri: `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`,
        code: `${authCode}`,
      },
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    if (response.status === 200) {
      postKakaoToken({
        kakaoAccessToken: response.data.access_token,
        navigate,
        signIn,
      });
    } else {
      navigate("/");
    }
  } catch (err) {
    // 유저가 취소했을 때
    navigate("/");
  }
}

export async function getKakaoAuthCode({ searchParams, navigate, signIn }) {
  const params = new URLSearchParams(searchParams);

  if (params.has("code")) {
    await getKakaoToken({ authCode: params.get("code"), navigate, signIn });
  }
}

export function KakaoLoginButton() {
  return (
    <LogoImg onClick={kakaoLogin} src="/img/kakaoLogo.png" alt="kakao login" />
  );
}
