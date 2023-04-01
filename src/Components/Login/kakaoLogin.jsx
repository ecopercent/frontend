import { scriptLoad } from "../../Utils/script";

export default function kakaoLogin() {
  const name = "KAKAO";
  const src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
  const crossOrigin = "anonymous";
  const isLoad = scriptLoad({ name, src, crossOrigin });

  if (isLoad) {
    while (!window.Kakao.isInitialized())
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
    window.Kakao.Auth.authorize({
      redirectUri: process.env[`REACT_APP_${name}_REDIRECT_URI`],
    });
  }

  return null;
}
