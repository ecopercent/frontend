import React from "react";

export default function EachInfo({ userId, infoItemId }) {
  return (
    <>
      <div>
        <p>
          아이템닉네임 | 유저아이디:{userId} | 아이템아이디:{infoItemId}
        </p>
        <button
          onClick={() => {
            return alert("대표 설정 모달 띄우기");
          }}
        >
          대표 설정
        </button>
        <button
          onClick={() => {
            return alert("아이템 수정 페이지로 이동!");
          }}
        >
          수정
        </button>
      </div>
      <div>
        <p>브랜드</p>
        <p>타입</p>
        <p>목표횟수</p>
        <p>구입가</p>
        <p>구입일</p>
        <p>사용횟수</p>
      </div>
    </>
  );
}
