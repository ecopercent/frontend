import axios from "@api/axiosInstance";
import cookie from "react-cookies";

let accessToken = null;

export function setAccessToken() {
  const newAccessToken = cookie.load("access", { path: "/" });
  if (newAccessToken) {
    accessToken = newAccessToken;
    cookie.remove("access", { path: "/" });
  }
}

async function onAccessTokenExpire() {
  const res = await axios.post("/token/access");
  if (res === "SIGNOUT") {
    localStorage.setItem("expired", true);
    window.location.replace("/expire");
  }
  setAccessToken();
}

export function useAxiosInterceptor() {
  async function requestHandler(config) {
    if (config.headers && config.url !== "/token/access") {
      if (!accessToken) await onAccessTokenExpire();
      const updatedConfig = { ...config };
      updatedConfig.headers.Authorization = `Bearer ${accessToken}`;
      return updatedConfig;
    }
    return config;
  }

  axios.interceptors.request.use(requestHandler, (err) => {
    return Promise.reject(err);
  });

  function responseHandler(response) {
    return response;
  }

  async function errorHandler(error) {
    // TODO: 서버 에러 페이지 만들기?
    // if (error.response.status >= 500) window.location.replace("/500");
    if (
      (error.config.url === "/signout" ||
        error.config.url === "/token/access") &&
      error.response.status !== 500
    )
      return Promise.resolve("SIGNOUT");
    if (error.response.status === 403) {
      onAccessTokenExpire();
      const prevRequest = error.config;
      const response = await axios(prevRequest);
      return response;
    }
    return Promise.reject(error);
  }

  axios.interceptors.response.use(responseHandler, errorHandler);
}
