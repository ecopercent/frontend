import React from "react";
import useImgInput from "@hooks/useImgInput";
import * as S from "../style";

const ItemImage = ({ imgFile, setImgFile, category }) => {
  let url = null;
  if (imgFile && typeof imgFile === "object")
    url = URL.createObjectURL(imgFile);

  const Form = useImgInput({
    prevImg: url || imgFile,
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
