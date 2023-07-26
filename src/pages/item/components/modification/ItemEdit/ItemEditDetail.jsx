import React, { useState } from "react";
import useInput from "@hooks/useInput";
import * as S from "../style";

const ItemEditDetail = ({ itemDetail, editCallback, onCancel, isMutating }) => {
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput(itemDetail.nickname);
  const [brand, onBrand] = useInput(itemDetail.brand);
  const [price, onPrice] = useInput(itemDetail.price);
  const priceRegExp = /^\d{0,8}$/;
  const [purchaseDate, onPurchaseDate, setPurchaseDate] = useInput(
    itemDetail.purchaseDate ?? ""
  );
  const today = new Date().toISOString().slice(0, 10);
  const [type, onType] = useInput(itemDetail.type ?? "");
  const [goalUsageCount, onGoalUsageCount, setGoalUsageCount] = useInput(
    itemDetail.goalUsageCount
  );
  const goalUsageCountOptions = {
    tumbler: {
      플라스틱: 110,
      스테인리스: 220,
      유리: 100,
      실리콘: 100,
      기타: "",
    },
    ecobag: {
      면: 131,
      PVC: 37,
      종이: 43,
      기타: "",
    },
  };
  const typeOptions = {
    tumbler: ["플라스틱", "스테인리스", "유리", "실리콘", "기타"],
    ecobag: ["면", "PVC", "종이", "기타"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname || !nickname.trim()) {
      setIsError(true);
      return;
    }
    setIsError(false);
    editCallback({
      nickname: nickname.trim(),
      type,
      brand: brand.trim(),
      price,
      purchaseDate,
      goalUsageCount,
    });
  };
  const handleInputBlur = (e) => {
    e.target.value = e.target.value.trim();
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
            onBlur={handleInputBlur} 
            minLength={2}
            maxLength={8}
            placeholder={itemDetail.nickname}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>브랜드</S.Span>
          <S.Input
            type="text"
            value={brand}
            onChange={onBrand}
            onBlur={handleInputBlur}
            minLength={1}
            maxLength={10}
            placeholder={itemDetail.brand}
          />
        </S.LabelInputSet>
        <S.LabelInputSet>
          <S.Span>재질</S.Span>
          <S.Select
            onChange={(e) => {
              onType(e);
              setGoalUsageCount(
                goalUsageCountOptions[itemDetail.category][e.target.value] ??
                  100
              );
            }}
            value={type}
          >
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
          <S.Span>
            목표횟수 <span style={{ color: "red" }}>*</span>
          </S.Span>
          {type === "기타" ? (
            <S.Input
              value={goalUsageCount}
              onChange={onGoalUsageCount}
              min="100"
              max="3000"
              type="number"
              placeholder="100 ~ 3000"
              required
            />
          ) : (
            <S.Input
              value={goalUsageCount}
              type="number"
              onChange={onGoalUsageCount}
              readOnly
            />
          )}
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
            value={purchaseDate}
            max={today}
            onChange={(e) => {
              if (e.target.value <= today) onPurchaseDate(e);
              else setPurchaseDate(today);
            }}
            placeholder={itemDetail.purchaseDate}
          />
        </S.LabelInputSet>
      </S.FormInnerWrapper>
      {isError && <S.Error>닉네임은 꼭 작성해주세요!</S.Error>}
      <S.ButtonWrapper>
        <S.CancelBtn type="reset" onClick={onCancel} disabled={isMutating}>
          취소
        </S.CancelBtn>
        <S.SubmitBtn type="submit" disabled={isMutating}>
          저장
        </S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default ItemEditDetail;
