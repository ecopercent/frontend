import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getItemList } from "../../../Api/item";
import TitleSetModal from "../../Modal/TitleSetModal";
import * as S from "./style";

export default function EachInfo({ userId, itemId, itemCategory }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const itemListQuery = useQuery({
    queryKey: [`${itemCategory}s`, userId],
    queryFn: () => {
      return getItemList(userId, itemCategory);
    },
  });

  const infoItem = itemListQuery.data?.filter((item) => {
    return item.id === itemId;
  });

  return (
    <>
      {modalIsOpen && (
        <TitleSetModal
          queryData={{
            userId: Number(userId),
            itemId: Number(itemId),
            category: infoItem[0].category,
          }}
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
      <S.InfoContainer>
        <S.InfoHeaderDiv>
          <span>{infoItem[0].nickname}</span>
          <S.InfoBtnContainer>
            <S.TitleSetBtn
              isTitle={infoItem[0].isTitle}
              disabled={infoItem[0].isTitle}
              type="button"
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              {infoItem[0].isTitle ? "대표아이템" : "대표 설정"}
            </S.TitleSetBtn>
            <S.ModifyBtn
              type="button"
              onClick={() => {
                return alert("아이템 수정 페이지로 이동!");
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
              목표횟수
            </S.InfoLabel>
            <S.InfoValue>
              {infoItem[0].brand || ""}
              <br />
              {infoItem[0].type || ""}
              <br />
              300회
            </S.InfoValue>
          </S.ContentPart>
          <S.ContentPart>
            <S.InfoLabel>
              구입가
              <br />
              구입일
              <br />
              사용횟수
            </S.InfoLabel>
            <S.InfoValue>
              {infoItem[0].price ? `${infoItem[0].price}원` : ""}
              <br />
              {infoItem[0].purchaseDate
                ? infoItem[0].purchaseDate.slice(0, 10)
                : ""}
              <br />
              {infoItem[0].currentUsageCount}회
            </S.InfoValue>
          </S.ContentPart>
        </S.InfoContentsDiv>
      </S.InfoContainer>
    </>
  );
}
