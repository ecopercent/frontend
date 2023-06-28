import React, { useCallback } from "react";
import { ItemEditHeadWrapper, DeleteBtn, Span } from "../style";

const ItemEditHead = ({ item, setShowdeleteItemModal }) => {
  const onclickDeleteItemModal = useCallback((e) => {
    e.preventDefault();
    setShowdeleteItemModal((prev) => {
      return !prev;
    });
  }, []);

  return (
    <ItemEditHeadWrapper>
      <Span>{item.category === "tumbler" ? "텀블러 수정" : "에코백 수정"}</Span>
      {item.type === "auth" && (
        <DeleteBtn onClick={onclickDeleteItemModal}>삭제</DeleteBtn>
      )}
    </ItemEditHeadWrapper>
  );
};

export default ItemEditHead;
