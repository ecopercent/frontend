import axios from "axios";
import { getAccess } from "./jwt";

const authInstance = axios.create();

authInstance.interceptors.request.use(
  // 요청이 전달되기 전에 작업 수행
  (config) => {
    const access = getAccess();

    if (!access) {
      // 엑세스 토큰 없을 때 재발급 받아서 넣기
      // const { data } = await axios.post("/oauth2/access");
      // config.headers.Authorization = data.;
      return config;
    }

    if (config.headers && access) {
      config.headers.Authorization = `Bearer ${access}`;
      config.withCredentials = true;
      return config;
    }
    return config;
  },
  // 요청 오류가 있는 작업 수행
  (error) => {
    return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  async (error) => {
    // 엑세스 토큰 만료
    if (error.response.status === 401) {
      // 액세스 토큰 재발급 요청
      const { data } = await axios.post("/oauth2/access");
    }
    // 액세스 토큰 만료
    return Promise.reject(error);
  }
);
