import React from "react";
import useImgInput from "../../../hooks/useImgInput";
import * as S from "../style";

const ItemImage = ({ setImgFile, category }) => {
  const Form = useImgInput({
    prevImgFile: null,
    setUploadedFile: setImgFile,
    type: category,
  });

  return (
    <S.ItemImageWrap>
      <Form />
    </S.ItemImageWrap>
  );
};

export default ItemImage;
