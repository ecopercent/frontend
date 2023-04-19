import React, { useState } from "react";
import { getUserId } from "../../Layouts/Login/Login";
import AllInfo from "../../Components/Item/Info/AllInfo";
import EachInfo from "../../Components/Item/Info/EachInfo";
import ItemListBox from "../../Components/Item/List/ItemListBox";
import * as S from "./style";

const Item = () => {
  const userId = getUserId();
  const [infoItemId, setInfoItemId] = useState(0);
  const [infoItemCategory, setInfoItemCategory] = useState("tumbler");

  return (
    <>
      <S.InfoLayout>
        {infoItemId === 0 ? (
          <AllInfo userId={Number(userId)} />
        ) : (
          <EachInfo
            userId={Number(userId)}
            itemId={infoItemId}
            itemCategory={infoItemCategory}
          />
        )}
      </S.InfoLayout>
      <S.ListLayout>
        <ItemListBox
          userId={userId}
          infoItemId={infoItemId}
          setInfoItemId={setInfoItemId}
          setInfoItemCategory={setInfoItemCategory}
        />
      </S.ListLayout>
    </>
  );
};

export default Item;
