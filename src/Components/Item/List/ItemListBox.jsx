import React, { useState } from "react";
import ItemListTabBtns from "./ItemListTabBtns";
import ItemList from "./ItemList";
import * as S from "./style";

export default function ItemListBox({
  infoItemId,
  setInfoItemId,
  setInfoItemCategory,
}) {
  const [itemListOf, setItemListOf] = useState("tumbler");

  return (
    <>
      <S.ItemCategoryTabContainer>
        <ItemListTabBtns
          itemListOf={itemListOf}
          setItemListOf={setItemListOf}
        />
      </S.ItemCategoryTabContainer>
      <S.ItemListContainer>
        <ItemList
          itemListOf={itemListOf}
          infoItemId={infoItemId}
          setInfoItemId={setInfoItemId}
          setInfoItemCategory={setInfoItemCategory}
        />
      </S.ItemListContainer>
    </>
  );
}
