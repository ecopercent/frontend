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

export function patchUser({ id, nick, msg, img }) {
  return axios
    .patch(`/users/${id}`, {
      nickname: nick,
      profileImage: img,
      profileMessage: msg,
    })
    .then((res) => {
      return res.data;
    });
}
