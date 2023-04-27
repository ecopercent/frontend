import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItemList } from "../../../Api/item";
import TitleSetModal from "../../Modal/TitleSetModal";
import * as S from "./style";

export default function EachInfo({ itemId, itemCategory }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const itemListQuery = useQuery({
    queryKey: [`${itemCategory}`, "list"],
    queryFn: () => {
      return getItemList(itemCategory);
    },
  });

  const infoItem = itemListQuery.data?.filter((item) => {
    return item.id === itemId;
  })[0];

  const navigate = useNavigate();
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
            itemId: Number(itemId),
            category: infoItem.category,
          }}
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
      <S.InfoContainer>
        <S.InfoHeaderDiv>
          <span>{infoItem.nickname}</span>
          <S.InfoBtnContainer>
            <S.TitleSetBtn
              isTitle={infoItem.isTitle}
              disabled={infoItem.isTitle}
              type="button"
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              {infoItem.isTitle ? "대표아이템" : "대표 설정"}
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
              타입
              <br />
              {infoItem.price ? "구입가" : ""}
              <br />
            </S.InfoLabel>
            <S.InfoValue>
              {infoItem.brand || ""}
              <br />
              {infoItem.type || ""}
              <br />
              {infoItem.price ? `${infoItem.price}원` : ""}
            </S.InfoValue>
          </S.ContentPart>
          <S.ContentPart>
            <S.InfoLabel>
              사용횟수
              <br />
              목표횟수
              <br />
              {infoItem.purchaseDate ? "구입일" : ""}
              <br />
            </S.InfoLabel>
            <S.InfoValue>
              {infoItem.currentUsageCount}회
              <br />
              {infoItem.goalUsageCount}회
              <br />
              {infoItem.purchaseDate ? infoItem.purchaseDate.slice(0, 10) : ""}
            </S.InfoValue>
          </S.ContentPart>
        </S.InfoContentsDiv>
      </S.InfoContainer>
    </>
  );
}
