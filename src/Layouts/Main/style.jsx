import styled from "@emotion/styled";

export const PageLayout = styled.div`
  height: 100%;
`;

export const PcLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const PcPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-height: calc(100% - 56px);

  width: 500px;
  margin: 0 auto;
`;

export const MobileLayout = styled.div`
  height: 100%;
  height: -webkit-fill-available;
  height: fill-available;

  display: flex;
  flex-direction: column;
`;

export const MobilePageWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-height: calc(100% - 56px);
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 100%;
  height: 56px;
  background-color: #333;
  color: #fff;
`;
