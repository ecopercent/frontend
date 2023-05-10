import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AllInfo from "../../Components/Item/Info/AllInfo";
import EachInfo from "../../Components/Item/Info/EachInfo";
import ItemListBox from "../../Components/Item/List/ItemListBox";
import * as S from "./style";

const Item = () => {
  const { state } = useLocation();
  const [infoItemId, setInfoItemId] = useState(state?.item || 0);
  const [infoItemCategory, setInfoItemCategory] = useState(
    state?.category || "tumbler"
  );

  return (
    <>
      <S.InfoLayout>
        {infoItemId === 0 ? (
          <AllInfo />
        ) : (
          <EachInfo itemId={infoItemId} itemCategory={infoItemCategory} />
        )}
      </S.InfoLayout>
      <S.ListLayout>
        <ItemListBox
          infoItemId={infoItemId}
          setInfoItemId={setInfoItemId}
          infoItemCategory={infoItemCategory}
          setInfoItemCategory={setInfoItemCategory}
        />
      </S.ListLayout>
    </>
  );
};

export default Item;
