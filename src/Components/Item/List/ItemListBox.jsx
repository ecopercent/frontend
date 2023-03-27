import React, { useState } from "react";
import ItemListTabBtns from "./ItemListTabBtns";
import ItemList from "./ItemList";
import * as S from "./style";

export default function ItemListBox({
  userId,
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
          userId={Number(userId)}
          itemListOf={itemListOf}
          infoItemId={infoItemId}
          setInfoItemId={setInfoItemId}
          setInfoItemCategory={setInfoItemCategory}
        />
      </S.ItemListContainer>
    </>
  );
}
