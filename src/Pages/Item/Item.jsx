import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AllInfo from "../../Components/Item/AllInfo";
import EachInfo from "../../Components/Item/EachInfo";
import ItemListBox from "../../Components/Item/ItemListBox";
import { getLogin } from "../../Layouts/Login/Login";

const Item = () => {
  const userId = getLogin();
  if (!userId) return <Navigate to="/" />;
  const [infoItemId, setInfoItemId] = useState(0);

  return (
    <div>
      {infoItemId === 0 ? (
        <AllInfo userId={userId} />
      ) : (
        <EachInfo userId={userId} infoItemId={infoItemId} />
      )}
      <ItemListBox
        userId={userId}
        infoItemId={infoItemId}
        setInfoItemId={setInfoItemId}
      />
    </div>
  );
};

export default Item;
