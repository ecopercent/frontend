import styled from "@emotion/styled";
import { basicGreen, lightGreen } from "../../style/color";

export const SettingWrap = styled.div`
  //   border: 1px solid black;
  border-radius: 10px;
  margin-top: 10%;
`;

export const SettingTitle = styled.div`
  background: ${lightGreen};
  border-radius: 5px;
  padding-left: 2%;
  padding-bottom: 2.5%;
  padding-top: 2.5%;
  margin-bottom: 8%;
  font-size: 22px;
  font-weight: bold;
`;

export const Logout = styled.div`
  padding: ${(prop) => {
    return `${30 / prop.elementCount}%`;
  }};
  color: ${basicGreen};
  :hover {
    background: ${basicGreen};
    color: white;
  }
`;

export const Normal = styled.div`
  padding: ${(prop) => {
    return `${30 / prop.elementCount}%`;
  }};
  :hover {
    background: ${basicGreen};
    color: white;
  }
`;

export const Category = styled.div`
  padding-left: 2%;
  font-size: 20px;
  font-weight: bold;
`;
