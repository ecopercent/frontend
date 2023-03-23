import styled from "@emotion/styled";
import * as font from "../../../style/font";
import * as color from "../../../style/color";

/*
 *          Item List Box
 */

export const ItemCategoryTabContainer = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 0.5px solid;
`;

export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

/*
 *          Item List Tab Bar
 */

export const ListTabBtn = styled.button`
  width: 50%;
  height: 44px;
  padding: 0;

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
`;

export const ItemLi = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  ${(props) => {
    return props.featured
      ? `border: 2px ${color.basicGreen} solid;`
      : `border: 2px rgba(0,0,0,0) solid;`;
  }}
`;

export const ItemAddDiv = styled.li`
  width: 160px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemImg = styled.img`
  width: 160px;
  height: 200px;
  border-radius: 100px;
`;
