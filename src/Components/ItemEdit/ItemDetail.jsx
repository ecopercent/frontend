import React, { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditDetailWrapper, Label, Error, Input, Span, Select } from "./style";
import useInput from "../../hooks/useInput";
import { patchItem } from "../../Api/item";

const ItemDetail = ({ item }) => {
  const [isError, setIsError] = useState(false);
  const [nickname, onNickname] = useInput("");
  const [brand, onBrand] = useInput("");
  const [type, onType] = useInput("");
  const [targetCount, onTargetCount] = useInput("");
  const [purchasePrice, onPurchasePrice] = useInput("");
  const [purchaseDate, onPurchaseData] = useInput(Date());
  const queryClient = useQueryClient();

  const itemEditMutation = useMutation({
    mutationFn: patchItem,
    onSuccess: (data) => {
      console.log("result: ", data);
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
      console.log("submiit", purchaseDate, item);
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
    <form onSubmit={onEditItem}>
      <div>
        <EditDetailWrapper>
          <Label>
            <div>
              <Span>닉네임</Span>
              <Input
                value={nickname}
                onChange={onNickname}
                type="text"
                maxLength={8}
                minLength={2}
              />
            </div>
          </Label>
          <Label>
            <div>
              <Span>브랜드</Span>
              <Input
                value={brand}
                onChange={onBrand}
                type="text"
                minLength={1}
                maxLength={12}
              />
            </div>
          </Label>
          <Label>
            <div>
              <Span>타입</Span>
              <Select value={type} onChange={onType}>
                <option value=""> 선택 </option>
                <option value="스테인리스">스테인리스</option>
                <option value="우라늄">우라늄</option>
                <option value="나무">나무</option>
                <option value="오스트랄로피테쿠스">오스트랄로피테쿠스</option>
              </Select>
            </div>
          </Label>
          <Label>
            <div>
              <Span>목표횟수</Span>
              <Input
                value={targetCount}
                onChange={onTargetCount}
                type="number"
              />
            </div>
          </Label>
          <Label>
            <div>
              <Span>구입가</Span>
              <Input
                value={purchasePrice}
                onChange={onPurchasePrice}
                type="number"
              />
            </div>
          </Label>
          <Label>
            <div>
              <Span>구입일</Span>
              <Input
                value={purchaseDate}
                onChange={onPurchaseData}
                type="date"
              />
            </div>
          </Label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "3%",
              width: "35%",
            }}
          >
            <button type="reset">취소</button>
            <button type="submit">저장</button>
          </div>
        </EditDetailWrapper>
        {isError && <Error>닉네임, 브랜드, 타입은 필수입니다.</Error>}
      </div>
    </form>
  );
};

export default ItemDetail;
