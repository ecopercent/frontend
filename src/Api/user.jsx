import axios from "axios";

export function postUser(signUpForm) {
  return axios.post("/users", signUpForm).then((res) => {
    return res.data;
  });
}

export function getUser(id) {
  return axios.get(`/users/${id}`).then((res) => {
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
