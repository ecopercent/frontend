import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import * as S from "./style";

export default function ProfileImg({ user, setUser }) {
  const [isUploaded, setIsUploaded] = useState(false);

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
    const reader = new FileReader();

    console.log("업로드된 이미지");
    console.log(uploadedImg);

    console.log("이미지 압축 시작");
    const compressedImg = await imgCompress(uploadedImg);

    reader.readAsDataURL(compressedImg);
    reader.onloadend = () => {
      console.log("url로 변환");
      console.log(reader.result);
      setUser({ ...user, profileImage: reader.result });
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
          src={
            user.profileImage
              ? user.profileImage
              : "/img/userProfileImgOverlay.png"
          }
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
