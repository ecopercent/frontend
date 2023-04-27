import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { BsPlusCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getItemList } from "../../../Api/item";
import * as S from "./style";

export default function ItemList({
  itemListOf,
  infoItemId,
  setInfoItemId,
  setInfoItemCategory,
}) {
  const itemListQuery = useQuery({
    queryKey: [`${itemListOf}s`],
    queryFn: () => {
      getItemList(itemListOf);
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

  const navigate = useNavigate();
  const addObj = {
    type: "auth",
    category: itemListOf,
  };

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
              setInfoItemCategory(item.category);
            }}
            onKeyDown={() => {
              scrollToId(item.id);
              setInfoItemId(item.id);
              setInfoItemCategory(item.category);
            }}
          >
            <S.ItemImg src={item.image} alt={item.nickname} />
          </S.ItemLi>
        );
      })}
      <S.ItemAddDiv
        onClick={() => {
          navigate("/item/add", { state: addObj });
        }}
        onKeyDown={() => {
          navigate("/item/add", { state: addObj });
        }}
      >
        <BsPlusCircle size={40} />
      </S.ItemAddDiv>
    </S.ItemsUl>
  );
}
