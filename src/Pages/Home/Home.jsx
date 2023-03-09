import React, { useState } from "react";
import Profile from "../../Components/Profile/Profile";

const Home = () => {
  const [showType, setShowType] = useState(0);
  const clickHandler = (e) => {
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
