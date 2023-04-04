import styled from "@emotion/styled";
import { basicGreen } from "../../style/color";

export const SettingWrap = styled.div`
  //   border: 1px solid black;
  border-radius: 10px;
`;

export const Logout = styled.div`
  padding: ${(prop) => {
    return `${30 / prop.elementCount}%`;
  }};
  color: ${basicGreen};
`;

export const Normal = styled.div`
  padding: ${(prop) => {
    return `${30 / prop.elementCount}%`;
  }};
`;

export const Category = styled.div``;
