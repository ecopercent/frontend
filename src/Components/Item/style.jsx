import styled from "@emotion/styled";
import * as btn from "../../style/button";
import * as font from "../../style/font";
import * as color from "../../style/color";

/*
 *          Info
 */

export const InfoLayout = styled.div`
  width: 100% - margin;
  margin: 10px 10px;
  border: 1px solid;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`;

export const InfoHeaderDiv = styled.div`
  width: 100%;
  height: 44px;
  padding: 10px 20px;
  border-bottom: 0.5px solid;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${font.boldBody}
`;

export const InfoContentsDiv = styled.div`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
`;

export const InfoBtnContainer = styled.div`
  display: flex;
  gap: 7px;
`;

export const ContentPart = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const InfoLabel = styled.span`
  text-align: left;
  ${font.boldSmall}
  line-height: 150%;
`;

export const InfoValue = styled.span`
  text-align: right;
  ${font.normalSmall}
  line-height: 150%;
`;

export const ModifyBtn = styled.button`
  ${btn.normal}
  ${font.normalBtn}
`;

export const TitleSetBtn = styled.button`
  ${btn.green}
  ${font.normalBtn}

  ${(props) => {
    return (
      props.isTitle &&
      `letter-spacing: -1px;
	  font-size: 12px;
	  padding: 0px;
	  color: gray;`
    );
  }}
`;

/*
 *          List View Category Set Buttons
 */

export const ItemCategoryTabDiv = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 0.5px solid;
`;

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
 *          Item List
 */

export const ItemListLayout = styled.div`
  width: 100% - margin;
  margin: 10px 10px;
  border: 1px solid;
  border-radius: 10px;
`;

export const ItemsContainerUl = styled.ul`
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ItemLi = styled.li`
  list-style: none;
  width: 160px;
  height: 200px;

  ${(props) => {
    return props.isAddBtn && `border: 1px solid;`;
  }}
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
