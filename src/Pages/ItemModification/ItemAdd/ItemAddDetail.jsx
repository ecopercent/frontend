import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style";
import useInput from "../../../hooks/useInput";

const ItemAddDetail = ({ submitCallback, category }) => {
  const navigate = useNavigate();
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
    submitCallback({ nickname, brand, price, purchaseDate, type });
  };

  return (
    <S.ItemDetailWrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.FormInnerWrapper>
          <S.Span>닉네임</S.Span>
          <S.Input
            value={nickname}
            onChange={onNickname}
            type="text"
            maxLength={8}
            minLength={2}
          />
          <S.Span>브랜드</S.Span>
          <S.Input
            value={brand}
            onChange={onBrand}
            type="text"
            minLength={1}
            maxLength={12}
          />
          <S.Span>타입</S.Span>
          <S.Input value={type} onChange={onType} maxLength={12} />
          <S.Span>목표횟수</S.Span>
          <S.Input
            style={{ backgroundColor: "lightgray" }}
            value={targetGoalUsageCount}
            type="number"
            readOnly
          />
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
          <S.Span>구입일</S.Span>
          <S.Input value={purchaseDate} onChange={onPurchaseData} type="date" />
        </S.FormInnerWrapper>
        <div
          style={{
            height: "4%",
            marginTop: "1%",
          }}
        >
          {isError && <S.Error>닉네임, 브랜드는 필수입니다.</S.Error>}
        </div>
        <S.ButtonWrapper>
          <S.CancelBtn
            type="reset"
            onClick={() => {
              navigate("/item", { state: { category } });
            }}
          >
            취소
          </S.CancelBtn>
          <S.SubmitBtn type="submit">저장</S.SubmitBtn>
        </S.ButtonWrapper>
      </S.Form>
    </S.ItemDetailWrapper>
  );
};

export default ItemAddDetail;
