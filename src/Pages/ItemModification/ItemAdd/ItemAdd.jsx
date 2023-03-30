import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItmeAddImage from "./ItmeAddImage";
import ItemAddDetail from "./ItemAddDetail";
import ItemAddHead from "./ItemAddHead";
import { ItemEditBorder, ItemEditWrap } from "../style";

const ItemAdd = () => {
  const navigateProps = useLocation();
  const item = navigateProps.state;
  // TODO: item이 없는 경우 리다이렉트하기

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
        <ItmeAddImage imagePath={" "} oper={item.oper} />
        <hr />
        <ItemAddDetail item={item} />
      </ItemEditBorder>
    </ItemEditWrap>
  );
};

export default ItemAdd;
