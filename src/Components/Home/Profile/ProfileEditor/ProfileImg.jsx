import React from "react";
import { imgCompress } from "../../../../Utils/convert";
import * as S from "./style";

export default function ProfileImg({
  imgFile,
  setImgFile,
  preview,
  setPreview,
}) {
  const onUpload = async (e) => {
    const uploadedImg = e.target.files[0];
    const reader = new FileReader();
    const compressedImg = await imgCompress(uploadedImg);
    setImgFile(compressedImg);

    reader.readAsDataURL(compressedImg);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

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
        onChange={onUpload}
      />
    </form>
  );
}
