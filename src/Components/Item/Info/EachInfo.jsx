import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getItemList } from "@api/item";
import TitleSetModal from "@modal/TitleSetModal";
import * as S from "./style";

export default function EachInfo({ itemId, itemCategory }) {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const itemQuery = useQuery({
    queryKey: ["item", Number(itemId)],
    queryFn: () => {
      return getItem(itemId);
    },
  });

  const editObj = {
    id: itemId,
    type: "auth",
    category: itemCategory,
  };

  return (
    <>
      {modalIsOpen && (
        <TitleSetModal
          queryData={{
            itemId,
            category: itemCategory,
          }}
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
      <S.InfoContainer>
        <S.InfoHeaderDiv>
          <span>{itemQuery.data?.nickname}</span>
          <S.InfoBtnContainer>
            <S.TitleSetBtn
              isTitle={itemQuery.data?.isTitle}
              disabled={itemQuery.data?.isTitle}
              type="button"
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              {itemQuery.data?.isTitle ? "대표아이템" : "대표 설정"}
            </S.TitleSetBtn>
            <S.ModifyBtn
              type="button"
              onClick={() => {
                navigate("/item/edit", { state: editObj });
              }}
            >
              수정
            </S.ModifyBtn>
          </S.InfoBtnContainer>
        </S.InfoHeaderDiv>
        <S.InfoContentsDiv>
          <S.ContentPart>
            <S.InfoLabel>
              브랜드
              <br />
              {itemQuery.data?.type !== "" ? "타입" : ""}
              <br />
              {itemQuery.data?.price ? "구입가" : ""}
              <br />
            </S.InfoLabel>
            <S.InfoValue>
              {itemQuery.data?.brand || ""}
              <br />
              {itemQuery.data?.type || ""}
              <br />
              {itemQuery.data?.price ? `${itemQuery.data?.price}원` : ""}
            </S.InfoValue>
          </S.ContentPart>
          <S.ContentPart>
            <S.InfoLabel>
              사용횟수
              <br />
              목표횟수
              <br />
              {itemQuery.data?.purchaseDate ? "구입일" : ""}
              <br />
            </S.InfoLabel>
            <S.InfoValue>
              {itemQuery.data?.currentUsageCount}회
              <br />
              {itemQuery.data?.goalUsageCount}회
              <br />
              {itemQuery.data?.purchaseDate
                ? itemQuery.data?.purchaseDate.slice(0, 10)
                : ""}
            </S.InfoValue>
          </S.ContentPart>
        </S.InfoContentsDiv>
      </S.InfoContainer>
    </>
  );
}
