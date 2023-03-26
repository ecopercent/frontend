import React from "react";
import * as S from "./style";

export default function ItemListTabBtns({ itemListOf, setItemListOf }) {
  return (
    <>
      <S.ListTabBtn
        type="button"
        featured={itemListOf === "tumbler"}
        onClick={() => {
          return setItemListOf("tumbler");
        }}
      >
        텀블러
      </S.ListTabBtn>
      <S.ListTabBtn
        type="button"
        featured={itemListOf === "ecobag"}
        onClick={() => {
          return setItemListOf("ecobag");
        }}
      >
        에코백
      </S.ListTabBtn>
    </>
  );
}
