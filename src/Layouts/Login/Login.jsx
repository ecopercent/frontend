import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function getLogin() {
  return localStorage.getItem("userId");
}

const Login = () => {
  const navigate = useNavigate();
  const userId = useRef();

  return (
    <div>
      <h1>Login test</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("userId", userId.current.value);
          navigate("/main/home");
        }}
      >
        <input type="number" ref={userId} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};
export default Login;
