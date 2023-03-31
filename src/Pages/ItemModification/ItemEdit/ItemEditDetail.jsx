import React, { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import * as S from "../style";
import useInput from "../../../hooks/useInput";
import { patchItem } from "../../../Api/item";

const ItemEditDetail = ({ item, itemDetail }) => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput(itemDetail.nickname);
  const [brand, onBrand] = useInput(itemDetail.brand);
  const [purchasePrice, onPurchasePrice] = useInput(itemDetail.price);
  const [purchaseDate, onPurchaseData] = useInput(itemDetail.purchaseDate);
  const [type, setType] = useState(itemDetail.type);
  const [targetGoalUsageCount, setTargetGoalUsageCount] = useState(
    itemDetail.goalUsageCount
  );
  const onType = useCallback((e) => {
    const values = e.target.value.split(",");
    setType(e.target.value);
    setTargetGoalUsageCount(values[1]);
  }, []);
  const queryClient = useQueryClient();
  const itemEditMutation = useMutation({
    mutationFn: patchItem,
    onSuccess: () => {
      queryClient.refetchQueries(["item", Number(item.id)]);
      queryClient.refetchQueries([
        `${item.category}s`,
        Number(localStorage.getItem("userId")),
      ]);
      queryClient.refetchQueries([
        "title",
        item.category,
        Number(localStorage.getItem("userId")),
      ]);
    },
  });

  const onEditItem = useCallback(
    (e) => {
      e.preventDefault();
      if (
        !nickname ||
        !nickname.trim() ||
        !brand ||
        !brand.trim() ||
        !type ||
        !type.trim()
      ) {
        setIsError(true);
        return;
      }
      setIsError(false);
      itemEditMutation.mutate({
        itemId: Number(item.id),
        itemImage: "이미지피커에서가져올거얏",
        itemNickname: nickname,
        itemType: type.split(",")[0],
        itemBrand: brand,
        itemPrice: purchasePrice,
        itemPurchaseDate: purchaseDate,
      });
      navigate(-1);
    },
    [nickname, brand, type, targetGoalUsageCount, purchasePrice, purchaseDate]
  );

  return (
    <S.ItemDetailWrapper>
      <S.Form onSubmit={onEditItem}>
        <S.FormInnerWrapper>
          <S.Span>닉네임</S.Span>
          <S.Input
            value={nickname}
            onChange={onNickname}
            type="text"
            maxLength={8}
            minLength={2}
            placeholder={itemDetail.nickname}
          />
          <S.Span>브랜드</S.Span>
          <S.Input
            value={brand}
            onChange={onBrand}
            type="text"
            minLength={1}
            maxLength={12}
            placeholder={itemDetail.brand}
          />
          <S.Span>타입</S.Span>
          <S.Select
            value={type}
            onChange={onType}
            placeholder={itemDetail.type}
          >
            <option value=" ,"> </option>
            {item.category === "tumbler" ? (
              <>
                <option value="도자기컵,210">도자기컵</option>
                <option value="스테인리스,220">스테인리스</option>
                <option value="폴리프로필렌,50">플라스틱(폴리프로필렌)</option>
                <option value="폴리카보네이트,110">
                  플라스틱(폴리카보네이트)
                </option>
              </>
            ) : (
              <>
                <option value="천,10">천</option>
                <option value="가죽,20">가죽</option>
                <option value="레자,30">레자</option>
                <option value="폴리우레탄,40">폴리우레탄</option>
              </>
            )}
          </S.Select>
          <S.Span>목표횟수</S.Span>
          <S.Input
            value={targetGoalUsageCount}
            type="number"
            readOnly
            placeholder={itemDetail.goalUsageCount}
          />
          <S.Span>구입가</S.Span>
          <S.Input
            value={purchasePrice}
            onChange={onPurchasePrice}
            type="number"
            placeholder={itemDetail.price}
          />
          <S.Span>구입일</S.Span>
          <S.Input
            value={purchaseDate}
            onChange={onPurchaseData}
            type="date"
            placeholder={itemDetail.purchaseDate}
          />
        </S.FormInnerWrapper>
        <div
          style={{
            height: "4%",
            marginTop: "1%",
          }}
        >
          {isError && <S.Error>닉네임, 브랜드, 타입은 필수입니다.</S.Error>}
        </div>
        <S.ButtonWrapper>
          <S.CancelBtn
            type="reset"
            onClick={() => {
              navigate(-1);
              // TODO: 카테고리 탭 유지한 페이지로 돌아가기
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

export default ItemEditDetail;
