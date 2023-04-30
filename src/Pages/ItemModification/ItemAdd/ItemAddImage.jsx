import React from "react";
import * as S from "../style";
import useImgInput from "../../../hooks/useImgInput";

const ItemImage = ({ setImgFile, category }) => {
  const Form = useImgInput({
    prevImgFile: null,
    setUploadedFile: setImgFile,
    type: category,
  });

  return (
    // TODO: 스타일 수정
    <S.ItemImageWrap>
      <Form />
    </S.ItemImageWrap>
  );
};

export default ItemImage;
