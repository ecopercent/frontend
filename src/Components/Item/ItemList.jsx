import React, { useState } from "react";
import TumblerList from "./TumblerList";
import EcobagList from "./EcobagList";

export default function ItemList({ userId, setInfoItemId }) {
  const [itemListOf, setItemListOf] = useState("tumbler");

  return (
    <>
      <h3>아이템 리스트 | 유저아이디:{userId}</h3>
      <button
        onClick={() => {
          return setItemListOf("tumbler");
        }}
      >
        텀블러
      </button>
      <button
        onClick={() => {
          return setItemListOf("ecobag");
        }}
      >
        에코백
      </button>
      {itemListOf === "tumbler" ? (
        <TumblerList setInfoItemId={setInfoItemId} />
      ) : (
        <EcobagList setInfoItemId={setInfoItemId} />
      )}
    </>
  );
}
