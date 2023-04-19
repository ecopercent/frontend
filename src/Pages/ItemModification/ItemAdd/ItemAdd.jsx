import React, { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ItmeAddImage from "./ItmeAddImage";
import ItemAddDetail from "./ItemAddDetail";
import ItemAddHead from "./ItemAddHead";
import { ItemEditBorder, ItemEditWrap } from "../style";
import { postItem } from "../../../Api/item";
import SignUpItemContext from "../../../hooks/SignUpItemContext";
import { getUserId } from "../../../Layouts/Login/Login";

const ItemAdd = () => {
  const item = useLocation().state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!item) {
      navigate("/item");
    }
  }, [item]);
  if (!item) return <>로딩</>;

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
  const itemAddMutation = useMutation({
    mutationFn: postItem,
    onSuccess: () => {
      queryClient.refetchQueries([`${item.category}s`, Number(getUserId())]);
    },
  });

  const addItemOnAuth = useCallback(
    (input) => {
      itemAddMutation.mutate({
        itemUserId: Number(getUserId()),
        itemImage: "이미지피커에서가져올거얏",
        itemNickname: input.nickname,
        itemCategory: item.category,
        itemType: input.type,
        itemBrand: input.brand,
        itemPrice: input.price,
        itemPurchaseDate: input.purchaseDate,
      });

      navigate(-1);
    },
    [item.type]
  );

  const { dispatch } = useContext(SignUpItemContext);
  const addItemOnUnauth = useCallback(
    (input) => {
      dispatch({
        type: `${item.category}Submit`,
        input,
      });
      navigate(-1);
    },
    [dispatch]
  );

  return (
    <ItemEditWrap>
      <ItemEditBorder width={innerWidth} height={innerHeight}>
        <ItemAddHead item={item} />
        <hr />
        <ItmeAddImage />
        <hr />
        <ItemAddDetail
          submitCallback={
            item.type === "auth" ? addItemOnAuth : addItemOnUnauth
          }
        />
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemAdd;
