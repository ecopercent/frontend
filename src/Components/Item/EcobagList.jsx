import React from "react";

export default function EcobagList({ setInfoItemId }) {
  return (
    <div>
      <h1>에코백 리스트들</h1>
      <button
        onClick={() => {
          return setInfoItemId(1);
        }}
      >
        에코백1
      </button>
      <button
        onClick={() => {
          return alert("아이템 추가 페이지로 이동!");
        }}
      >
        아이템 추가
      </button>
    </div>
  );
}
