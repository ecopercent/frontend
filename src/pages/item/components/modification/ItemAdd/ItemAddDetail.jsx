import React, { useState } from "react";
import useInput from "@hooks/useInput";
import * as S from "../style";

const ItemAddDetail = ({ category, submitCallback, onCancel }) => {
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput("");
  const [brand, onBrand] = useInput("");
  const [price, onPrice] = useInput(0);
  const [purchaseDate, onPurchaseData] = useInput("");
  const [type, onType] = useInput("");
  const targetGoalUsageCount = 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname || !nickname.trim() || !brand || !brand.trim()) {
      setIsError(true);
      return;
    }
    setIsError(false);
    submitCallback({ category, nickname, brand, price, purchaseDate, type });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormInnerWrapper>
        <S.LabelInputSet>
          <S.Span>
            닉네임 <span style={{ color: "red" }}>*</span>
          </S.Span>
          <S.Input
            value={nickname}
            onChange={onNickname}
            type="text"
            maxLength={8}
            minLength={2}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>
            브랜드 <span style={{ color: "red" }}>*</span>
          </S.Span>
          <S.Input
            value={brand}
            onChange={onBrand}
            type="text"
            minLength={1}
            maxLength={10}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>타입</S.Span>
          <S.Input value={type} onChange={onType} maxLength={10} />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>목표횟수</S.Span>
          <S.Input value={targetGoalUsageCount} type="number" readOnly />
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
          <S.Input value={purchaseDate} onChange={onPurchaseData} type="date" />
        </S.LabelInputSet>
      </S.FormInnerWrapper>
      <div
        style={{
          height: "4%",
          marginTop: "1%",
        }}
      >
        {isError && <S.Error>닉네임과 브랜드는 꼭 작성해주세요!</S.Error>}
      </div>
      <S.ButtonWrapper>
        <S.CancelBtn type="reset" onClick={onCancel}>
          취소
        </S.CancelBtn>
        <S.SubmitBtn type="submit">저장</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default ItemAddDetail;
