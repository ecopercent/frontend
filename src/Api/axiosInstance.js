import axios from "axios";
import { getAccess } from "./jwt";

const authInstance = axios.create();

authInstance.interceptors.request.use(
  // 요청이 전달되기 전에 작업 수행
  (config) => {
    const access = getAccess();

    if (!access) {
      config.headers.Authorization = null;
      return config;
    }

    if (config.headers && access) {
      config.headers.Authorization = `Bearer ${access}`;
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
  (error) => {
    return Promise.reject(error);
  }
);
