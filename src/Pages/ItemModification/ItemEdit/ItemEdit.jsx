import React, {
  useCallback,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { getItem, patchItem } from "@api/item";
import SignUpItemContext from "@hooks/SignUpItemContext";
import DeleteItemModal from "@components/Modal/DeleteItemModal";
import ItemImage from "./ItemEditImage";
import ItemEditDetail from "./ItemEditDetail";
import ItemEditHead from "./ItemEditHead";
import { ItemEditBorder, ItemEditWrap } from "../style";
// import SmallModal from "@components/Modal/SmallModal";

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
    onSuccess: async () => {
      await queryClient.refetchQueries([`${item.category}`, "list"]);
      queryClient.refetchQueries(["item", Number(item.id)]);
      queryClient.refetchQueries(["title", item.category]);
      navigate("/item", { state: { item: item.id, category: item.category } });
    },
  });

  const itemImgFile = useRef(null);
  const setItemImgFile = (set) => {
    itemImgFile.current = set;
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

  const { state, dispatch } = useContext(SignUpItemContext);
  const editItemOnUnauth = useCallback((input) => {
    dispatch({
      type: `${item.category}Submit`,
      input: { ...input, category: item.category },
    });
    if (itemImgFile.current) {
      dispatch({
        type: `${item.category}Img`,
        input: itemImgFile.current,
      });
    }
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
        <ItemImage
          imgFile={itemDetail.image}
          setImgFile={setItemImgFile}
          category={item.category}
          prevPreview={
            (state[`${item.category}Img`] &&
              URL.createObjectURL(state[`${item.category}Img`])) ||
            null
          }
        />
        <hr />
        <ItemEditDetail
          itemDetail={itemDetail}
          editCallback={
            item.type === "auth" ? editItemOnAuth : editItemOnUnauth
          }
        />
        {showdeleteItemModal && (
          <DeleteItemModal onClose={onCloseModal} item={item} />
        )}
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemEdit;
