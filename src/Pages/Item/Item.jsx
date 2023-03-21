import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AllInfo from "../../Components/Item/AllInfo";
import EachInfo from "../../Components/Item/EachInfo";
import ItemList from "../../Components/Item/ItemList";
import { getLogin } from "../../Layouts/Login/Login";

const Item = () => {
  const userId = getLogin();
  if (!userId) return <Navigate to="/" />;
  const [infoItemId, setInfoItemId] = useState(0);

  return (
    <div>
      <h1>아이템페이지</h1>
      {infoItemId === 0 ? (
        <AllInfo userId={userId} />
      ) : (
        <EachInfo userId={userId} infoItemId={infoItemId} />
      )}
      <ItemList userId={userId} setInfoItemId={setInfoItemId} />
    </div>
  );
};

export default Item;