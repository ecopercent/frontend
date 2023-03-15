import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../Components/Profile/Profile";
import MainItemTab from "../../Components/MainItem/MainItemTab";
import ItemShowControlloer from "../../Components/TitleItem/ItemShowControlloer";

const Home = () => {
  const { state } = useLocation();
  const [showType, setShowType] = useState(0);
  const clickHandler = useCallback(
    (e) => {
      console.log(e);
      setShowType(e.target.value);
    },
    [showType]
  );
  return (
    <div>
      <h1>메인페이지</h1>
      <Profile userId={state} />
      <MainItemTab userId={state} />
      <button value={0} onClick={clickHandler}>
        둘다
      </button>
      <button value={1} onClick={clickHandler}>
        에코
      </button>
      <button value={2} onClick={clickHandler}>
        텀블
      </button>
      <ItemShowControlloer
        showType={Number(showType)}
        imagePath="/logo192.png"
      />
    </div>
  );
};

export default Home;
