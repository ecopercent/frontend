import React, { useState, useCallback } from "react";
import TabBar from "../../Components/TabBar/TabBar";
import ItemPage from "../../pages/ItemPage/ItemPage";
import MainPage from "../../pages/MainPage/MainPage";
import SettingPage from "../../pages/SettingPage/SettingPage";
import Error from "../Error/Error";
import { PageWrap, FooterWrap } from "./style";

const Home = () => {
  const [currTabNumber, setCurrTabNumber] = useState(1);
  const ConvertNumberToPage = useCallback(() => {
    switch (Number(currTabNumber)) {
      case 0:
        return <SettingPage />;
      case 1:
        return <MainPage />;
      case 2:
        return <ItemPage />;
      default:
        return <Error />;
    }
  }, [currTabNumber]);

  return (
    <div>
      <PageWrap>{ConvertNumberToPage()}</PageWrap>
      <FooterWrap>
        <TabBar
          setCurrTabNumber={setCurrTabNumber}
          currTabNumber={currTabNumber}
        />
      </FooterWrap>
    </div>
  );
};

export default Home;
