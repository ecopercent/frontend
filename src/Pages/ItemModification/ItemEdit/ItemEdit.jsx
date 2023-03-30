import React, { useCallback, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getItem } from "../../../Api/item";
import DeleteItemModal from "./DeleteItemModal";
import ItmeImage from "./ItmeEditImage";
import ItemEditDetail from "./ItemEditDetail";
import ItemEditHead from "./ItemEditHead";
import { ItemEditBorder, ItemEditWrap } from "../style";

const ItemEdit = () => {
  const navigateProps = useLocation();
  const item = navigateProps.state;
  // TODO: item이 없는 경우 리다이렉트하기
  if (!item) return <h1> 로딩중 </h1>;
  const [showdeleteItemModal, setShowdeleteItemModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setShowdeleteItemModal(false);
  }, []);
  const itemDetailQuery = useQuery({
    queryKey: ["item", Number(item.id)],
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
  if (!itemDetail) return <h1>로딩</h1>;
  return (
    <ItemEditWrap>
      <ItemEditBorder width={innerWidth} height={innerHeight}>
        <ItemEditHead
          itemDetail={itemDetail}
          item={item}
          setShowdeleteItemModal={setShowdeleteItemModal}
        />
        <hr />
        <ItmeImage imagePath={itemDetail?.image} oper={item.oper} />
        <hr />
        <ItemEditDetail item={item} itemDetail={itemDetail} />
        <DeleteItemModal
          show={showdeleteItemModal}
          onCloseModal={onCloseModal}
          setShowdeleteItemModal={setShowdeleteItemModal}
          item={item}
        />
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemEdit;
