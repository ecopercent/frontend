import React from "react";

export default function TumblerList({ setInfoItemId }) {
  return (
    <div>
      <h1>텀블러 리스트들</h1>
      <button
        onClick={() => {
          return setInfoItemId(2);
        }}
      >
        텀블러1
      </button>
      <button
        onClick={() => {
          return setInfoItemId(3);
        }}
      >
        텀블러2
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
