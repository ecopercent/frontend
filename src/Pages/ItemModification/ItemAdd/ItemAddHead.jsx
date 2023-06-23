import React from "react";
import { ItemEditHeadWrapper } from "../style";

const ItemEditHead = ({ category }) => {
  return (
    <ItemEditHeadWrapper>
      {category === "tumbler" ? "텀블러 추가" : "에코백 추가"}
    </ItemEditHeadWrapper>
  );
};

export default ItemEditHead;
