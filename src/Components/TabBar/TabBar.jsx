import React from "react";

import { TabBarContainer } from "./style";

import TabItem from "./TabItem";

const TabBar = ({ setCurrTabNumber, currTabNumber, routeInfo }) => {
  return (
    <TabBarContainer>
      {routeInfo.map((element, index) => {
        return (
          <TabItem
            key={element.page}
            itemNumber={index}
            IconComponent={element.icon}
            page={element.page}
            setCurrTabNumber={setCurrTabNumber}
            currTabNumber={currTabNumber}
          />
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
