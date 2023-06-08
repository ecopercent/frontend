import React, {
  useState,
  useEffect,
  useCallback,
  // useContext,
  useRef,
} from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postItem } from "@api/item";
// import SignUpItemContext from "@hooks/SignUpItemContext";
import ItemImage from "./ItemAddImage";
import ItemAddDetail from "./ItemAddDetail";
import ItemAddHead from "./ItemAddHead";
import { ItemEditBorder, ItemEditWrap } from "../style";

const ItemAddOnAuth = () => {
  const item = useLocation().state;
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const itemAddMutation = useMutation({
    mutationFn: postItem,
    onSuccess: async (res) => {
      await queryClient.refetchQueries([`${item.category}`, "list"]);
      navigate("/item", { state: { item: res.id, category: item.category } });
    },
  });

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
      // TODO: 이미지 저장 처리
      // formData.append("itemImage", itemImgFile.current);
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
    />
  );
};

export const ItemAdd = ({ category, onCancel, onSubmit }) => {
  // const item = {
  //   category: "tumbler",
  // };

  // useEffect(() => {
  //   if (!item) {
  //     navigate("/item");
  //   }
  // }, [item]);
  // if (!item) return <>로딩</>;

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

  const itemImgFile = useRef(null);
  const setItemImgFile = (set) => {
    itemImgFile.current = set;
  };

  return (
    <ItemEditWrap>
      <ItemEditBorder width={innerWidth} height={innerHeight}>
        <ItemAddHead category={category} />
        <hr />
        <ItemImage setImgFile={setItemImgFile} category={category} />
        <hr />
        <ItemAddDetail
          submitCallback={onSubmit}
          // category={item.category}
          onCancel={onCancel}
        />
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemAddOnAuth;
