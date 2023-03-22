import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getUser } from "../../Api/user";
import { getItem } from "../../Api/item";
import TitleSetModal from "../Modal/TitleSetModal";
import * as S from "./style";

export default function EachInfo({ userId, infoItemId }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const itemQuery = useQuery({
    queryKey: ["item", infoItemId],
    queryFn: () => {
      return getItem(infoItemId);
    },
  });

  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return getUser(userId);
    },
  });

  const isTitle =
    infoItemId === userQuery.data?.titleTumblerId ||
    infoItemId === userQuery.data?.titleEcobagId;

  return (
    <>
      {modalIsOpen && (
        <TitleSetModal
          queryData={{
            userId,
            itemId: infoItemId,
            category: itemQuery.data?.category,
          }}
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
      <S.InfoDiv>
        <div>
          <p>{itemQuery.data?.nickname}</p>
          <button
            disabled={isTitle}
            type="button"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            {isTitle ? "대표" : "대표 설정"}
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
      </S.InfoDiv>
    </>
  );
}
