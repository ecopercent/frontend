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
    })
    .then((res) => {
      return res.data;
    });
}

export function patchTitleItem({ userId, itemId, category }) {
  return axios
    .patch(`/users/${userId}/title-${category}`, {
      titleTumblerId: itemId,
    })
    .then((res) => {
      return res.data;
    });
}
