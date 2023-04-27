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
  function b64toBlob(b64Data, contentType) {
    const sliceSize = 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i += 1) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new File(byteArrays, "pot", { type: contentType });
  }

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
    return res.data;
  });
}
