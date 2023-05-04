import axios from "axios";
import { base64ToDataUrl } from "../Utils/convert";

export async function postUserOfKakao({ formData, access }) {
  try {
    const res = await axios.post("/users/kakao", formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return res.data;
  } catch (err) {
    throw err.response.status;
  }
}

export async function postUserOfApple({ formData, access }) {
  try {
    const res = await axios.post("/users/apple", formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return res.data;
  } catch (err) {
    throw err.response.status;
  }
}

export function getUser() {
  return axios.get(`/users/me`).then((res) => {
    if (res.data.profileImage)
      res.data.profileImage = base64ToDataUrl(res.data.profileImage);
    return res.data;
  });
}

export function patchUser(formData) {
  return axios.patch(`/users`, formData).then((res) => {
    if (res.data.profileImage)
      res.data.profileImage = base64ToDataUrl(res.data.profileImage);
    return res.data;
  });
}
