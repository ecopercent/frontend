import React from "react";
import ItmeImageStroke from "./ItmeImageStroke";

const TitleItem = ({ itemInfo }) => {
  return (
    <div>
      <ItmeImageStroke
        divideNum={itemInfo.category === "tumbler" ? 3 : 1}
        imagePath={itemInfo.image}
        itemId={itemInfo.id}
      />
      <div style={{ textAlign: "center", paddingBottom: "10%" }}>
        <h3>{itemInfo.nickname}</h3>
        <hr />
        <h1>{(itemInfo.currentUsageCount / itemInfo.goalUsageCount) * 100}%</h1>
        <h2>현재 {itemInfo.currentUsageCount}회</h2>
        <h2>목표 {itemInfo.goalUsageCount}회</h2>
      </div>
    </div>
  );
};

export default TitleItem;
