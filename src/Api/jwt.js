import { axios } from "axios";

let accessToken = null;

export function setAccessToken(newToken) {
  accessToken = newToken;
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

export function getAccessToken() {
  return accessToken;
}
