import React from "react";

export default function ItemListTabBtns({ setItemListOf }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          return setItemListOf("tumbler");
        }}
      >
        텀블러
      </button>
      <button
        type="button"
        onClick={() => {
          return setItemListOf("ecobag");
        }}
      >
        에코백
      </button>
    </div>
  );
}
