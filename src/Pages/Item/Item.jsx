import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AllInfo from "@components/Item/Info/AllInfo";
import EachInfo from "@components/Item/Info/EachInfo";
import ItemListBox from "@components/Item/List/ItemListBox";
import * as S from "./style";

const Item = () => {
  const { state } = useLocation();
  const [infoItemId, setInfoItemId] = useState(state?.item || 0);
  const [itemListOf, setItemListOf] = useState(state?.category || "tumbler");

  return (
    <>
      <S.InfoLayout>
        {infoItemId === 0 ? (
          <AllInfo category={itemListOf} />
        ) : (
          <EachInfo itemId={infoItemId} itemCategory={itemListOf} />
        )}
      </S.InfoLayout>
      <S.ListLayout>
        <ItemListBox
          infoItemId={infoItemId}
          setInfoItemId={setInfoItemId}
          itemListOf={itemListOf}
          setItemListOf={setItemListOf}
        />
      </S.ListLayout>
    </>
  );
};

export default Item;
