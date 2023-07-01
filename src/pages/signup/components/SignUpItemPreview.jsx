import React, { useEffect, useState } from "react";
import * as S from "./style";

export default function SignUpItemPreview({ initialItem, initialImg }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    let url;
    if (initialImg) url = URL.createObjectURL(initialImg);
    setPreview(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [initialImg]);

  return (
    <S.ItemPreviewBox>
      <S.SetBox>
        <S.ItemImg
          src={preview || `/img/default_${initialItem.category}.png`}
        />
        <span>{initialItem.nickname}</span>
      </S.SetBox>
      <S.BundleOfTwoBox>
        <S.SetBox>
          <S.LabelText>브랜드</S.LabelText>
          <S.ContentText> {initialItem.brand}</S.ContentText>
        </S.SetBox>
        {initialItem.type && (
          <S.SetBox>
            <S.LabelText>재질</S.LabelText>
            <S.ContentText>{initialItem.type}</S.ContentText>
          </S.SetBox>
        )}
      </S.BundleOfTwoBox>
      <S.BundleOfTwoBox>
        {initialItem.price !== 0 && (
          <S.SetBox>
            <S.LabelText>구입가</S.LabelText>
            <S.ContentText>{initialItem.price}</S.ContentText>
          </S.SetBox>
        )}
        {initialItem.purchaseDate && (
          <S.SetBox>
            <S.LabelText>구입일</S.LabelText>
            <S.ContentText>{initialItem.purchaseDate}</S.ContentText>
          </S.SetBox>
        )}
      </S.BundleOfTwoBox>
    </S.ItemPreviewBox>
  );
}
