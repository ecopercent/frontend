import axios from "axios";
import { b64toBlob } from "../Utils/convert";

export function postUserOfKakao(formData) {
  return axios.post("/users/kakao", formData).then((res) => {
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
    if (res.data.profileImage) {
      const file = b64toBlob(res.data.profileImage, "image/png");
      res.data.profileImage = URL.createObjectURL(file);
    }
    return res.data;
  });
}

export function patchUser(formData) {
  return axios.patch(`/users`, formData).then((res) => {
    if (res.data.profileImage) {
      const file = b64toBlob(res.data.profileImage, "image/png");
      res.data.profileImage = URL.createObjectURL(file);
    }
    return res.data;
  });
}
