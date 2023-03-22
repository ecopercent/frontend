import React from "react";
import { TabBarContainer } from "./style";
import TabItem from "./TabItem";

const TabBar = ({ currTabNumber, routeInfo }) => {
  return (
    <TabBarContainer>
      {routeInfo.map((element, index) => {
        return (
          <TabItem
            key={element.page}
            itemNumber={index}
            IconComponent={element.icon}
            page={element.page}
            currTabNumber={currTabNumber}
          />
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
