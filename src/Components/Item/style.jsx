import styled from "@emotion/styled";
import * as btn from "../../style/button";
import * as font from "../../style/font";

/*
 *          Info
 */

export const InfoDiv = styled.div`
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
`;

export const InfoValue = styled.span`
  text-align: right;
`;

export const ModifyBtn = styled.div`
  ${btn.normal}
  ${font.normalBtn}
`;

export const TitleSetBtn = styled.div`
  ${btn.green}
  ${font.normalBtn}
`;

/*
 *          Item List
 */

export const ItemListContainer = styled.div`
  width: 100% - margin;
  margin: 10px 10px;
  border: 1px solid;
  border-radius: 10px;
`;

export const ItemCategoryTabDiv = styled.div`
  width: 100%;
  padding: 10px 10px;
  border-bottom: 0.5px solid;
`;

export const ItemListDiv = styled.div`
  width: 100%px;

  display: flex;
  display-direction: column;
  justify-content: center;
`;
