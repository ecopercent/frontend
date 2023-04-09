// import styled from "@emotion/styled";

export const normalBody = `
  font-family: "AppleSDGothicNeo", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  line-height: 16px;
  letter-spacing: -0.408px;
`;

export const boldBody = `
	${normalBody}
	font-weight: 600;
`;

export const normalSmall = `
  ${normalBody}
  font-size: 14px;
  line-height: 24px;
`;

export const normalXsmall = `
  ${normalBody}
  font-size: 12px;
  line-height: 24px;
`;

export const boldSmall = `
  ${normalSmall}
  font-weight: 600;
`;

export const normalTitle3 = `
  ${normalBody}
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
`;

export const boldTitle3 = `
${normalTitle3}
font-weight: 600;
`;

export const normalTextarea = `
  ${normalBody}
	font-size: 15px;
	line-height: 15px;
	letter-spacing: -0.408px;
`;

export const normalBtn = `
  ${normalBody}
	font-size: 12px;
	line-height: 16px;
	
	color: black;
`;

export const boldBtn = `
	${normalBtn}
	font-weight: 600;
`;

export const normalSubheadline = `
  ${normalBody}
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

export const boldHeadline = `
  ${boldBody}
  font-size: 17px;
  line-height: 22px;
  text-align: center;
`;
