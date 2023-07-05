import React, { useState } from "react";
import useInput from "@hooks/useInput";
import * as S from "../style";

const ItemAddDetail = ({ category, submitCallback, onCancel }) => {
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput("");
  const [brand, onBrand] = useInput("");
  const [price, onPrice] = useInput(0);
  const priceRegExp = /^\d{0,8}$/;
  const [purchaseDate, onPurchaseDate, setPurchaseDate] = useInput("");
  const today = new Date().toISOString().slice(0, 10);
  const [type, onType] = useInput("");
  const targetGoalUsageCount = 100;
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
            type="text"
            value={nickname}
            onChange={onNickname}
            minLength={2}
            maxLength={8}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>
            브랜드 <span style={{ color: "red" }}>*</span>
          </S.Span>
          <S.Input
            type="text"
            value={brand}
            onChange={onBrand}
            minLength={1}
            maxLength={10}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>재질</S.Span>
          <S.Select onChange={onType}>
            <option value={null}>재질을 선택하세요.</option>
            {typeOptions[category].map((option) => {
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
          <S.Input type="number" value={targetGoalUsageCount} readOnly />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>구입가</S.Span>
          <S.Input
            type="number"
            value={price}
            onChange={(e) => {
              if (priceRegExp.test(e.target.value)) onPrice(e);
            }}
            step="1000"
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>구입일</S.Span>
          <S.Input
            type="date"
            max={today}
            value={purchaseDate}
            onChange={(e) => {
              if (e.target.value <= today) onPurchaseDate(e);
              else setPurchaseDate(today);
            }}
          />
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
