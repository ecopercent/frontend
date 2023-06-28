import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import Setting from "@pages/setting";
import Home from "@pages/home";
import Item from "@pages/item";
import TabBar from "../../components/TabBar/TabBar";
import { Pc, Mobile } from "../MediaQuery";
import * as S from "./style";

const PrivateLayout = () => {
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
  // const [currTabNumber, setCurrTabNumber] = useState(pageNum);
  const currTabNumber = pageNum;

  // useEffect(() => {
  //   setCurrTabNumber(pageNum);
  // }, [pageNum]);

  // if (params === undefined || currTabNumber === -1 || pageNum === -1)
  //   return <Navigate to="/home" />;

  return (
    <S.PageLayout>
      <Pc>
        <S.PcLayout>
          <h3 style={{ position: "absolute", left: 20 }}>pc</h3>
          <S.PcPageWrap>
            <Outlet />{" "}
          </S.PcPageWrap>
          <S.FooterWrap>
            <TabBar currTabNumber={currTabNumber} routeInfo={routeInfo} />
          </S.FooterWrap>
        </S.PcLayout>
      </Pc>
      <Mobile>
        <S.MobileLayout>
          <h3 style={{ position: "absolute", left: 20 }}>모바일</h3>
          <S.MobilePageWrap>
            <Outlet />
          </S.MobilePageWrap>
          <S.FooterWrap>
            <TabBar currTabNumber={currTabNumber} routeInfo={routeInfo} />
          </S.FooterWrap>
        </S.MobileLayout>
      </Mobile>
    </S.PageLayout>
  );
};

export default PrivateLayout;
