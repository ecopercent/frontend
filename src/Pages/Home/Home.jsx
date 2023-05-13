import React from "react";
import Profile from "@components/Home/Profile/Profile";
import TitleItemBox from "@components/Home/TitleItems/TitleItemBox";
import { setAccessToken } from "@api/axiosInterceptor";

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
