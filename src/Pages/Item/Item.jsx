import React, { useState } from "react";
import AllInfo from "../../Components/Item/Info/AllInfo";
import EachInfo from "../../Components/Item/Info/EachInfo";
import ItemListBox from "../../Components/Item/List/ItemListBox";
import * as S from "./style";

const Item = () => {
  const [infoItemId, setInfoItemId] = useState(0);
  const [infoItemCategory, setInfoItemCategory] = useState("tumbler");

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
          setInfoItemCategory={setInfoItemCategory}
        />
      </S.ListLayout>
    </>
  );
};

export default Item;
