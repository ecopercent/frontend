import React, { useState } from "react";
import AllInfo from "../../Components/Item/AllInfo";
import EachInfo from "../../Components/Item/EachInfo";
import ItemList from "../../Components/Item/ItemList";

// tmp data
const userId = 1;

const Item = () => {
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
