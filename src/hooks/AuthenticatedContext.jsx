import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

export const AuthenticatedContext = createContext(null);

export function AuthenticatedContextProvider({ children }) {
  const signed = Boolean(
    localStorage.getItem("out") || localStorage.getItem("in")
  );
  const [authenticated, setAuthenticated] = useState(signed);
  const queryClient = useQueryClient();

  const signIn = useMemo(() => {
    return () => {
      localStorage.setItem("in", true);
      setAuthenticated(true);
    };
  }, []);

  const signOut = useMemo(() => {
    return async () => {
      try {
        await axios.post("/signout");
        queryClient.resetQueries(["user"]);
        queryClient.resetQueries(["tumbler"]);
        queryClient.resetQueries(["ecobag"]);
        queryClient.resetQueries(["title"]);
        queryClient.resetQueries(["item"]);
        localStorage.removeItem("out");
        localStorage.removeItem("in");
        setAuthenticated(false);
      } catch (err) {
        alert("잠시 후에 다시 시도해주세요.");
      }
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("out")) {
      signOut();
    }
  }, [localStorage]);

  const value = useMemo(() => {
    return { authenticated, signIn, signOut };
  }, [authenticated, signIn, signOut]);

  return (
    <AuthenticatedContext.Provider value={value}>
      {children}
    </AuthenticatedContext.Provider>
  );
}
