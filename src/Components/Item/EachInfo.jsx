import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getItem } from "../../Api/item";
import TitleSetModal from "../Modal/TitleSetModal";

export default function EachInfo({ userId, infoItemId }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const itemQuery = useQuery({
    queryKey: [userId, infoItemId],
    queryFn: () => {
      return getItem(infoItemId);
    },
  });

  return (
    <>
      {modalIsOpen && (
        <TitleSetModal
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
      <div>
        <p>{itemQuery.data?.nickname}</p>
        <button
          type="button"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          대표 설정
        </button>
        <button
          type="button"
          onClick={() => {
            return alert("아이템 수정 페이지로 이동!");
          }}
        >
          수정
        </button>
      </div>
      <div>
        <p>
          브랜드
          <br />
          타입
          <br />
          목표횟수
        </p>
        <p>
          {itemQuery.data?.brand || ""}
          <br />
          {itemQuery.data?.type || ""}
          <br />
          300회
        </p>
        <p>
          구입가
          <br />
          구입일
          <br />
          사용횟수
        </p>
        <p>
          {itemQuery.data?.price ? `${itemQuery.data?.price}원` : ""}
          <br />
          {itemQuery.data?.purchaseDate || ""}
          <br />
          {itemQuery.data?.usageCount}회
        </p>
      </div>
    </>
  );
}
