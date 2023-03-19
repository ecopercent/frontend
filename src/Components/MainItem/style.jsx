import styled from "@emotion/styled";
import * as color from "../../style/color";

export const TabContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;

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

export const ConvertBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;

  width: 40px;
  height: 40px;
  border: 0px solid;
  border-radius: 50%;
  background-color: ${color.lightGreen};
`;

export const MainSetBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${color.lightGray};
`;

export const BothItemBtn = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${color.lightGray};
`;
