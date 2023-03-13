import React from "react";
import TitleItem from "./TitleItem";
import { TitleItemContainer, Spacer } from "./style";

const TitleItemControlloer = ({ showType, imagePath }) => {
  return (
    <TitleItemContainer>
      {(showType === 0 || showType === 1) && (
        <TitleItem catagory={0} imagePath={imagePath} />
      )}
      {showType === 0 && <Spacer />}
      {(showType === 0 || showType === 2) && (
        <TitleItem catagory={1} imagePath={imagePath} />
      )}
    </TitleItemContainer>
  );
};

export default TitleItemControlloer;
