import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import * as S from "./style";

export default function ProfileImg({ user, setUser }) {
  const [isUploaded, setIsUploaded] = useState(false);
  const [preview, setPreview] = useState(false);

  async function imgCompress(img) {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressdImg = await imageCompression(img, options);
      console.log("이미지 압축 완료");
      console.log(compressdImg);
      return compressdImg;
    } catch (error) {
      console.log("이미지 압축 실패");
      console.log(error);
      return img;
    }
  }

  async function onUpload(e) {
    const uploadedImg = e.target.files[0];
    // setUser({ ...user, profileImage: uploadedImg });
    const reader = new FileReader();

    console.log("업로드된 이미지");
    console.log(uploadedImg);

    console.log("이미지 압축 시작");
    const compressedImg = await imgCompress(uploadedImg);

    window.URL.revokeObjectURL(user.profileImage);
    setUser({ ...user, profileImage: compressedImg });
    // setIsUploaded(true);

    reader.readAsDataURL(compressedImg);
    reader.onloadend = () => {
      console.log("미리보기를 위한 url로 변환");
      console.log(reader.result);
      // setUser({ ...user, profileImage: reader.result });
      setPreview(reader.result);
      setIsUploaded(true);
    };
  }

  return (
    <form>
      <label htmlFor="profile-img-input">
        <S.ProfileImgOpacity isUploaded={isUploaded} />
        <S.ProfileImgOverlay
          isUploaded={isUploaded}
          src="/img/userProfileImgOverlay.png"
          alt="profile edit"
        />
        <S.ProfileImgPreview
          src={isUploaded ? preview : user.profileImage}
          alt="User profile preview"
        />
      </label>
      <S.ProfileImgInput
        id="profile-img-input"
        type="file"
        accept="image/*"
        onChange={(e) => {
          return onUpload(e);
        }}
      />
    </form>
  );
}
