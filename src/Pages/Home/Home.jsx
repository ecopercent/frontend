import React from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../Components/Home/Profile/Profile";
import MainItemTab from "../../Components/Home/MainItem/MainItemTab";

const Home = () => {
  const { state } = useLocation();
  return (
    <div>
      <Profile userId={state} />
      <MainItemTab userId={state} />
    </div>
  );
};

export default Home;
