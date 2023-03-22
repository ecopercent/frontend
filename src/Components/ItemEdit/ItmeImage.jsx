import React from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { ImageClipper, FlexCenterWrapper } from "./style";

const ItmeImage = ({ imagePath, oper }) => {
  return (
    <FlexCenterWrapper>
      <ImageClipper
        src={oper === "edit" ? imagePath : "/img/userLoadingImage.png"}
        alt="아이템 이미지"
      />
      <HiOutlineCamera
        style={{
          position: "absolute",
          width: "120px",
          height: "150px",
          borderRadius: "45%",
          padding: "30px 30px",
          background: "rgba(0, 0, 0, 0.2)",
        }}
        color="white"
        onClick={() => {
          console.log("이미지 피커 나와랏");
        }}
      />
    </FlexCenterWrapper>
  );
};

export default ItmeImage;
