import axios from "axios";
import cookie from "react-cookies";

let accessToken = null;

export function setAccessToken() {
  const newAccessToken = cookie.load("access", { path: "/" });
  if (newAccessToken) {
    accessToken = newAccessToken;
    cookie.remove("access", { path: "/" });
  } else console.log("No Access Token from Server");
}

export function useAxiosInterceptor() {
  function requestHandler(config) {
    if (config.headers && accessToken) {
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
    if (error.config.url === "/token/access" && error.response.status !== 500) {
      return Promise.resolve("SIGNOUT");
    }
    if (error.response.status === 403) {
      const res = await axios.post("/token/access");
      if (res === "SIGNOUT") {
        localStorage.setItem("expired", true);
        window.location.replace("/expire");
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
