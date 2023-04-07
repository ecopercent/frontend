import React, { useCallback, useState, useEffect, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { getItem, patchItem } from "../../../Api/item";
import DeleteItemModal from "./DeleteItemModal";
import ItmeImage from "./ItmeEditImage";
import ItemEditDetail from "./ItemEditDetail";
import ItemEditHead from "./ItemEditHead";
import { ItemEditBorder, ItemEditWrap } from "../style";
import SignUpItemContext from "../../../hooks/SignUpItemContext";

const ItemEdit = () => {
  const item = useLocation().state;
  const navigate = useNavigate();
  useEffect(() => {
    if (!item) navigate("/item");
  }, [item]);
  if (!item) return <>로딩</>;

  const [showdeleteItemModal, setShowdeleteItemModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowdeleteItemModal(false);
  }, []);

  const itemDetailQuery = useQuery({
    queryKey: ["item", Number(item.id)],
    queryFn: () => {
      return getItem(item.id);
    },
    enabled: item.type === "auth",
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

  const queryClient = useQueryClient();
  const itemEditMutation = useMutation({
    mutationFn: patchItem,
    onSuccess: () => {
      queryClient.refetchQueries(["item", Number(item.id)]);
      queryClient.refetchQueries([
        `${item.category}s`,
        Number(localStorage.getItem("userId")),
      ]);
      queryClient.refetchQueries([
        "title",
        item.category,
        Number(localStorage.getItem("userId")),
      ]);
    },
  });

  const editItemOnAuth = useCallback(
    (input) => {
      itemEditMutation.mutate({
        itemId: Number(item.id),
        itemImage: "이미지피커에서가져올거얏",
        itemNickname: input.nickname,
        itemType: input.type,
        itemBrand: input.brand,
        itemPrice: input.price,
        itemPurchaseDate: input.purchaseDate,
      });
      navigate(-1);
    },
    [itemEditMutation]
  );

  const { state, dispatch } = useContext(SignUpItemContext);
  const editItemOnUnauth = useCallback((input) => {
    dispatch({
      type: `${item.category}Submit`,
      input,
    });
    navigate(-1);
  });

  const itemDetail =
    item.type === "auth" ? itemDetailQuery.data : state[item.category];

  if (!itemDetail) return <h1>로딩중화면으로대체될글</h1>;
  return (
    <ItemEditWrap>
      <ItemEditBorder width={innerWidth} height={innerHeight}>
        <ItemEditHead
          item={item}
          setShowdeleteItemModal={setShowdeleteItemModal}
        />
        <hr />
        <ItmeImage imagePath={itemDetail.image} />
        <hr />
        <ItemEditDetail
          itemDetail={itemDetail}
          editCallback={
            item.type === "auth" ? editItemOnAuth : editItemOnUnauth
          }
        />
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
