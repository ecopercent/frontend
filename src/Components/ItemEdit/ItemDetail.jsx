import React, { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as S from "./style";
import useInput from "../../hooks/useInput";
import { patchItem } from "../../Api/item";

const ItemDetail = ({ item }) => {
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput("");
  const [brand, onBrand] = useInput("");
  const [type, setType] = useState("");
  const [targetCount, setTargetCount] = useState(0);
  const onType = useCallback((e) => {
    const values = e.target.value.split(",");
    setType(e.target.value);
    setTargetCount(values[1]);
  }, []);
  const [purchasePrice, onPurchasePrice] = useInput("");
  const [purchaseDate, onPurchaseData] = useInput(Date());
  const queryClient = useQueryClient();

  const itemEditMutation = useMutation({
    mutationFn: patchItem,
    onSuccess: (data) => {
      queryClient.setQueryData(["itemDetail", item.id], data);
      queryClient.invalidateQueries(["itemDetail", item.id]);
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
        itemId: item.id,
        itemImage: "test",
        itemNickname: nickname,
        itemType: type,
        itemBrand: brand,
        itemPrice: purchasePrice,
        itemPurchaseDate: purchaseDate,
      });
    },
    [nickname, brand, type, targetCount, purchasePrice, purchaseDate]
  );

  // TODO: 스타일 다시 할때 라벨이랑 div 빼고 해보자
  return (
    <S.EditDetailWrapper>
      <S.Form onSubmit={onEditItem}>
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
            <option value=" ,0"> </option>
            <option value="스테인리스,100">스테인리스</option>
            <option value="우라늄,200">우라늄</option>
            <option value="나무,300">나무</option>
            <option value="오스트랄로피테쿠스,400">오스트랄로피테쿠스</option>
          </S.Select>
          <S.Span>목표횟수</S.Span>
          <S.Input
            value={targetCount}
            // onChange={onTargetCount}
            type="number"
            readOnly
          />
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
          <S.CancelBtn type="reset">취소</S.CancelBtn>
          <S.SubmitBtn type="submit">저장</S.SubmitBtn>
        </S.ButtonWrapper>
      </S.Form>
    </S.EditDetailWrapper>
  );
};

export default ItemDetail;
