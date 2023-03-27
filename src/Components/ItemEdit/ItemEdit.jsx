import React, { useCallback, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getItem } from "../../Api/item";
import DeleteItemModal from "./DeleteItemModal";
import ItmeImage from "./ItmeImage";
import ItemDetail from "./ItemDetail";
import ItemEditHead from "./ItemEditHead";
import { ItemEditBorder } from "./style";

const ItemEdit = ({ item }) => {
  const [showdeleteItemModal, setShowdeleteItemModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setShowdeleteItemModal(false);
  }, []);
  const itemDetailQuery = useQuery({
    queryKey: ["itemDetail", Number(item.id)],
    queryFn: () => {
      return getItem(item.id);
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
    // TODO모바일도 wrap 감싸야하네~
    // <div style={{ paddingBottom: "8%" }}>
    <div>
      <ItemEditBorder width={innerWidth} height={innerHeight}>
        <ItemEditHead
          itemDetail={itemDetail}
          item={item}
          setShowdeleteItemModal={setShowdeleteItemModal}
        />
        <hr />
        <ItmeImage imagePath={itemDetail?.image} oper={item.oper} />
        <hr />
        <ItemDetail item={item} />
        <DeleteItemModal
          show={showdeleteItemModal}
          onCloseModal={onCloseModal}
          setShowdeleteItemModal={setShowdeleteItemModal}
          item={item}
        />
      </ItemEditBorder>
    </div>
    // </div>
  );
};

export default ItemEdit;
