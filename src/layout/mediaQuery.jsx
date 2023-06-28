import { useMediaQuery } from "react-responsive";

export function Pc({ children }) {
  const isPc = useMediaQuery({
    query: "(min-width:471px)",
  });
  return isPc && children;
}

export function Mobile({ children }) {
  const isMobile = useMediaQuery({
    query: "(max-width:470px)",
  });
  return isMobile && children;
}
