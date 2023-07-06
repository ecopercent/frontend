import React, { useState } from "react";
import useInput from "@hooks/useInput";
import * as S from "../style";

const ItemEditDetail = ({ itemDetail, editCallback, onCancel }) => {
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput(itemDetail.nickname);
  const [brand, onBrand] = useInput(itemDetail.brand);
  const [price, onPrice] = useInput(itemDetail.price ?? 0);
  const [purchaseDate, onPurchaseDate] = useInput(
    itemDetail.purchaseDate ?? ""
  );
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
    if (!nickname || !nickname.trim() || !brand || !brand.trim()) {
      setIsError(true);
      return;
    }
    setIsError(false);
    editCallback({
      nickname,
      type,
      brand,
      price,
      purchaseDate,
      goalUsageCount,
    });
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
            onChange={onPurchaseDate}
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
