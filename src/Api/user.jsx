import axios from "axios";

export function postUserOfKakao(signUpForm) {
  return axios.post("/users/kakao", signUpForm).then((res) => {
    return res.data;
  });
}

export function postUserOfApple(signUpForm) {
  return axios.post("/users/apple", signUpForm).then((res) => {
    return res.data;
  });
}

export function getUser() {
  return axios.get(`/users/me`).then((res) => {
    return res.data;
  });
}

export function patchUser(formData) {
  return axios.patch(`/users`, formData).then((res) => {
    return res.data;
  });
}
