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

  @media ${media.mobile} {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const OutletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: calc(var(--vh, 1vh) * 100 - 48px);

  @media not ${media.mobile} {
    ${(props) => {
      if (props.fixedWidth) return `width: 500px; margin: 0 auto;`;
      return ``;
    }}
  }

  ${(props) => {
    if (props.fullHeight) return `height: calc(var(--vh, 1vh) * 100);`;
    return ``;
  }}

  @media ${media.desktop}, ${media.tabletMin} and ${media.tabletMax} {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 100%;
  height: 48px;
`;
