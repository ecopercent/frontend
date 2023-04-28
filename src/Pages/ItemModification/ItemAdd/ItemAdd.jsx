import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useRef,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ItemImage from "./ItemAddImage";
import ItemAddDetail from "./ItemAddDetail";
import ItemAddHead from "./ItemAddHead";
import { ItemEditBorder, ItemEditWrap } from "../style";
import { postItem } from "../../../Api/item";
import SignUpItemContext from "../../../hooks/SignUpItemContext";

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
      queryClient.refetchQueries([`${item.category}`, "list"]);
    },
  });

  const [preview, setPreview] = useState(null);
  const itemImgFile = useRef();
  const setItemImgFile = (set) => {
    itemImgFile.current = set;
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
      if (itemImgFile.current) {
        formData.append(
          "itemImage",
          new File([itemImgFile.current], "itemImage")
        );
      } else formData.append("itemImage", null);
      // TODO: 아이템 기본 이미지 넣기
      itemAddMutation.mutate(formData);
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
        <ItemImage
          setImgFile={setItemImgFile}
          preview={preview}
          setPreview={setPreview}
        />
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
