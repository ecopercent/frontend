import styled from "@emotion/styled";
import { basicGreen } from "@style/color";
import media from "@style/media";

export const TabBarContainer = styled.div`
  display: flex;
  height: 100%;

  @media ${media.mobile}, ${media.tabletSmallMin} and ${media.tabletSmallMax} {
    border-top: 0.5px solid;
  }

  @media ${media.desktop}, ${media.tabletMin} and ${media.tabletMax} {
    width: 72px;
    position: fixed;
    left: 0;
    top: 0;

    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-right: 0.5px solid;
  }
`;

export const LogoWrapper = styled.div`
  width: 50px;

  @media ${media.mobile}, ${media.tabletSmallMin} and ${media.tabletSmallMax} {
    display: none;
  }
  margin: 30px 0;
  padding: 0 5px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const TabItemBackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    return props.featured ? `color: ${basicGreen};` : "";
  }}

  :hover {
    background-color: ${basicGreen};
    color: white;
  }

  @media ${media.desktop}, ${media.tabletMin} and ${media.tabletMax} {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  @media ${media.mobile}, ${media.tabletSmallMin} and ${media.tabletSmallMax} {
    width: calc(100% / 3);
  }

  cursor: pointer;
`;
