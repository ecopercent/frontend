import React, { useCallback, useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { getItem, patchItem } from "src/api/item";
import DeleteItemModal from "@components/modal/DeleteItemModal";
import ItemImage from "./ItemEditImage";
import ItemEditDetail from "./ItemEditDetail";
import ItemEditHead from "./ItemEditHead";
import { ItemEditBorder, ItemEditWrap } from "../style";

const ItemEditOnAuth = () => {
  const item = useLocation().state;
  if (!item) return <Navigate to="/item" />;

  const navigate = useNavigate();

  const prevItemInfoQuery = useQuery({
    queryKey: ["item", Number(item.id)],
    queryFn: () => {
      return getItem(item.id);
    },
    enabled: item.type === "auth",
  });

  const queryClient = useQueryClient();
  const itemEditMutation = useMutation({
    mutationFn: patchItem,
    onSuccess: async () => {
      await queryClient.refetchQueries([`${item.category}`, "list"]);
      queryClient.refetchQueries(["item", Number(item.id)]);
      queryClient.refetchQueries(["title", item.category]);
      navigate("/item", { state: { item: item.id, category: item.category } });
    },
  });

  const itemImgFile = useRef(null);
  const setItemImgFile = (img) => {
    itemImgFile.current = img;
  };

  const editItemOnAuth = useCallback(
    (input) => {
      const formData = new FormData();
      const itemData = {
        ...input,
        category: item.category,
      };
      formData.append(
        "itemData",
        new Blob([JSON.stringify(itemData)], { type: "application/json" })
      );
      formData.append("itemImage", itemImgFile.current);
      itemEditMutation.mutate({ formData, id: item.id });
    },
    [itemEditMutation]
  );

  const hancleCancel = () => {
    navigate("/item", {
      state: { item: item.id, category: item.category },
    });
  };

  return (
    <ItemEdit
      category={item.category}
      item={{ ...prevItemInfoQuery.data }}
      onCancel={hancleCancel}
      onSubmit={editItemOnAuth}
      onUploadImg={setItemImgFile}
      displayDeleteBtn
    />
  );
};

export const ItemEdit = ({
  category,
  item,
  itemImg = item.image,
  onCancel,
  onSubmit,
  onUploadImg,
  displayDeleteBtn,
}) => {
  const [showdeleteItemModal, setShowdeleteItemModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowdeleteItemModal(false);
  }, []);

  return (
    <ItemEditWrap>
      <ItemEditBorder>
        <ItemEditHead
          item={item}
          setShowdeleteItemModal={setShowdeleteItemModal}
          displayDeleteBtn={displayDeleteBtn}
        />
        <ItemImage
          imgFile={itemImg}
          setImgFile={onUploadImg}
          category={category}
        />
        <hr />
        <ItemEditDetail
          itemDetail={item}
          editCallback={onSubmit}
          onCancel={onCancel}
        />
        {showdeleteItemModal && (
          <DeleteItemModal onClose={onCloseModal} item={item} />
        )}
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemEditOnAuth;
