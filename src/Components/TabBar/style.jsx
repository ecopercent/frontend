import styled from "@emotion/styled";
import { basicGreen } from "../../style/color";

export const TabBarContainer = styled.div`
  display: flex;
  height: 100%;
  border-top: 0.5px solid;
`;

export const TabItemBackGround = styled.div`
  width: calc(100% / 3);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) => {
    return props.featured ? `color: ${basicGreen};` : "";
  }}

  :hover {
    background-color: ${basicGreen};
    color: white;
  }
`;
