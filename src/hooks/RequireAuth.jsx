import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticatedContext } from "./AuthenticatedContext";

export default function RequireAuth({ children }) {
  const { authenticated } = useContext(AuthenticatedContext);

  if (!authenticated) return <Navigate to="/" replace />;

  return children;
}
