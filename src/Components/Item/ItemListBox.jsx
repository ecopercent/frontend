import React, { useState } from "react";
import ItemListTabBtns from "./ItemListTabBtns";
import ItemList from "./ItemList";
import * as S from "./style";

export default function ItemListBox({ userId, infoItemId, setInfoItemId }) {
  const [itemListOf, setItemListOf] = useState("tumbler");

  return (
    <S.ItemListLayout>
      <S.ItemCategoryTabDiv>
        <ItemListTabBtns
          itemListOf={itemListOf}
          setItemListOf={setItemListOf}
        />
      </S.ItemCategoryTabDiv>
      <ItemList
        userId={userId}
        itemListOf={itemListOf}
        infoItemId={infoItemId}
        setInfoItemId={setInfoItemId}
      />
    </S.ItemListLayout>
  );
}
