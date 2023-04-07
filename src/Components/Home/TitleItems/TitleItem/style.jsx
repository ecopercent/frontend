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
  object-fit: cover; /* 이미지 비율 유지 */
  border-radius: 50%;
  border: 1px solid;
`;

export const StrokePath = styled.path`
  fill: ${color.basicGreen};
`;

export const NoTitleNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;

  // 임시 패딩
  padding: 100px 0;

  // TODO : 하단 남는 공간 꽉 채우게
  // flex: 1 0 auto;
  // 공간 확인용 컬러
  // background-color: green;
`;

export const NoTitleNotice = styled.span`
  ${font.boldBody}
  line-height: 2.0;
  text-align: center;
`;
