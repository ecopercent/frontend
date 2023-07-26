import React, { useCallback, useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

import { getItem, patchItem } from "src/api/item";

import ItemImage from "./ItemEditImage";
import ItemEditDetail from "./ItemEditDetail";
import ItemEditHead from "./ItemEditHead";
import Spinner from "@components/Spinner";
import DeleteItemModal from "@components/modal/DeleteItemModal";

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
  });

  const queryClient = useQueryClient();
  const itemEditMutation = useMutation({
    mutationFn: patchItem,
    onSuccess: (res) => {
      queryClient.setQueryData(["item", Number(item.id)], res);
      queryClient.refetchQueries(["item", Number(item.id)]);
      if (res.isTitle) queryClient.invalidateQueries(["title", item.category]);
      queryClient.invalidateQueries([`${item.category}`, "list"]);
      navigate("/item", { state: { item: item.id, category: item.category } });
    },
    onError: (code) => {
      if (code.response.status === 400) {
        alert("잘못된 양식을 제출했어요!");
      }
    },
  });

  const itemImgFile = useRef(null);
  const setItemImgFile = (img) => {
    itemImgFile.current = img;
  };

  const editItemOnAuth = useCallback((input) => {
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
  }, []);

  const hancleCancel = () => {
    navigate("/item", {
      state: { item: item.id, category: item.category },
    });
  };

  return (
    <ItemEdit
      item={{ ...prevItemInfoQuery.data }}
      onCancel={hancleCancel}
      onSubmit={editItemOnAuth}
      onUploadImg={setItemImgFile}
      displayDeleteBtn
      isMutating={itemEditMutation.isLoading}
    />
  );
};

export const ItemEdit = ({
  item,
  category = item.category,
  itemImg = item.image,
  onCancel,
  onSubmit,
  onUploadImg,
  displayDeleteBtn,
  isMutating,
}) => {
  const [showdeleteItemModal, setShowdeleteItemModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowdeleteItemModal(false);
  }, []);

  return (
    <ItemEditWrap>
      <ItemEditBorder>
        {category ? (
          <>
            <ItemEditHead
              item={item}
              setShowdeleteItemModal={setShowdeleteItemModal}
              displayDeleteBtn={displayDeleteBtn}
              isMutating={isMutating}
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
              isMutating={isMutating}
            />
            {showdeleteItemModal && (
              <DeleteItemModal onClose={onCloseModal} item={item} />
            )}
          </>
        ) : (
          <Spinner size="50px" />
        )}
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemEditOnAuth;
