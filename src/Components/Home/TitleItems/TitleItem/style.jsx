import styled from "@emotion/styled";
import * as font from "../../../../style/font";
import * as color from "../../../../style/color";

export const Spacer = styled.span`
  display: block;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;
`;

export const ImageClipper = styled.img`
  position: relative;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  // border: 1px solid;
`;

export const StrokePath = styled.path`
  fill: ${color.basicGreen};
`;

/*
 *      Title Item
 */

export const TitleInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const PercentBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 10px;
`;

export const HugePercent = styled.span`
  ${font.boldPercent}
  line-height: 1;
  ${(props) => {
    if (props.percent < 50) return `color: ${color.lowGreen};`;
    if (props.percent < 100) return `color: ${color.mediumGreen};`;
    return `color: ${color.highGreen};`;
  }}
`;

export const NormalText = styled.span`
  ${font.normalBody}
`;

export const BoldText = styled.span`
  ${font.boldTitle3}
`;

/*
 *      No Title Item
 */

export const NoTitleNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  margin: auto 0;
`;

export const NoTitleNotice = styled.span`
  ${font.boldBody}
  line-height: 2.0;
  text-align: center;
`;
