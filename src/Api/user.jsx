import axios from "axios";

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
      email: "tmp@email.com",
      // email은 api 설계 오류로 인한 임시 데이터
    })
    .then((res) => {
      return res.data;
    });
}
