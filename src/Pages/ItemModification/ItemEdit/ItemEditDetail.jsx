import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "@hooks/useInput";
import * as S from "../style";

const ItemEditDetail = ({ itemDetail, editCallback }) => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput(itemDetail.nickname);
  const [brand, onBrand] = useInput(itemDetail.brand);
  const [price, onPrice] = useInput(itemDetail.price);
  const [purchaseDate, onPurchaseData] = useInput(itemDetail.purchaseDate);
  const [type, onType] = useInput(itemDetail.type);
  const targetGoalUsageCount = itemDetail.goalUsageCount;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname || !nickname.trim() || !brand || !brand.trim()) {
      setIsError(true);
      return;
    }
    setIsError(false);
    editCallback({ nickname, type, brand, price, purchaseDate });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormInnerWrapper>
        <S.LabelInputSet>
          <S.Span>닉네임</S.Span>
          <S.Input
            value={nickname}
            onChange={onNickname}
            type="text"
            maxLength={8}
            minLength={2}
            placeholder={itemDetail.nickname}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>브랜드</S.Span>
          <S.Input
            value={brand}
            onChange={onBrand}
            type="text"
            minLength={1}
            maxLength={12}
            placeholder={itemDetail.brand}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>타입</S.Span>
          <S.Input value={type} onChange={onType} maxLength={12} />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>목표횟수</S.Span>
          <S.Input
            value={targetGoalUsageCount}
            type="number"
            readOnly
            placeholder={itemDetail.goalUsageCount}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>구입가</S.Span>
          <S.Input
            value={price}
            onChange={(e) => {
              e.preventDefault();
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
              e.target.value = Number(e.target.value);
              onPrice(e);
            }}
            maxLength={12}
            type="number"
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>구입일</S.Span>
          <S.Input
            value={purchaseDate}
            onChange={onPurchaseData}
            type="date"
            placeholder={itemDetail.purchaseDate}
          />
        </S.LabelInputSet>
      </S.FormInnerWrapper>
      {isError && <S.Error>닉네임, 브랜드는 필수입니다.</S.Error>}
      <S.ButtonWrapper>
        <S.CancelBtn
          type="reset"
          onClick={() => {
            navigate("/item", {
              state: { item: itemDetail.id, category: itemDetail.category },
            });
          }}
        >
          취소
        </S.CancelBtn>
        <S.SubmitBtn type="submit">저장</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default ItemEditDetail;
