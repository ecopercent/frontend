import * as color from "./color";
import * as font from "./font";

export const normal = `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 63px;
  height: 24px;

  background: ${color.lightGray};
  border-radius: 8px;
  border: 0px;

  cursor: pointer;

  ${font.normalBtn};

  @media (hover: hover) and (pointer: fine) {
    :hover {
      opacity: 0.7;
    }
  }
`;

export const disabled = `
  ${normal}
  opacity: 0.7;
  color: gray;
  cursor: not-allowed;
`;

export const green = `
  ${normal}
  background: ${color.lightGreen};
`;

export const pink = `
  ${normal}
  background: ${color.lightPink};
`;

export const profile = `
  ${normal}
  width: 86px;
`;

export const profileGreen = `
  ${profile}
  background: ${color.lightGreen};
`;

export const profileDisabled = `
  ${profile}
  opacity: 0.7;
  color: gray;
  cursor: not-allowed;
`;
