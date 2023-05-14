import React from "react";
import cookie from "react-cookies";
import Profile from "../../Components/Home/Profile/Profile";
import TitleItemBox from "../../Components/Home/TitleItems/TitleItemBox";
import { setAccessToken } from "../../Api/jwt";

const Home = () => {
  setAccessToken(cookie.load("access"));

  return (
    <>
      <Profile />
      <TitleItemBox />
    </>
  );
};

export default Home;
