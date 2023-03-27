import styled from "@emotion/styled";

export const PageLayout = styled.div`
  height: 100%;
`;

export const PcLayout = styled.div`
  width: 100%;
  height: 100%;

  // min-height: calc(100vh);
`;

export const PcPageWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  margin: 0 auto;
  padding-bottom: 8%;
`;

export const MobilePageWrap = styled.div`
  padding-bottom: 8%;
`;

export const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;

  // min-height: 100vh - 50px;
  // min-height: -webkit-fill-available;

  height: 100vh;
  height: -webkit-fill-available;
  height: fill-available;
`;

export const FooterWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 8%;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
`;
