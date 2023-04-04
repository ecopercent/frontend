import { useParams, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import TabBar from "../../Components/TabBar/TabBar";
import Error from "../Error/Error";
import Setting from "../../Pages/Setting/Setting";
import Home from "../../Pages/Home/Home";
import Item from "../../Pages/Item/Item";
import * as S from "./style";
import { Pc, Mobile } from "../MediaQuery";
import { lightGreen } from "../../style/color";

const Main = () => {
  if (!localStorage.getItem("userId")) return <Navigate to="/" />;
  const routeInfo = [
    {
      page: "setting",
      jsx: <Setting />,
      icon: AiFillSetting,
    },
    {
      page: "home",
      jsx: <Home />,
      icon: BiHomeAlt,
    },
    {
      page: "item",
      jsx: <Item />,
      icon: BsFillBoxFill,
    },
  ];

  const params = useParams();
  const pageNum = routeInfo.findIndex((info) => {
    return info.page === params.page;
  });
  const [currTabNumber, setCurrTabNumber] = useState(pageNum);

  useEffect(() => {
    setCurrTabNumber(pageNum);
  }, [pageNum]);

  if (params === undefined || currTabNumber === -1 || pageNum === -1)
    return <Error />;

  return (
    <S.PageLayout>
      <Pc>
        <S.PcLayout>
          <h3 style={{ position: "absolute", left: 20 }}>pc</h3>
          <S.PcPageWrap>{routeInfo[currTabNumber].jsx} </S.PcPageWrap>
          <S.FooterWrap>
            <TabBar currTabNumber={currTabNumber} routeInfo={routeInfo} />
          </S.FooterWrap>
        </S.PcLayout>
      </Pc>
      <Mobile>
        <S.MobileLayout>
          <h3 style={{ position: "absolute", left: 20 }}>모바일</h3>
          <S.MobilePageWrap>{routeInfo[currTabNumber].jsx}</S.MobilePageWrap>
          <S.FooterWrap>
            <TabBar currTabNumber={currTabNumber} routeInfo={routeInfo} />
          </S.FooterWrap>
        </S.MobileLayout>
      </Mobile>
    </S.PageLayout>
  );
};

export default Main;
