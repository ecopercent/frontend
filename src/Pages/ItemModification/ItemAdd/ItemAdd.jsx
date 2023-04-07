import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ItmeAddImage from "./ItmeAddImage";
import ItemAddDetail from "./ItemAddDetail";
import ItemAddHead from "./ItemAddHead";
import { ItemEditBorder, ItemEditWrap } from "../style";

const ItemAdd = () => {
  const navigateProps = useLocation();
  const item = navigateProps.state;
  const navigate = useNavigate();
  useEffect(() => {
    if (!item) navigate("/item");
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
  return (
    <ItemEditWrap>
      <ItemEditBorder width={innerWidth} height={innerHeight}>
        <ItemAddHead item={item} />
        <hr />
        <ItmeAddImage />
        <hr />
        <ItemAddDetail item={item} />
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemAdd;
