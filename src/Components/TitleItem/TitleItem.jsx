import React from "react";
import ItmeImageStroke from "./ItmeImageStroke";

const TitleItem = ({ itemInfo }) => {
  if (itemInfo.category === "tumbler") {
    return (
      <div>
        <ItmeImageStroke divideNum={1} imagePath={itemInfo.image} />
        <h3>{itemInfo.nickname}</h3>
        <hr />
        <h1>{itemInfo.usageCount}%</h1>
        <h2>현재 {itemInfo.usageCount}회</h2>
        <h2>목표 {itemInfo.type}회</h2>
      </div>
    );
  }
  // 에코백
  return (
    <div>
      <ItmeImageStroke divideNum={3} imagePath={itemInfo.image} />
      <h3>{itemInfo.nickname}</h3>
      <hr />
      <h1>{itemInfo.usageCount}%</h1>
      <h2>현재 {itemInfo.usageCount}회</h2>
      <h2>목표 {itemInfo.type}회</h2>
    </div>
  );
};

export default TitleItem;
