import axios from "axios";
import cookie from "react-cookies";

let accessToken = null;

export function setAccessToken() {
  accessToken = cookie.load("access", { path: "/" });
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  cookie.remove("access", { path: "/" });
}

axios.interceptors.request.use(
  (config) => {
    if (config.headers && accessToken) {
      const updatedConfig = { ...config };
      updatedConfig.headers.Authorization = `Bearer ${accessToken}`;
      return updatedConfig;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // 엑세스 토큰 만료
    console.log("axios error", error);
    if (error.config.url === "/signout") return Promise.resolve();
    if (error.config.url === "/token/access") {
      // TEST: 리프레시 토큰 만료: 로그아웃 처리
      console.log("리프레시 토큰 만료");
      localStorage.setItem("out", true);
      return Promise.resolve();
    }
    if (error.response.status === 401 || error.response.status === 403) {
      // TEST: 액세스 토큰 만료
      console.log("엑세스 토큰 만료!", error.response.status);
      await axios.post("/token/access");
      setAccessToken();
      const prevRequest = error.config;
      const response = await axios(prevRequest);
      return response;
    }
    return Promise.reject(error);
  }
);

export default axios;
