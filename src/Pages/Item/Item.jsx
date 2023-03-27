// import React, { useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";
import ItemEdit from "../../Components/ItemEdit/ItemEdit";
import { getLogin } from "../../Layouts/Login/Login";
// import AllInfo from "../../Components/Item/Info/AllInfo";
// import EachInfo from "../../Components/Item/Info/EachInfo";
// import ItemListBox from "../../Components/Item/List/ItemListBox";
// import * as S from "./style";

const Item = () => {
  const userId = getLogin();
  if (!userId) return <Navigate to="/login" />;
  const [infoItemId, setInfoItemId] = useState(0);
  const [infoItemCategory, setInfoItemCategory] = useState("tumbler");

  return (
    <>
      {/* <ItemEdit item={{ oper: "add", id: 2 }} /> */}
      <ItemEdit item={{ oper: "edit", id: 1 }} />
      {/* <S.InfoLayout>
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
      </S.ListLayout> */}
    </>
  );
};

export default Item;
