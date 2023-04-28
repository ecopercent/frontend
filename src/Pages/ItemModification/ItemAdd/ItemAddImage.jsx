import React from "react";
import * as S from "../style";
import useImgInput from "../../../hooks/useImgInput";

const ItemImage = ({ setImgFile, preview, setPreview }) => {
  const Form = useImgInput({
    imgFile: null,
    setImgFile,
    preview,
    setPreview,
    h: 200,
    w: 160,
    radius: "100px",
  });

  return (
    // TODO: 스타일 수정
    <S.ItemImageWrap>
      <Form />
    </S.ItemImageWrap>
  );
};

export default ItemImage;
