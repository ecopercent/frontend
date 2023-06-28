import styled from "@emotion/styled";
import { basicGreen, lightGreen } from "@style/color";

export const SettingWrap = styled.div`
  //   border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
`;

export const SettingTitle = styled.div`
  background: ${lightGreen};
  border-radius: 5px;
  padding-left: 2%;
  padding-bottom: 2.5%;
  padding-top: 2.5%;
  margin-bottom: 2.5%;
  font-size: 22px;
  font-weight: bold;
`;

export const HoverSettingTitle = styled.div`
  background: ${lightGreen};
  border-radius: 5px;
  padding-left: 2%;
  padding-bottom: 2.5%;
  padding-top: 2.5%;
  margin-bottom: 2.5%;
  font-size: 22px;
  font-weight: bold;
  :hover {
    background: ${basicGreen};
    color: white;
  }
`;

export const Highlight = styled.div`
  padding: 3%;
  color: ${basicGreen};
  :hover {
    background: ${basicGreen};
    color: white;
  }
  border-radius: 3px;
  cursor: pointer;
`;

export const ColorPlain = styled.span`
  color: ${basicGreen};
`;

export const HoverPlain = styled.div`
  padding: 3%;
  :hover {
    background: ${basicGreen};
    color: white;
  }
  border-radius: 3px;
  cursor: pointer;
`;

export const Plain = styled.div`
  padding: 3%;
  // :hover {
  //   background: ${basicGreen};
  //   color: white;
  // }
  border-radius: 3px;
`;

export const Category = styled.div`
  padding-left: 2%;
  margin-bottom: 3%;
  margin-top: 3%;
  font-size: 20px;
  font-weight: bold;
`;
