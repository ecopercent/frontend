import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import ItemEdit from "../../Components/ItemEdit/ItemEdit";
import { getLogin } from "../../Layouts/Login/Login";
import AllInfo from "../../Components/Item/Info/AllInfo";
import EachInfo from "../../Components/Item/Info/EachInfo";
import ItemListBox from "../../Components/Item/ItemListBox";

const Item = () => {
  const userId = getLogin();
  if (!userId) return <Navigate to="/login" />;
  const [infoItemId, setInfoItemId] = useState(0);

  return (
    <div>
      {/* <ItemEdit item={{ oper: "add", id: 2 }} /> */}
      {/* <ItemEdit item={{ oper: "edit", id: 1 }} /> */}
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
