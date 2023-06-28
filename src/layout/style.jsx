import styled from "@emotion/styled";
import media from "@style/media";

export const PageLayout = styled.div`
  height: 100%;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media ${media.desktop} {
    height: 100%;

    background-color: lightblue;
  }

  @media ${media.tabletM} {
    height: 100%;

    background-color: lightcoral;
  }

  @media ${media.tabletS} {
    height: 100%;

    background-color: lightgreen;
  }

  @media ${media.mobile} {
    height: 100%;
    height: -webkit-fill-available;
    height: fill-available;

    background-color: lightyellow;
  }
`;

export const OutletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-height: calc(100% - 48px);

  ${(props) => {
    if (props.fixedWidth)
      return `width: 500px; margin: 0 auto; max-height: 100vh;`;
    return ``;
  }}
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 100%;
  height: 48px;
`;
