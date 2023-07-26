import React, { useCallback, useRef } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postItem } from "src/api/item";
import ItemImage from "./ItemAddImage";
import ItemAddDetail from "./ItemAddDetail";
import ItemAddHead from "./ItemAddHead";
import { ItemEditBorder, ItemEditWrap } from "../style";

const ItemAddOnAuth = () => {
  const item = useLocation().state;
  if (!item) return <Navigate to="/item" />;

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const itemAddMutation = useMutation({
    mutationFn: postItem,
    onSuccess: async (res) => {
      await queryClient.refetchQueries([`${item.category}`, "list"]);
      navigate("/item", { state: { item: res.id, category: item.category } });
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

  const addItemOnAuth = useCallback(
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
      itemAddMutation.mutate(formData);
    },
    [item.type]
  );

  const hancleCancel = () => {
    navigate("/item", { state: { category: item.category } });
  };

  return (
    <ItemAdd
      category={item.category}
      onCancel={hancleCancel}
      onSubmit={addItemOnAuth}
      onUploadImg={setItemImgFile}
      isMutating={itemAddMutation.isLoading}
    />
  );
};

export const ItemAdd = ({
  category,
  onCancel,
  onSubmit,
  onUploadImg,
  isMutating,
}) => {
  return (
    <ItemEditWrap>
      <ItemEditBorder>
        <ItemAddHead category={category} />
        <ItemImage setImgFile={onUploadImg} category={category} />
        <hr />
        <ItemAddDetail
          category={category}
          submitCallback={onSubmit}
          onCancel={onCancel}
          isMutating={isMutating}
        />
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemAddOnAuth;
