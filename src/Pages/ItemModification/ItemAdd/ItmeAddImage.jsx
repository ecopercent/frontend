import React from "react";
import * as S from "../style";

const ItmeImage = () => {
  return (
    <S.ItemImageWrap>
      <S.ImageClipper src="/img/userLoadingImage.png" alt="아이템 이미지" />
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
