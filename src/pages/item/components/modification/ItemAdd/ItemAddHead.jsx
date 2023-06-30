import React from "react";
import { ItemEditHeadWrapper, ItemEditHead3 } from "../style";

const ItemEditHead = ({ category }) => {
  return (
    <ItemEditHeadWrapper>
      <ItemEditHead3>
        {category === "tumbler" ? "텀블러 추가" : "에코백 추가"}
      </ItemEditHead3>
    </ItemEditHeadWrapper>
  );
};

export default ItemEditHead;
