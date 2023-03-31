import React from "react";
import * as S from "../style";

const ItmeImage = ({ imagePath }) => {
  return (
    <S.ItemImageWrap>
      <S.ImageClipper src={imagePath} alt="아이템 이미지" />
      <S.CameraIcon
        color="white"
        onClick={() => {
          console.log("이미지 피커 나와랏");
        }}
      />
    </S.ItemImageWrap>
  );
};

export default ItmeImage;
