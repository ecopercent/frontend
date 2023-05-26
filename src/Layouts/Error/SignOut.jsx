import React, { useContext, useEffect } from "react";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function SignOut() {
  const state = localStorage.getItem("out");
  if (!state) return <Navigate to="/" />;

  const { authenticated, signOut } = useContext(AuthenticatedContext);
  const navigate = useNavigate();

  if (authenticated) signOut();

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("out");
      navigate("/");
    }, 2000);
  });

  return <h1>세션이 만료되었습니다. 잠시 후 메인으로 이동됩니다.</h1>;
}
