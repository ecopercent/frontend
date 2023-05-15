import axios from "axios";
import cookie from "react-cookies";

let accessToken = null;

export function setAccessToken() {
  accessToken = cookie.load("access");
  cookie.remove("access", { path: "/" });
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

export function getAccessToken() {
  return accessToken;
}
