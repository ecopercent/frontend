import React, { useRef } from "react";
import useOutsideClick from "@hooks/useOutsideClick";
import SmallModal from "./SmallModal";
import * as S from "./style";

export default function CancelCheckModal({ onClose, onConfirm }) {
  const modalRef = useRef();
  useOutsideClick(modalRef, onClose);

  return (
    <SmallModal onClose={onClose}>
      <S.TextContainer>
        <S.ModalTitle>등록 취소</S.ModalTitle>
        <S.ModalContent>
          입력한 정보를 모두 잃게 됩니다.
          <br />
          그래도 취소하시겠습니까?
        </S.ModalContent>
      </S.TextContainer>
      <S.BtnContainer>
        <S.Btn type="button" onClick={onClose}>
          취소
        </S.Btn>
        <S.Btn warning type="button" onClick={onConfirm}>
          확인
        </S.Btn>
      </S.BtnContainer>
    </SmallModal>
  );
}
