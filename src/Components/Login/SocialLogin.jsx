import React from "react";
import kakaoLogin from "./kakaoLogin";

export default function SocialLogin() {
  return (
    <button type="button" onClick={kakaoLogin}>
      카카오
    </button>
  );
}
