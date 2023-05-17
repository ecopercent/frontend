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
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  async (error) => {
    // 엑세스 토큰 만료
    console.log("axios error", error);
    if (error.config.url === "/signout") return Promise.resolve();
    if (error.config.url === "/token/access") {
      // 로그아웃 처리
      console.log("리프레시 토큰 만료");
      localStorage.setItem("out", true);
      return Promise.resolve();
    }
    if (error.response.status === 401 || error.response.status === 403) {
      // 액세스 토큰 재발급 요청
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
