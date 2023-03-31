import React, { useState } from "react";
import CancelCheckModal from "../Modal/CancelCheckModal";
import * as S from "./style";

export default function SignUpItems({ category }) {
  const [isAdded, setIsAdded] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onAdd = () => {
    // TODO: 아이템 추가 페이지에서 [등록] 누르면 true로 세팅
    alert("아이템 추가 페이지로 이동!");
    setIsAdded(true);
  };

  const onEdit = () => {
    // TODO: 아이템 수정 페이지에서 [등록] 누르면 데이터 세팅
    alert("아이템 수정 페이지로 이동!");
  };

  const onCancel = () => {
    setModalIsOpen(true);
  };

  return (
    <S.InputItem col>
      {modalIsOpen && (
        <CancelCheckModal
          onConfirm={() => {
            setIsAdded(false);
            setModalIsOpen(false);
          }}
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
      <S.LabelBox>
        <S.Label>{category}</S.Label>
        {isAdded ? (
          <>
            <S.Btn onClick={onEdit}>수정</S.Btn>
            <S.Btn warning onClick={onCancel}>
              등록취소
            </S.Btn>
          </>
        ) : (
          <S.Btn onClick={onAdd}>등록</S.Btn>
        )}
      </S.LabelBox>
      {isAdded ? (
        // TODO: 등록된 아이템 정보 표시
        <p>{category} 정보</p>
      ) : (
        <S.NoticeText>아이템은 나중에 등록할 수 있습니다.</S.NoticeText>
      )}
    </S.InputItem>
  );
}
