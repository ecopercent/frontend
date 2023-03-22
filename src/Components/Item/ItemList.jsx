import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BsPlusCircle } from "react-icons/bs";
import { getItemList } from "../../Api/item";
import * as S from "./style";

export default function ItemList({
  userId,
  itemListOf,
  infoItemId,
  setInfoItemId,
}) {
  const itemListQuery = useQuery({
    queryKey: [`${itemListOf}s`, userId],
    queryFn: () => {
      getItemList(userId, itemListOf);
    },
  });

  return (
    <S.ItemsContainerUl>
      {itemListQuery.data?.map((item) => {
        return (
          <S.ItemLi
            key={item.id}
            featured={infoItemId === item.id}
            onClick={() => {
              return setInfoItemId(item.id);
            }}
            onKeyDown={() => {
              return setInfoItemId(item.id);
            }}
          >
            <S.ItemImg src={item.image} alt={item.nickname} />
          </S.ItemLi>
        );
      })}
      <S.ItemLi
        isAddBtn
        onClick={() => {
          return alert("추가페이지로 이동!");
        }}
        onKeyDown={() => {
          alert("추가페이지로 이동!");
        }}
      >
        <BsPlusCircle size={40} />
      </S.ItemLi>
    </S.ItemsContainerUl>
  );
}
