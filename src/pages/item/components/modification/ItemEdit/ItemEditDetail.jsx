import React, { useState } from "react";
import useInput from "@hooks/useInput";
import * as S from "../style";

const ItemEditDetail = ({ itemDetail, editCallback, onCancel }) => {
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput(itemDetail.nickname);
  const [brand, onBrand] = useInput(itemDetail.brand);
  const [price, onPrice] = useInput(itemDetail.price);
  const [purchaseDate, onPurchaseData] = useInput(
    itemDetail.purchaseDate ?? ""
  );
  const [type, onType] = useInput(itemDetail.type);
  const targetGoalUsageCount = itemDetail.goalUsageCount ?? 100;
  const typeOptions = {
    tumbler: ["플라스틱", "스테인리스", "유리", "실리콘", "기타"],
    ecobag: ["면", "PVC", "기타"],
  };

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
          <S.Span>
            닉네임 <span style={{ color: "red" }}>*</span>
          </S.Span>
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
          <S.Span>
            브랜드 <span style={{ color: "red" }}>*</span>
          </S.Span>
          <S.Input
            value={brand}
            onChange={onBrand}
            type="text"
            minLength={1}
            maxLength={10}
            placeholder={itemDetail.brand}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>재질</S.Span>
          <S.Select onChange={onType} value={type}>
            <option value="">재질을 선택하세요.</option>
            {typeOptions[itemDetail.category].map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </S.Select>
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
            maxLength={8}
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
      {isError && <S.Error>닉네임과 브랜드는 꼭 작성해주세요!</S.Error>}
      <S.ButtonWrapper>
        <S.CancelBtn type="reset" onClick={onCancel}>
          취소
        </S.CancelBtn>
        <S.SubmitBtn type="submit">저장</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default ItemEditDetail;
