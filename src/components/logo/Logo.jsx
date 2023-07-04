import React from "react";
import { LogoImg } from "./style";

export default function Logo({ handleClick }) {
  return <LogoImg src="/logo.png" alt="ecopercent" onClick={handleClick} />;
}
