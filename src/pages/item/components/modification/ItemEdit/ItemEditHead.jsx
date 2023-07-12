import React, { useCallback } from "react";
import { ItemEditHeadWrapper, DeleteBtn, ItemEditHead3 } from "../style";

const ItemEditHead = ({
  item,
  setShowdeleteItemModal,
  displayDeleteBtn,
  isMutating,
}) => {
  const onclickDeleteItemModal = useCallback((e) => {
    e.preventDefault();
    setShowdeleteItemModal((prev) => {
      return !prev;
    });
  }, []);

  return (
    <ItemEditHeadWrapper>
      <ItemEditHead3>
        {item.category === "tumbler" ? "텀블러 수정" : "에코백 수정"}
      </ItemEditHead3>
      {displayDeleteBtn && (
        <DeleteBtn onClick={onclickDeleteItemModal} disabled={isMutating}>
          삭제
        </DeleteBtn>
      )}
    </ItemEditHeadWrapper>
  );
};

export default ItemEditHead;
