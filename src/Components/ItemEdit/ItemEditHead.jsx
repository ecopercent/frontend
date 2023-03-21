import React, { useCallback } from "react";

const ItemEditHead = ({ itemDetail, item, setShowdeleteItemModal }) => {
  const onclickDeleteItemModal = useCallback((e) => {
    e.preventDefault();
    setShowdeleteItemModal((prev) => {
      return !prev;
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "5vh",
        margin: "1%",
      }}
    >
      <h3>
        {itemDetail?.category === "tumbler" ? "텀블러" : "에코백"}{" "}
        {item.oper === "edit" ? "수정" : "추가"}
      </h3>
      {item.oper === "edit" && (
        <button onClick={onclickDeleteItemModal}>삭제</button>
      )}
    </div>
  );
};

export default ItemEditHead;
