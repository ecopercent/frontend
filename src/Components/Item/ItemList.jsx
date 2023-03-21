import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getItemList } from "../../Api/item";

export default function ItemList({ userId, itemListOf, setInfoItemId }) {
  const itemListQuery = useQuery({
    queryKey: [`${itemListOf}s`, userId],
    queryFn: () => {
      getItemList(userId, itemListOf);
    },
  });

  return (
    <ul>
      <h1>{itemListOf} 리스트</h1>
      {itemListQuery.data?.map((item) => {
        return (
          <li
            key={item.id}
            role="presentation"
            onClick={() => {
              return setInfoItemId(item.id);
            }}
            onKeyDown={() => {
              return setInfoItemId(item.id);
            }}
          >
            <img src={item.image} alt={item.nickname} />
          </li>
        );
      })}
      <li
        role="presentation"
        onClick={() => {
          return alert("추가페이지로 이동!");
        }}
        onKeyDown={() => {
          alert("추가페이지로 이동!");
        }}
      >
        <img alt="아이템 추가" />
      </li>
    </ul>
  );
}
