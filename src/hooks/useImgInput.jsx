import React from "react";
import styled from "@emotion/styled";
import { imgCompress } from "../Utils/convert";

const ImgOpacity = styled.div`
  display: ${(props) => {
    return props.isUploaded ? "none" : "inline-block";
  }};
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  ${(props) => {
    return `height: ${props.height + 0.5}px;
    width: ${props.width + 0.5}px;`;
  }}
`;

const ImgOverlay = styled.img`
  ${(props) => {
    return props.isUploaded ? "display: none" : "";
  }};
  position: absolute;
  height: 40px;
  width: 40px;
  margin: 30px 30px;
`;

const Input = styled.input`
  display: none;
`;

const ImgPreview = styled.img`
  ${(props) => {
    return `height: ${props.height}px;
    width: ${props.width}px;`;
  }}
  border-radius: 50%;
  border: 0.5px solid;
`;

const useImgInput = ({ imgFile, setImgFile, preview, setPreview, h, w }) => {
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

  function Opacity() {
    return <ImgOpacity isUploaded={preview} height={h} width={w} />;
  }

  function Overlay() {
    return (
      <ImgOverlay
        isUploaded={preview}
        src="/img/ImgOverlay.png"
        alt="img edit"
        height={h}
        width={w}
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
        src={preview || imgFile}
        alt="img upload preview"
        height={h}
        width={w}
      />
    );
  }

  function Form() {
    return (
      <form>
        <label htmlFor="imgFile-input">
          <Opacity />
          <Overlay />
          <Preview />
        </label>
        <ImgInput />
      </form>
    );
  }

  return Form;
};

export default useImgInput;
