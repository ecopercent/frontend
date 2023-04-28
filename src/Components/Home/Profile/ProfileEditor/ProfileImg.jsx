import React from "react";
import imageCompression from "browser-image-compression";
import * as S from "./style";

export default function ProfileImg({
  imgFile,
  setImgFile,
  preview,
  setPreview,
}) {
  async function imgCompress(img) {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressdImg = await imageCompression(img, options);
      return compressdImg;
    } catch (error) {
      // TODO: 이미지 압축 실패 시 핸들링
      console.log("이미지 압축 실패", error);
      return img;
    }
  }

  async function onUpload(e) {
    const uploadedImg = e.target.files[0];
    const reader = new FileReader();
    const compressedImg = await imgCompress(uploadedImg);
    setImgFile(compressedImg);

    reader.readAsDataURL(compressedImg);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  }

  return (
    <form>
      <label htmlFor="profile-imgFile-input">
        <S.ProfileImgOpacity isUploaded={preview} />
        <S.ProfileImgOverlay
          isUploaded={preview}
          src="/img/userProfileImgOverlay.png"
          alt="profile edit"
        />
        <S.ProfileImgPreview
          src={preview || imgFile}
          alt="User profile preview"
        />
      </label>
      <S.ProfileImgInput
        id="profile-imgFile-input"
        type="file"
        accept="image/*"
        onChange={(e) => {
          return onUpload(e);
        }}
      />
    </form>
  );
}
