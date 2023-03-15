import React from "react";
import ItmeImageStroke from "./ItmeImageStroke";

const TitleItem = ({ catagory, imagePath }) => {
  // 에코백
  if (catagory === 0) {
    return (
      <div>
        <ItmeImageStroke divideNum={3} imagePath={imagePath} />
        <hr />
        <h1>0%</h1>
        <h2>현재 0회</h2>
        <h2>목표 0회</h2>
      </div>
    );
  }
  // 텀블러
  return (
    <div>
      <ItmeImageStroke divideNum={1} imagePath={imagePath} />
      <hr />
      <h1>0%</h1>
      <h2>현재 0회</h2>
      <h2>목표 0회</h2>
    </div>
  );
};

export default TitleItem;
