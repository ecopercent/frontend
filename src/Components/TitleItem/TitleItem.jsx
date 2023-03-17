import React from "react";
import ItmeImageStroke from "./ItmeImageStroke";

const TitleItem = ({ itemInfo }) => {
  return (
    <div>
      <ItmeImageStroke
        divideNum={itemInfo.category === "tumbler" ? 3 : 1}
        imagePath={itemInfo.image}
        id={itemInfo.id}
      />
      <h3>{itemInfo.nickname}</h3>
      <hr />
      <h1>{itemInfo.usageCount}%</h1>
      <h2>현재 {itemInfo.usageCount}회</h2>
      <h2>목표 {itemInfo.type}회</h2>
    </div>
  );
};

export default TitleItem;
