import React, { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import ModalContainer from "./ModalContainer";

export default function TitleSetModal({ onClose }) {
  const modalRef = useRef();
  useOutsideClick(modalRef, onClose);

  return (
    <ModalContainer>
      <div>
        <div ref={modalRef} style={{ backgroundColor: "yellow" }}>
          <h1>대표아이템 설정</h1>
          <p>대표 아이템을 변경하시겠습니까?</p>
          <div>
            <button
              type="button"
              onClick={() => {
                return onClose();
              }}
            >
              취소
            </button>
            <button
              type="button"
              onClick={() => {
                return onClose();
              }}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
