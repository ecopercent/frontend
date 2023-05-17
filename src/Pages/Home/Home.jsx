import React from "react";
import Profile from "../../Components/Home/Profile/Profile";
import TitleItemBox from "../../Components/Home/TitleItems/TitleItemBox";
import { setAccessToken } from "../../Api/axiosInterceptor";

const Home = () => {
  setAccessToken();

  return (
    <>
      <Profile />
      <TitleItemBox />
    </>
  );
};

export default Home;
