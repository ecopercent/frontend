import React from "react";
import ItemEdit from "../../Components/ItemEdit/ItemEdit";

const Item = () => {
  return (
    <div>
      <h1>아이템페이지</h1>
      {/* <ItemEdit item={{ oper: "add", id: 2 }} /> */}
      <ItemEdit item={{ oper: "edit", id: 1 }} />
    </div>
  );
};

export default Item;
