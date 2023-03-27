import React, { useCallback, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getItem } from "../../Api/item";
import DeleteItemModal from "./DeleteItemModal";
import ItmeImage from "./ItmeImage";
import ItemDetail from "./ItemDetail";
import ItemEditHead from "./ItemEditHead";
import { ItemEditBorder } from "./style";

const ItemEdit = () => {
  const { state } = useLocation();
  const [showdeleteItemModal, setShowdeleteItemModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setShowdeleteItemModal(false);
  }, []);
  const itemDetailQuery = useQuery({
    queryKey: ["itemDetail", Number(state.id)],
    queryFn: () => {
      return getItem(state.id);
    },
  });
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  useEffect(() => {
    const resizeListener = () => {
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener("resize", resizeListener);
  });

  const itemDetail = itemDetailQuery.data;

  return (
    <div>
      <ItemEditBorder width={innerWidth} height={innerHeight}>
        <ItemEditHead
          itemDetail={itemDetail}
          item={state}
          setShowdeleteItemModal={setShowdeleteItemModal}
        />
        <hr />
        <ItmeImage imagePath={itemDetail?.image} oper={state.oper} />
        <hr />
        <ItemDetail item={state} />
        <DeleteItemModal
          show={showdeleteItemModal}
          onCloseModal={onCloseModal}
          setShowdeleteItemModal={setShowdeleteItemModal}
          item={state}
        />
      </ItemEditBorder>
    </div>
  );
};

export default ItemEdit;
