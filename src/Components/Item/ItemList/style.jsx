import styled from "@emotion/styled";
import * as font from "../../../style/font";
import * as color from "../../../style/color";

/*
 *          Item List Tab Bar
 */

export const ListTabBtn = styled.button`
  width: 50%;
  padding: 0;
  height: 100%;

  border: 0px;
  background: none;

  ${font.boldBody}
  color: black;

  ${(props) => {
    return (
      props.featured &&
      `border-bottom: 3px ${color.basicGreen} solid;
	   color: ${color.basicGreen}`
    );
  }}
`;

/*
 *          Item List ul/li
 */

export const ItemsUl = styled.ul`
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  // position: absolute;
  // overflow-y: auto;
`;

export const ItemLi = styled.li`
  list-style: none;
  width: 160px;
  height: 200px;

  ${(props) => {
    return (
      (props.isAddBtn && `outline: 1px solid;`) ||
      (props.featured && `outline: 2px ${color.basicGreen} solid;`)
    );
  }}
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;
