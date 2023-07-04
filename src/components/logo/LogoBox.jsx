import React from "react";
import { LogoImg, LogoWrapper } from "./style";

export default function LogoBox({ handleClick }) {
  return (
    <LogoWrapper onClick={handleClick}>
      <LogoImg src="/logo.png" alt="ecopercent" />
    </LogoWrapper>
  );
}
