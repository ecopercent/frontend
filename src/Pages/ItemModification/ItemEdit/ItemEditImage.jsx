import React from "react";
import useImgInput from "@hooks/useImgInput";
import * as S from "../style";

const ItemImage = ({ imgFile, setImgFile, category, prevPreview }) => {
  const Form = useImgInput({
    prevImg: imgFile,
    setUploadedFile: setImgFile,
    type: category,
    prevPreview,
  });

  return (
    <S.ItemImageWrap>
      <Form />
    </S.ItemImageWrap>
  );
};

export default ItemImage;
