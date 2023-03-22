import React, { useState } from "react";
import ItemListTabBtns from "./ItemListTabBtns";
import ItemList from "./ItemList";
import * as S from "./style";

export default function ItemListBox({ userId, setInfoItemId }) {
  const [itemListOf, setItemListOf] = useState("tumbler");

  return (
    <S.ItemListContainer>
      <S.ItemCategoryTabDiv>
        <ItemListTabBtns setItemListOf={setItemListOf} />
      </S.ItemCategoryTabDiv>
      <S.ItemListDiv>
        <ItemList
          userId={userId}
          itemListOf={itemListOf}
          setInfoItemId={setInfoItemId}
        />
      </S.ItemListDiv>
    </S.ItemListContainer>
  );
}
