import styled from "@emotion/styled";
import * as color from "@style/color";

export const MainSetBtnsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const AllBtnsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DefaultConvertBtn = styled.button`
  display: flex;
  align-content: center;

  width: 40px;
  height: 40px;
  border: 0px solid;
  border-radius: 50%;
  background-color: ${color.lightGray};

  cursor: pointer;

  color: ${(props) => {
    if (props.featured) return `${color.basicGreen}`;
    return `black`;
  }};
`;

export const ConvertBtn = styled(DefaultConvertBtn)`
  display: ${(props) => {
    return props.disabled ? `none` : `flex`;
  }};
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;

  background-color: ${color.lightGreen};
`;

export const MainSetBtn = styled(DefaultConvertBtn)`
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
`;

export const BothItemBtn = styled(DefaultConvertBtn)`
  position: relative;
`;
