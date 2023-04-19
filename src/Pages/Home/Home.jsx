import React, { useEffect } from "react";
import cookie from "react-cookies";
// import axios from "axios";
import Profile from "../../Components/Home/Profile/Profile";
import TitleItemBox from "../../Components/Home/TitleItems/TitleItemBox";
import { setAccess } from "../../Api/jwt";

const Home = () => {
  useEffect(() => {
    if (cookie.load("access")) {
      setAccess(cookie.load("access"));
      cookie.remove("access");
      // axios.defaults.headers.common.Authorization = `Bearer ${cookie.load(
      // "access"
      // )}`;
    }
  }, []);

  return (
    <>
      <Profile />
      <TitleItemBox />
    </>
  );
};

export default Home;
