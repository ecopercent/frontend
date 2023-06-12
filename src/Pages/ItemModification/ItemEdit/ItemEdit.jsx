import React, { useCallback, useState, useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { getItem, patchItem } from "@api/item";
import DeleteItemModal from "@components/Modal/DeleteItemModal";
import ItemImage from "./ItemEditImage";
import ItemEditDetail from "./ItemEditDetail";
import ItemEditHead from "./ItemEditHead";
import { ItemEditBorder, ItemEditWrap } from "../style";

const ItemEditOnAuth = () => {
  const item = useLocation().state;
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
      item={prevItemInfoQuery.data}
      onCancel={hancleCancel}
      onSubmit={editItemOnAuth}
      onUploadImg={setItemImgFile}
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
}) => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!item) navigate("/item");
  // }, [item]);
  // if (!item) return <>로딩</>;

  const [showdeleteItemModal, setShowdeleteItemModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowdeleteItemModal(false);
  }, []);

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

  if (!item) return <h1>로딩중화면으로대체될글</h1>;
  return (
    <ItemEditWrap>
      <ItemEditBorder width={innerWidth} height={innerHeight}>
        <ItemEditHead
          item={item}
          setShowdeleteItemModal={setShowdeleteItemModal}
        />
        <hr />
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
