import React, { useState } from "react";
import cookie from "react-cookies";
import styled from "@emotion/styled";
import { imgCompress } from "../Utils/convert";

const ImgLayout = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgOpacity = styled.div`
  display: ${(props) => {
    return props.isUploaded ? "none" : "inline-block";
  }};
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  ${(props) => {
    if (props.type === "user")
      return `height: 100.5px;
              width: 100.5px;
              border-radius: 50%;`;
    if (props.type === "signUpUser")
      return `height: 150.5px;
              width: 150.5px;
              border-radius: 50%;`;
    return `height: 200.5px;
            width: 160.5px;
            border-radius: 100px;`;
  }}
  cursor: pointer;
`;

const ImgOverlay = styled.img`
  ${(props) => {
    return props.isUploaded ? "display: none" : "";
  }};
  position: absolute;
  height: 40px;
  width: 40px;
  margin: 30px 30px;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const ImgPreview = styled.img`
  ${(props) => {
    if (props.type === "user")
      return `height: 100.5px;
              width: 100.5px;
              border-radius: 50%;`;
    if (props.type === "signUpUser")
      return `height: 150.5px;
              width: 150.5px;
              border-radius: 50%;`;
    return `height: 200.5px;
            width: 160.5px;
            border-radius: 100px;`;
  }}
  border: 0.5px solid;
  cursor: pointer;
  object-fit: cover;
`;

const useImgInput = ({ prevImg, setUploadedFile, type, prevPreview }) => {
  const [preview, setPreview] = useState(prevPreview);
  let defaultImg;
  if (type === "tumbler") defaultImg = "/img/default_tumbler.png";
  else if (type === "ecobag") defaultImg = "/img/default_ecobag.png";
  else defaultImg = "/img/default_user.png";

  const onUpload = async (e) => {
    if (prevPreview) {
      URL.revokeObjectURL(cookie.load("signupImg"));
      cookie.remove("signupImg", { path: "/" });
    }
    const uploadedImg = e.target.files[0];
    const reader = new FileReader();
    const compressedImg = await imgCompress(uploadedImg);
    setUploadedFile(compressedImg);

    reader.readAsDataURL(compressedImg);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  function Opacity() {
    return <ImgOpacity isUploaded={preview} type={type} />;
  }

  function Overlay() {
    return (
      <ImgOverlay
        isUploaded={preview}
        src="/img/ImgOverlay.png"
        alt="img edit"
      />
    );
  }

  function ImgInput() {
    return (
      <Input
        id="imgFile-input"
        type="file"
        accept="image/*"
        onChange={onUpload}
      />
    );
  }

  function Preview() {
    return (
      <ImgPreview
        src={preview || prevImg || defaultImg}
        alt="img upload preview"
        type={type}
      />
    );
  }

  function ImgInputForm() {
    return (
      <form style={{ position: "relative" }}>
        <ImgLayout htmlFor="imgFile-input">
          <Opacity />
          <Overlay />
          <Preview />
        </ImgLayout>
        <ImgInput />
      </form>
    );
  }

  return ImgInputForm;
};

export default useImgInput;
