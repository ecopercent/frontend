import React, { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getItem from "../../Api/item";
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
    queryKey: ["itemDetail", item.id],
    queryFn: () => {
      return getItem(item.id);
    },
  });
  
  const itemDetail = itemDetailQuery.data;
  console.log("cuuritemDetail:", itemDetail);

  return (
    <ItemEditBorder>
      <ItemEditHead
        itemDetail={itemDetail}
        item={item}
        setShowdeleteItemModal={setShowdeleteItemModal}
      />
      <hr />
      <ItmeImage imagePath={itemDetail?.image} oper={item.oper} />
      <ItemDetail item={item} />
      <DeleteItemModal
        show={showdeleteItemModal}
        onCloseModal={onCloseModal}
        setShowdeleteItemModal={setShowdeleteItemModal}
        item={item}
      />
    </ItemEditBorder>
  );
};

export default ItemEdit;
