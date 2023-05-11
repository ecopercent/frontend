import React from "react";
import ItemListTabBtns from "./ItemListTabBtns";
import ItemList from "./ItemList";
import * as S from "./style";

export default function ItemListBox({
  infoItemId,
  setInfoItemId,
  itemListOf,
  setItemListOf,
}) {
  return (
    <>
      <S.ItemCategoryTabContainer>
        <ItemListTabBtns
          itemListOf={itemListOf}
          setItemListOf={(category) => {
            setInfoItemId(0);
            setItemListOf(category);
          }}
        />
      </S.ItemCategoryTabContainer>
      <S.ItemListContainer>
        <ItemList
          itemListOf={itemListOf}
          infoItemId={infoItemId}
          setInfoItemId={setInfoItemId}
        />
      </S.ItemListContainer>
    </>
  );
}
