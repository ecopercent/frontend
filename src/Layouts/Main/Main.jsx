import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import TabBar from "../../Components/TabBar/TabBar";
import Error from "../Error/Error";
import Setting from "../../Pages/Setting/Setting";
import Home from "../../Pages/Home/Home";
import Item from "../../Pages/Item/Item";
import { FooterWrap, PageWrap } from "./style";

const routeInfo = [
  {
    page: "setting",
    jsx: Setting,
    icon: AiFillSetting,
  },
  {
    page: "home",
    jsx: Home,
    icon: BiHomeAlt,
  },
  {
    page: "item",
    jsx: Item,
    icon: BsFillBoxFill,
  },
];

const generateFindIndexCondition = (page) => {
  return (arrElement) => {
    return arrElement.page === page;
  };
};

const Main = () => {
  const params = useParams();
  const pageNum = routeInfo.findIndex(generateFindIndexCondition(params.page));
  const [currTabNumber, setCurrTabNumber] = useState(pageNum);

  if (params === undefined || currTabNumber === -1) return <Error />;

  return (
    <div>
      <PageWrap>{routeInfo[currTabNumber].jsx()}</PageWrap>
      <FooterWrap>
        <TabBar
          setCurrTabNumber={setCurrTabNumber}
          currTabNumber={currTabNumber}
          routeInfo={routeInfo}
        />
      </FooterWrap>
    </div>
  );
};

export default Main;
