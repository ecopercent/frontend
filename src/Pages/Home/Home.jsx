import React, { useState } from "react";
import Profile from "../../Components/Profile/Profile";
// import TileItem from "../../Components/TitleImg/TitleImg";

const Home = () => {
  const [showType, setShowType] = useState(0);
  console.log(showType);
  console.log(showType);
  console.log(showType);
  console.log(showType);
  const clickHandler = (e) => {
    console.log(showType);
    setShowType(e.target.value);
  };

  return (
    <div>
      <Profile />
      <button value={0} onClick={clickHandler}>
        둘다
      </button>
      <button value={1} onClick={clickHandler}>
        에코
      </button>
      <button value={2} onClick={clickHandler}>
        텀블
      </button>
      <h1>메인페이지</h1>
      {/* {converShowType(showType)} */}
    </div>
  );
};

export default Home;
