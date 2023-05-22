// import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import axios from "axios";
// import { useContext } from "react";
import cookie from "react-cookies";

let accessToken = null;

export function setAccessToken() {
  accessToken = cookie.load("access", { path: "/" });
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  cookie.remove("access", { path: "/" });
}

export function useAxiosInterceptor() {
  // TEST: /signout으로 이동하기 vs signout 함수 실행하기
  // const { signOut } = useContext(AuthenticatedContext);

  function requestConfigHandler(config) {
    if (config.headers && accessToken) {
      const updatedConfig = { ...config };
      updatedConfig.headers.Authorization = `Bearer ${accessToken}`;
      return updatedConfig;
    }
    return config;
  }

  axios.interceptors.request.use(requestConfigHandler, (error) => {
    return Promise.reject(error);
  });

  function responseHandler(response) {
    return response;
  }

  async function errorHandler(error) {
    console.log("인터셉터 에러", error);
    // 회원가입 엑세스 토큰 만료(403)는 재발급 X
    if (
      error.config.url === "/users/kakao" ||
      error.config.url === "/users/apple"
    )
      return Promise.reject(error);
    if (error.config.url === "/signout" && error.response.status !== 500) {
      console.log("signout 캐치", error);
      return Promise.resolve();
    }
    // 리프레시 토큰 만료는 로그아웃 처리
    if (error.config.url === "/token/access" && error.response.status !== 500) {
      console.log("리프레시 토큰 유효하지 않음/만료");
      return Promise.resolve("SIGNOUT");
    }
    if (error.response.status === 403) {
      console.log("엑세스 토큰 만료!", error.response.status);
      const res = await axios.post("/token/access");
      console.log("엑세스 토큰 재발급 결과", res);
      if (res === "SIGNOUT")
        // return signOut();
        return window.location.replace("/signout");
      setAccessToken();
      const prevRequest = error.config;
      const response = await axios(prevRequest);
      return response;
    }
    return Promise.reject(error);
  }

  axios.interceptors.response.use(responseHandler, errorHandler);
}
