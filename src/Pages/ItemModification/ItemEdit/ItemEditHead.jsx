import React, { useCallback } from "react";
import { ItemEditHeadWrapper, DeleteBtn } from "../style";

const ItemEditHead = ({ item, setShowdeleteItemModal }) => {
  const onclickDeleteItemModal = useCallback((e) => {
    e.preventDefault();
    setShowdeleteItemModal((prev) => {
      return !prev;
    });
  }, []);
  return (
    <ItemEditHeadWrapper>
      {item.category === "tumbler" ? "텀블러 수정" : "에코백 수정"}
      <DeleteBtn onClick={onclickDeleteItemModal}>삭제</DeleteBtn>
    </ItemEditHeadWrapper>
  );
};

export default ItemEditHead;
