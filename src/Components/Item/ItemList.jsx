import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getItemList } from "../../Api/item";

export default function ItemList({ userId, setInfoItemId }) {
  const [itemListOf, setItemListOf] = useState("tumbler");
  const tumblersQuery = useQuery({
    queryKey: ["tumblers", userId],
    queryFn: getItemList(userId, itemListOf),
  });
  const ecobagsQuery = useQuery({
    queryKey: ["ecobags", userId],
    queryFn: getItemList(userId, itemListOf),
  });

  return (
    <>
      <h3>아이템 리스트 | 유저아이디:{userId}</h3>
      <button
        type="button"
        onClick={() => {
          return setItemListOf("tumbler");
        }}
      >
        텀블러
      </button>
      <button
        type="button"
        onClick={() => {
          return setItemListOf("ecobag");
        }}
      >
        에코백
      </button>
      <ul>
        {itemListOf === "tumbler"
          ? tumblersQuery.data?.map((tumbler) => {
              return (
                <li
                  key={tumbler.id}
                  role="presentation"
                  onClick={() => {
                    return setInfoItemId(tumbler.id);
                  }}
                  onKeyDown={() => {
                    return setInfoItemId(tumbler.id);
                  }}
                >
                  <img src={tumbler.image} alt={tumbler.nickname} />
                </li>
              );
            })
          : ecobagsQuery.data?.map((ecobag) => {
              return (
                <li
                  key={ecobag.id}
                  role="presentation"
                  onClick={() => {
                    return setInfoItemId(ecobag.id);
                  }}
                  onKeyDown={() => {
                    return setInfoItemId(ecobag.id);
                  }}
                >
                  <img src={ecobag.image} alt={ecobag.nickname} />
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
    </>
  );
}
