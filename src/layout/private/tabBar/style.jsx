import styled from "@emotion/styled";
import { lightGreen, basicGreen } from "@style/color";
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
    gap: 10px;
    border-right: 0.5px solid;
  }

  @media ${media.desktop} {
    width: 220px;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  margin: 30px 0 30px 30px;
  padding: 0 5px;

  @media ${media.mobile}, ${media.tabletSmallMin} and ${media.tabletSmallMax} {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 35px;
`;

export const LinkWrapper = styled.div`
  @media ${media.desktop}, ${media.tabletMin} and ${media.tabletMax} {
    display: flex;
    align-items: center;
    margin: 0 10px;
    width: calc(100% - 20px);
    padding: 5px 0;
    padding-left: 6px;
    gap: 8px;

    border-radius: 20px;
    @media (hover: hover) and (pointer: fine) {
      :hover {
        background-color: ${lightGreen};
      }
    }
    cursor: pointer;
  }

  @media ${media.mobile}, ${media.tabletSmallMin} and ${media.tabletSmallMax} {
    display: flex;
    width: calc(100% / 3);
  }
`;

export const TabItemBackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${(props) => {
    return props.featured ? `color: ${basicGreen};` : "";
  }}

  @media ${media.desktop}, ${media.tabletMin} and ${media.tabletMax} {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  @media ${media.mobile}, ${media.tabletSmallMin} and ${media.tabletSmallMax} {
    width: 100%;

    @media (hover: hover) and (pointer: fine) {
      :hover {
        background-color: ${basicGreen};
        color: white;
      }
    }
  }
`;

export const Description = styled.span`
  display: none;

  @media ${media.desktop} {
    display: inline;
    vertical-align: middle;
  }
`;
