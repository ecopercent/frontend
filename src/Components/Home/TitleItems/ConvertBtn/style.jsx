import styled from "@emotion/styled";
import * as color from "../../../../style/color";

export const MainSetBtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const AllBtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ConvertBtn = styled.button`
  display: ${(props) => {
    return props.disabled ? `none` : `flex`;
  }};
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  padding: 0px;
  color: black;

  width: 40px;
  height: 40px;
  border: 0px solid;
  border-radius: 50%;
  background-color: ${color.lightGreen};

  cursor: pointer;
`;

export const MainSetBtn = styled.button`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  padding: 0px;
  color: black;

  width: 40px;
  height: 40px;
  border: 0px solid;
  border-radius: 50%;
  background-color: ${color.lightGray};

  cursor: pointer;
`;

export const BothItemBtn = styled.button`
  display: flex;
  align-items: center;
  position: relative;

  width: 40px;
  height: 40px;
  border: 0px solid;
  border-radius: 50%;
  background-color: ${color.lightGray};

  cursor: pointer;
`;
