import React, { useCallback } from "react";
import { ItemEditHeadWrapper, DeletreBtn } from "./style";

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
        <DeletreBtn onClick={onclickDeleteItemModal}>삭제</DeletreBtn>
      )}
    </ItemEditHeadWrapper>
  );
};

export default ItemEditHead;
