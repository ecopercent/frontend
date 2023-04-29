import React from "react";
import * as S from "../style";
import useImgInput from "../../../hooks/useImgInput";

const ItemImage = ({ setImgFile, preview, setPreview }) => {
  const Form = useImgInput({
    imgFile: null,
    setImgFile,
    preview,
    setPreview,
    type: "item",
  });

  return (
    // TODO: 스타일 수정
    <S.ItemImageWrap>
      <Form />
    </S.ItemImageWrap>
  );
};

export default ItemImage;
