import axios from "axios";
import cookie from "react-cookies";

export function setAccessToken() {
  const accessToken = cookie.load("access", { path: "/" });
  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    cookie.remove("access", { path: "/" });
  } else console.log("No Access Token from Server");
}

export function useAxiosInterceptor() {
  function responseHandler(response) {
    return response;
  }

  async function errorHandler(error) {
    if (error.config.url === "/token/access" && error.response.status !== 500) {
      console.log("리프레시 토큰 유효하지 않음/만료");
      return Promise.resolve("SIGNOUT");
    }
    if (error.response.status === 403) {
      console.log("엑세스 토큰 만료!", error.response.status);
      const res = await axios.post("/token/access");
      console.log("엑세스 토큰 재발급 결과", res);
      if (res === "SIGNOUT") {
        localStorage.setItem("out", true);
        window.location.replace("/signout");
      }
      setAccessToken();
      const prevRequest = error.config;
      const response = await axios(prevRequest);
      return response;
    }
    return Promise.reject(error);
  }

  axios.interceptors.response.use(responseHandler, errorHandler);
}
