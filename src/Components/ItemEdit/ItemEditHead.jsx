import React, { useCallback } from "react";
import { ItemEditHeadWrapper, DeleteBtn } from "./style";

const ItemEditHead = ({ itemDetail, item, setShowdeleteItemModal }) => {
  const onclickDeleteItemModal = useCallback((e) => {
    e.preventDefault();
    setShowdeleteItemModal((prev) => {
      return !prev;
    });
  }, []);

  return (
    <ItemEditHeadWrapper>
      {itemDetail?.category === "tumbler" ? "텀블러 " : "에코백 "}
      {item.oper === "edit" ? "수정" : "추가"}
      {item.oper === "edit" && (
        <DeleteBtn onClick={onclickDeleteItemModal}>삭제</DeleteBtn>
      )}
    </ItemEditHeadWrapper>
  );
};

export default ItemEditHead;
