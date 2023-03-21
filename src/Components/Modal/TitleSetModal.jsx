import React from "react";

export default function TitleSetModal({ onClose }) {
  return (
    <div>
      <div>
        <h1>대표아이템 설정</h1>
        <p>대표 아이템을 변경하시겠습니까?</p>
        <div>
          <button
            onClick={() => {
              return onClose();
            }}
          >
            취소
          </button>
          <button
            onClick={() => {
              return onClose();
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
