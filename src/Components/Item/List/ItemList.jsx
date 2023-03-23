import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { BsPlusCircle } from "react-icons/bs";
import { getItemList } from "../../../Api/item";
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

  const itemsRef = useRef();

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function scrollToId(id) {
    const map = getMap();
    const node = map.get(id);
    node.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }

  const ulRef = useRef();

  useEffect(() => {
    ulRef.current.firstChild.scrollIntoView();
  }, [itemListOf]);

  return (
    <S.ItemsUl ref={ulRef}>
      {itemListQuery.data?.map((item) => {
        return (
          <S.ItemLi
            key={item.id}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(item.id, node);
              } else {
                map.delete(item.id);
              }
            }}
            featured={infoItemId === item.id}
            onClick={() => {
              scrollToId(item.id);
              setInfoItemId(item.id);
            }}
            onKeyDown={() => {
              return setInfoItemId(item.id);
            }}
          >
            <S.ItemImg src={item.image} alt={item.nickname} />
          </S.ItemLi>
        );
      })}
      <S.ItemAddDiv
        onClick={() => {
          return alert("추가페이지로 이동!");
        }}
        onKeyDown={() => {
          alert("추가페이지로 이동!");
        }}
      >
        <BsPlusCircle size={40} />
      </S.ItemAddDiv>
    </S.ItemsUl>
  );
}
