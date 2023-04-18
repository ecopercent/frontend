import axios from "axios";
import { scriptLoad } from "../../Utils/script";

export async function kakaoLogin() {
  const name = "KAKAO";
  const src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
  const crossOrigin = "anonymous";

  try {
    await scriptLoad({ name, src, crossOrigin });
    if (!window.Kakao.isInitialized())
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
    window.Kakao.Auth.authorize({
      redirectUri: process.env[`REACT_APP_${name}_REDIRECT_URI`],
    });
  } catch (error) {
    console.error(error);
  }

  return null;
}

async function postKakaoToken({ kakaoAccessToken, navigate }) {
  try {
    console.log("에코 서버에 카카오 액세스 토큰 보내기!");
    const response = await axios.get("/login/oauth2/kakao", {
      headers: {
        Authorization: `Bearer ${kakaoAccessToken}`,
      },
    });
    if (response.status === 200) {
      console.log("유저 있음! 로그인 시켜주자");
    }
  } catch (err) {
    if (err.response.status === 404) {
      console.log(err);
      console.log("유저 없음! 회원가입 시켜주자");
    } else navigate("/");
  }
}

export async function getKakaoToken({ authCode, navigate }) {
  try {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      {
        // data
        grant_type: "authorization_code",
        client_id: `${process.env.REACT_APP_KAKAO_JS_KEY}`,
        redirect_uri: `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`,
        code: `${authCode}`,
      },
      {
        // config
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    if (response.status === 200) {
      console.log("인가 코드 주고 받아온거!");
      console.log(response.data);
      postKakaoToken({
        kakaoAccessToken: response.data.access_token,
        navigate,
      });
    } else {
      navigate("/");
    }
  } catch (err) {
    console.log(err);
    navigate("/");
  }
}
