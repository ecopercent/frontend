import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postItem } from "@api/item";
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
    />
  );
};

export const ItemAdd = ({ category, onCancel, onSubmit, onUploadImg }) => {
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

  return (
    <ItemEditWrap>
      <ItemEditBorder width={innerWidth} height={innerHeight}>
        <ItemAddHead category={category} />
        <hr />
        <ItemImage setImgFile={onUploadImg} category={category} />
        <hr />
        <ItemAddDetail
          category={category}
          submitCallback={onSubmit}
          onCancel={onCancel}
        />
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemAddOnAuth;
