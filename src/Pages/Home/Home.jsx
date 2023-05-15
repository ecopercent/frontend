import React from "react";
import cookie from "react-cookies";
import axios from "axios";
import Profile from "@components/Home/Profile/Profile";
import TitleItemBox from "@components/Home/TitleItems/TitleItemBox";

const Home = () => {
  const access = cookie.load("access");
  axios.defaults.headers.common.Authorization = `Bearer ${access}`;

  return (
    <>
      <Profile />
      <TitleItemBox />
    </>
  );
};

export default Home;
