import React, { useRef } from "react";
// import { Button, Container, Grid, Stack, Divider, Text } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userId = useRef();

  return (
    <div>
      <h1>Login test</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/main/home", { state: userId.current.value });
        }}
      >
        <input type="number" ref={userId} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};
export default Login;
