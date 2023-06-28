import React from "react";
import { ItemEditHeadWrapper, Span } from "../style";

const ItemEditHead = ({ category }) => {
  return (
    <ItemEditHeadWrapper>
      <Span>{category === "tumbler" ? "텀블러 추가" : "에코백 추가"}</Span>
    </ItemEditHeadWrapper>
  );
};

export default ItemEditHead;
