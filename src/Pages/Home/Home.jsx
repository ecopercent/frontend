import React, { useCallback, useState } from "react";
import Profile from "../../Components/Profile/Profile";
import ItemShowControlloer from "../../Components/TitleItem/ItemShowControlloer";

const Home = () => {
  // 유저id로 유저 정보 요청 -> 대표 아이템 아이디 두개 얻을 수 있음 -> 아이디만 넘겨서 안에서 뿌릴까?
  const [showType, setShowType] = useState(0);
  const clickHandler = useCallback(
    (e) => {
      setShowType(e.target.value);
    },
    [showType]
  );

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
      <ItemShowControlloer
        showType={Number(showType)}
        imagePath="/logo192.png"
      />
    </div>
  );
};

export default Home;
