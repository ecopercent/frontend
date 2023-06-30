import React, { useEffect, useRef } from "react";
import useOutsideClick from "@hooks/useOutsideClick";
import ModalContainer from "./ModalContainer";
import * as S from "./style";

export default function LargeModal({ onClose, children }) {
  const modalRef = useRef();
  useOutsideClick(modalRef, onClose);

  // body의 스크롤 block
  useEffect(() => {
    const body = document.querySelector("body");
    const { overflow } = body.style;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = overflow;
    };
  });

  return (
    <ModalContainer>
      <S.backgroundOverlay>
        <S.LargeModalLayout ref={modalRef}>{children}</S.LargeModalLayout>
      </S.backgroundOverlay>
    </ModalContainer>
  );
}
