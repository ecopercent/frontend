import React from "react";
import * as S from "./style";

export default function SignUpItemPreview({ initialItem }) {
  return (
    <S.ItemPreviewBox>
      <S.SetBox>
        <S.ItemImg />
        <span>{initialItem.nickname}</span>
      </S.SetBox>
      <S.BundleOfTwoBox>
        <S.SetBox>
          <S.LabelText>브랜드</S.LabelText>
          <S.ContentText> {initialItem.brand}</S.ContentText>
        </S.SetBox>
        {initialItem.type && (
          <S.SetBox>
            <S.LabelText>타입</S.LabelText>
            <S.ContentText>{initialItem.type}</S.ContentText>
          </S.SetBox>
        )}
      </S.BundleOfTwoBox>
      <S.BundleOfTwoBox>
        {initialItem.price !== 0 && (
          <S.SetBox>
            <S.LabelText>구매가</S.LabelText>
            <S.ContentText>{initialItem.price}</S.ContentText>
          </S.SetBox>
        )}
        {initialItem.purchaseDate && (
          <S.SetBox>
            <S.LabelText>구매일</S.LabelText>
            <S.ContentText>{initialItem.purchaseDate}</S.ContentText>
          </S.SetBox>
        )}
      </S.BundleOfTwoBox>
    </S.ItemPreviewBox>
  );
}
