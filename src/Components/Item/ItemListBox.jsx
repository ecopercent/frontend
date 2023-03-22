import React, { useState } from "react";
import ItemListTabBtns from "./ItemListTabBtns";
import ItemList from "./ItemList";

export default function ItemListBox({ userId, setInfoItemId }) {
  const [itemListOf, setItemListOf] = useState("tumbler");

  return (
    <>
      <ItemListTabBtns setItemListOf={setItemListOf} />
      <ItemList
        userId={userId}
        itemListOf={itemListOf}
        setInfoItemId={setInfoItemId}
      />
    </>
  );
}
