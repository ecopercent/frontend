import React, { useContext, useEffect } from "react";
import { AuthenticatedContext } from "@hooks/AuthenticatedContext";
// import { useNavigate } from "react-router-dom";

export default function SignOut() {
  const { signOut } = useContext(AuthenticatedContext);
  // const navigate = useNavigate();

  // TODO: 자동 이동 전까지 페이지 이동 안되도록 해야 정상 로그아웃돼!
  useEffect(() => {
    setTimeout(() => {
      signOut();
    }, 2000);
  });

  return <h1>세션이 만료되었습니다. 잠시 후 메인으로 이동됩니다.</h1>;
}
