import React from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../Components/Profile/Profile";

const Home = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>메인페이지</h1>
      <Profile userId={state} />
    </div>
  );
};

export default Home;
