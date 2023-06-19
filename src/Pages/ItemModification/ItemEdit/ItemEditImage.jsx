import React from "react";
import useImgInput from "@hooks/useImgInput";
import * as S from "../style";

const ItemImage = ({ imgFile, setImgFile, category }) => {
  let url = null;
  if (imgFile && typeof imgFile === "object") url = URL.createObjectURL(imgFile);

  // TEST: 서버 데이터를 받는 경우와, blob 형태의 경우 확인
  console.log("imgFile 타입", typeof imgFile);
  console.log("url 타입", typeof url);

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
