import React, { useState } from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
import TabBar from "../../Components/TabBar/TabBar";
import ItemPage from "../../Pages/ItemPage/ItemPage";
// import MainPage from "../../Pages/MainPage/MainPage";
import SettingPage from "../../Pages/SettingPage/SettingPage";
// import Error from "../Error/Error";
import { FooterWrap, PageWrap } from "./style";

const HomePage = loadable(() => {
  return import("../../Pages/HomePage/HomePage");
});
const Main = () => {
  const [currTabNumber, setCurrTabNumber] = useState(1);
  // const ConvertNumberToPage = useCallback(() => {
  //   switch (Number(currTabNumber)) {
  //     case 0:
  //       return <SettingPage />;
  //     case 1:
  //       return <MainPage />;
  //     case 2:
  //       return <ItemPage />;
  //     default:
  //       return <Error />;
  //   }
  // }, [currTabNumber]);

  return (
    <div>
      {/* <Routes> */}
      <Route path="/home/setting" element={<SettingPage />} />
      <Route path="/home/main" element={<HomePage />} />
      <Route path="/home/item" element={<ItemPage />} />
      {/* </Routes> */}
      <PageWrap>
        {/* {ConvertNumberToPage()} */}
        {/* <BrowserRouter> */}

        {/* </BrowserRouter> */}
      </PageWrap>
      <FooterWrap>
        <TabBar
          setCurrTabNumber={setCurrTabNumber}
          currTabNumber={currTabNumber}
        />
      </FooterWrap>
    </div>
  );
};

export default Main;
