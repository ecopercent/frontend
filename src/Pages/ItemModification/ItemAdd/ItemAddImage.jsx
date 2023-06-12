import React from "react";
import useImgInput from "@hooks/useImgInput";
import * as S from "../style";

const ItemImage = ({ setImgFile, category }) => {
  const ImgForm = useImgInput({
    prevImg: null,
    setUploadedFile: setImgFile,
    type: category,
  });

  return (
    <S.ItemImageWrap>
      <ImgForm />
    </S.ItemImageWrap>
  );
};

export default ItemImage;
