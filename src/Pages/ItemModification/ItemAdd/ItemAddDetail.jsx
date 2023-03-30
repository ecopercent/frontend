import React, { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import * as S from "../style";
import useInput from "../../../hooks/useInput";
import { postItem } from "../../../Api/item";
import makeDateStr from "../../../Utils/date";

const ItemAddDetail = ({ item }) => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput("");
  const [brand, onBrand] = useInput("");
  const [purchasePrice, onPurchasePrice] = useInput(0);
  const [purchaseDate, onPurchaseData] = useInput(makeDateStr());
  const [type, setType] = useState("");
  const [targetGoalUsageCount, setTargetGoalUsageCount] = useState(0);
  const onType = useCallback((e) => {
    const values = e.target.value.split(",");
    setType(e.target.value);
    setTargetGoalUsageCount(values[1]);
  }, []);
  const queryClient = useQueryClient();
  const itemAddMutation = useMutation({
    mutationFn: postItem,
    onSuccess: () => {
      queryClient.refetchQueries([
        `${item.category}s`,
        Number(localStorage.getItem("userId")),
      ]);
    },
  });
  const onAddItem = useCallback(
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
      itemAddMutation.mutate({
        itemUserId: Number(localStorage.getItem("userId")),
        itemImage: "이미지피커에서가져올거얏",
        itemNickname: nickname,
        itemCategory: item.category,
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
    <S.ItemeDetailWrapper>
      <S.Form onSubmit={onAddItem}>
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
          <S.Select value={type} onChange={onType}>
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
          <S.Input value={targetGoalUsageCount} type="number" readOnly />
          <S.Span>구입가</S.Span>
          <S.Input
            value={purchasePrice}
            onChange={onPurchasePrice}
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
    </S.ItemeDetailWrapper>
  );
};

export default ItemAddDetail;
