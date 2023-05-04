import React from "react";
import useImgInput from "../../../hooks/useImgInput";
import * as S from "../style";

const ItemImage = ({ imgFile, setImgFile, category }) => {
  const Form = useImgInput({
    prevImg: imgFile,
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
